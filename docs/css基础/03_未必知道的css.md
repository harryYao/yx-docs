# 未必知道的CSS

## 1. shape-outside

可以来设置文字环绕时的形状。（示例）
```css
.c1 {
  width: 200px;
  height: 200px;
  float: left;
  background-color: rgb(101, 101, 185);

  border: 1px solid #dedee3;
  border-radius: 50%;
  shape-outside: circle();
  margin: 20px;
  
  /* margin: 50px;
  shape-outside: border-box; */
}
```
## clip-path

clip-path 直译过来就是裁剪路径，使用SVG或形状定义一个HTML元素的可见区域的方法。想象一下你在Photoshop中勾勒路径的场景。MDN上是这样介绍 clip-path的：
clip-path属性可以防止部分元素通过定义的剪切区域来显示，仅通过显示的特殊区域。剪切区域是被URL定义的路径代替行内或者外部svg，或者定义路线的方法例如circle()。clip-path属性代替了现在已经弃用的剪切 clip属性。   


语法详解和示例
1. 基本图形：inset(定义矩形)
2. 基本图形：circle(定义圆)
3. 基本图形：ellipse(定义椭圆)
4. 基本图形：polygon(定义多边形)

* 兼容性
目前 IE 和 Edge 都不支持这个属性。Firefox 仅部分支持 clip-path，部分支持是指只支持形状和 URL(#path) 内联SVG的语法。Chrome、Safari 和 Opera 需要使用 -webkit- 的前缀兼容此属性。不支持外部的 SVG 形状。更多兼容信息可以点击这里查看 clip-path 浏览器兼容情况。-- 摘录网上说法，有点老了，待更新。