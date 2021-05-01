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

main
promise
main2
process.nextTick1
promise then
setTimeout
process.nextTick2


理解 process.nextTick() 参考文档：
 https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/
  https://www.oschina.net/translate/understanding-process-next-tick?print