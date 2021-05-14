// test for process.nextTick()
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