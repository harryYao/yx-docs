# process.nextTick() 

宏任务和微任务（一个宏任务配多个微任务）：每次执行微任务队列会全部执行完并清空
```js
console.log('main')
process.nextTick( () => {
  console.log('process.nextTick1')
})

setTimeout(() => {
  console.log('setTimeout')
  process.nextTick(() => {
    console.log('process.nextTick2')
  })
}, 0)

new Promise((resolve, reject) => {
  console.log('promise')
  resolve()
}).then(() => {
  console.log('promise then')
})

console.log('main2')
```

执行结果

main   // 宏任务
promise  // 宏任务
main2  // 宏任务
process.nextTick1  // 微任务
promise then  // 微任务
setTimeout  // 宏任务2
process.nextTick2 // 宏任务2下的微任务


**rocess.nextTick()知识点**
* process.nextTick()会将callback添加到”next tick queue“
* ”next tick queue“会在当前JavaScript stack执行完成后，下一次event loop开始执行前按照FIFO出队
* 如果递归调用process.nextTick()可能会导致一个无限循环，需要去适时终止递归。
* process.nextTick()可用于控制代码执行顺序。保证方法在对象完成constructor后但是在I/O发生前调用。
* process.nextTick()可完全异步化API。API要么100%同步要么100%异步是很重要的，可以通过process.nextTick()去达到这种保证


----

理解 process.nextTick() 参考文档：

强大的异步专家process.nextTick()
https://www.jianshu.com/p/5328c72279ff

 https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/
 https://www.oschina.net/translate/understanding-process-next-tick?print



## Process.nextTick 和 setImmediate 的区别？
https://www.zhihu.com/question/23028843




https://segmentfault.com/a/1190000013102056?utm_source=tag-newest
## Node中事件循环阶段解析
下面是事件循环不同阶段的示意图：

<img :src="$withBase('/imgs/node_event_loop.png')" alt="foo" />
每个阶段都有一个先进先出的回调队列要执行。而每个阶段都有自己的特殊之处。简单来说，就是当事件循环进入某个阶段后，会执行该阶段特定的任意操作，然后才会执行这个阶段里的回调。当队列被执行完，或者执行的回调数量达到上限后，事件循环才会进入下一个阶段。

1. timers
一个timer指定一个下限时间而不是准确时间，在达到这个下限时间后执行回调。在指定的时间过后，timers会尽早的执行回调，但是系统调度或者其他回调的执行可能会延迟它们。

> 从技术上来说，poll阶段控制timers什么时候执行，而执行的具体位置在timers。
下限的时间有一个范围：[1, 2147483647]，如果设定的时间不在这个范围，将被设置为1。

2. I/O callbacks
这个阶段执行一些系统操作的回调，比如说TCP连接发生错误。

3. idle, prepare
系统内部的一些调用。

4. poll
这是最复杂的一个阶段。

poll阶段有两个主要的功能：**一是执行下限时间已经达到的timers的回调，一是处理poll队列里的事件。**

当事件循环进入poll阶段：

* poll队列不为空的时候，事件循环肯定是先遍历队列并同步执行回调，直到队列清空或执行回调数达到系统上限。
* poll队列为空的时候，这里有两种情况。

  * 如果代码已经被setImmediate()设定了回调，那么事件循环直接结束poll阶段进入check阶段来执行check队列里的回调。
  * 如果代码没有被设定setImmediate()设定回调：

    * 如果有被设定的timers，那么此时事件循环会检查timers，如果有一个或多个timers下限时间已经到达，那么事件循环将绕回timers阶段，并执行timers的有效回调队列。
    * 如果没有被设定timers，这个时候事件循环是阻塞在poll阶段等待回调被加入poll队列。

5. check
这个阶段允许在poll阶段结束后立即执行回调。如果poll阶段空闲，并且有被setImmediate()设定的回调，那么事件循环直接跳到check执行而不是阻塞在poll阶段等待回调被加入。

setImmediate()实际上是一个特殊的timer，跑在事件循环中的一个独立的阶段。它使用libuv的API来设定在poll阶段结束后立即执行回调。

**注：setImmediate()具有最高优先级，只要poll队列为空，代码被setImmediate()，无论是否有timers达到下限时间，setImmediate()的代码都先执行。**

6. close callbacks
如果一个socket或handle被突然关掉（比如socket.destroy()），close事件将在这个阶段被触发，否则将通过process.nextTick()触发。