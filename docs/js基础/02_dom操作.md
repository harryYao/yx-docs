# DOM操作


javascript 原生方法对dom节点的操作包括：访问（查找）、创建、添加、删除、替换、插入、复制、移动等。

```js
//查找节点
document.getElementById("id");// 通过id查找，返回唯一的节点
document.getElementsByClassName("class");// 通过class查找，返回值为nodeList类型
document.getElementsByTagName("div");// 通过标签名查找，返回值为nodeList类型

//创建节点
document.createDocumentFragment();//创建内存文档碎片
document.createElement();//创建元素
document.createTextNode();//创建文本节点
 
//添加节点
var ele = document.getElementById("my_div");
var oldEle = document.createElement("p");
var newEle=document.createElement("div");
ele.appendChild(oldEle);

//删除节点
ele.removeChild(oldEle);

//替换节点
ele.replaceChild(newEle,oldEle);

//插入节点
ele.insertBefore(oldEle,newEle);//在newEle之前插入 oldEle节点

//复制节点
var cEle = oldEle.cloneNode(true);//深度复制，复制节点下面所有的子节点
cEle = oldEle.cloneNode(false);//只复制当前节点，不复制子节点

//移动节点
var cloneEle = oldEle.cloneNode(true);//被移动的节点
document.removeChild(oldEle);//删除原节点
document.insertBefore(cloneEle,newEle);//插入到目标节点之前
```

createElemet:创建文档碎片～
```js
var node = document.createElement("nodeName");
```


createTextNode： 创建文本节点
```js
var txt = document.createTextNode("这是一段文本");
```


appendChild: 添加子节点(属性节点，文本节点，元素节点)
```js
var parent = document.getElementById("parent");
parent.appendChild(node) ;
```

insertBefore: 把一个新元素插入到现有元素之前
```js
parentEment.insertBefore(newElement,targetElement);
```


元素节点的父元素必须死元素节点，属性节点和文本节点的自元素不允许是元素节点

自己实现一个insertAfter:把一个元素插到现有元素之后
```js
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement){
    parent.appendChild(newElement);
  }else{
    parent.insertBefore(newElement,targetElement.nextSibling)
  }
}
```

自己实现一个 lastChildrenElement: 获取最后一个元素节点

```js
// * 通配符
function lastChildElement(element) {
    var elementArray = element.getElementsByTagName('*');
    if (elementArray.length<1) return;
    return elementArray.pop();
}
```


js 设置和更新 css
```js
var para = document.getElementById("element");
para.style.color = "black";
para.style.font = "2em 'times',serif";
```


作者：Artifacts
链接：https://www.jianshu.com/p/632c7dcc67a3
