# yx_docs

# 全局下载 vue 脚手架包
npm install -g @vue/cli
# 创建 vue2 的项目
vue create atguigu-utils_docs


# 下载 VuePress
npm install -D vuepress

# 新建一个文件: docs/README.md
# Hello VuePress!

# 启动文档项目
npx vuepress dev docs

```
"scripts": {
  "doc:dev": "vuepress dev docs",
  "doc:build": "vuepress build docs",
  "doc:deploy": "gh-pages -d docs/dist"
}
```


# 下载工具包
npm install -D gh-pages
# 执行打包命令
npm run doc:build
# 执行部署命令
npm run doc:deploy


> https://harryyao.github.io/yx-docs/
