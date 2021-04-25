## 开发小技巧


## 多行编辑
* ctrl + d, 选中多个相同单位，直接多行编辑
* ctrl + shift + alt + 方向键上下，多个光标，多行编辑
> Increment Selection 插件
* 选中多行后，插入自增的id 1,2,3,4,5……

----


## npm 修改缓存路径，减少c盘压力

* 设置 npm 全局包下载路径
```js
npm config set prefix "D:\system\nodejs\node_global"
```

* 设置 npm 缓存路径
```js
npm config set cache "D:\system\nodejs\node_cache"
```

----

## 快速启动一个静态服务器 方便用户构建后代码测试

1. serve
https://www.npmjs.com/package/serve  

```js
npm i serve -g
serve -s build
```

2. anywhere 
```js
npm install -g anywhere
anywhere 8888 
```

3. http-server
```js
npm install http-server -g
http-server
```
http-server -c-1 也可启动，表示在禁止缓存状况下启用


## css属性学习

看张鑫旭博客最方便了 https://www.zhangxinxu.com/wordpress/