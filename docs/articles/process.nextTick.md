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