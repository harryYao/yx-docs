## 1. 长列表性能优化
在2.x版本中Vue会通过Object.defineProperty对数据进行劫持, 以实现双向数据绑定.
但在一些特定的业务场景, 组件只需要进行纯数据展示, 不会有任何变化, 此时我们可能不需要Vue对来数据进行劫持.
在大量数据需要进行呈现时, 如果禁止Vue对数据进行劫持, 会明显减少组件初始化的时间.

通过Object.freeze方法冻结对象, 对象一旦被冻结就不能再被修改了.


```vue
export default {
  data: () => ({
    userList: []
  }),
  async created() {
    const userList = await this.$service.get("/getuserList");
    this.userList = Object.freeze(userList);
  }
};
```

## 2. Vue组件渲染性能分析

基于上面的案例(长列表性能优化), 可以通过Object.freeze来实现纯呈现的列表性能优化, 那如何来确认呢?
我们可以通过Chrome Devtools来检测. 但为了获得准确的性能分析数据, 我们需要开启Vue应用的性能模式.
开启Vue性能模式(适用于开发模式)
在工程中的main.js中(Vue根实例初始化之前), 添加以下代码:
`Vue.config.performance = true;`
复制代码当然, 你也可以根据需要对当前环境进行判断, 来决定是否开启性能模式.
```js
const isDev = process.env.NODE_ENV !== "production";
Vue.config.performance = isDev;
```
复制代码这样, 将会激活Vue在内部用于标记组件性能的 Timing API. 如下图所示:

假设, 此时我们创建好了一个demo工程, 并有一个Hello.vue的组件, 用于验证长列表渲染性能问题. 运行本地工程后, 打开浏览器到指定路由(确认有加载Hello.vue组件). 打开控制台, 并点击"reload"按钮, 如下图所示:

此时, 将会记录页面性能. 因为已经在main.js上添加了Vue.config.performance设置，此时你将能够在分析中看到时序部分. 如下图所示.

此时, 你会发现这里有3个指标:

init, 创建组件实例所花费的时间
render, 创建vDOM结构所花费的时间
patch, 将vDOM结构渲染成实际的DOM元素所花费的时间

验证性能
在此例中, http://localhost:8080/#/hello 路由下, 只有两个组件:
App.vue
  Hello.vue
复制代码App.vue是视图组件, 只有一个<router-view/>
Hello.vue只做一个简单的长列表(100000条件数据)展示, 代码如下:
```vue
<template>
 <div>
   <span v-for="(item, idx) in users" :key="idx">
     {{item.name}}
   </span>
 </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  components: {

  },
  created () {
    let users = Array.from({ length: 100000 }, (item, index) => ({ name: index }))
    this.users = users
  }
}
</script>
```
复制代码此时, Hello.vue组件render&patch的时间为:

render -> 924ms
patch  -> 1440ms


修改Hello.vue的created钩子函数中的代码如下:
created () {
  let users = Array.from({ length: 100000 }, (item, index) => ({ name: index }))
  this.users = Object.freeze(users)
}
复制代码再次点击"reload"按钮, 重新测试性能.

此时, Hello.vue组件render&patch的时间为:

render -> 397ms (上一次测试结果为: 924ms, 节省时间: 527ms, 性能提供约为 57%)
patch  -> 782ms (上一次测试结果为: 1440ms, 节省时间: 658ms, 性能提供约为: 45.7%)

这里仅测试了一次, 但从结果来看, 增加Object.freeze冻结后, 整体性能会有明显提升.

作者：JamesZhang80078
链接：https://juejin.cn/post/6844904121368051725
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

