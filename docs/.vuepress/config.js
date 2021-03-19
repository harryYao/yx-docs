// 注意: base的值为github仓库的名称(/不能少)
module.exports = {
  base: '/yx-docs/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: '前端小记', // 标题
  description: 'yaoxin的笔记文档', // 标题下的描述
  
  themeConfig: { // 主题配置
    logo: '/logo.png',
    nav: [ // 头部导航
      { text: 'GITHUB', link: 'https://github.com/harryYao' }
    ],
    sidebar: [ // 左侧导航
      {
        title: 'JS笔记', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'js基础/01_js类型',
          'js基础/02_dom操作',
          'js基础/03_原型原型链',
          'js基础/04_作用域作用域链',
          'js基础/05_闭包',
          'js基础/06_继承'
        ]
      },
      {
        title: 'CSS笔记',
        collapsable: false,
        children: [
          'css基础/01_选择器',
        ]
      },
      {
        title: '博客文章',
        collapsable: false,
        children: [
          'articles/window.name',
        ]
      }
    ],
    // sidebarDepth: 3 // 左侧导航的深度默认是2级
  },

  head: [ // 指定网页head图标
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ]
}