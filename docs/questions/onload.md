## window.onload() & document.ready() 事件先后顺序

document.ready()和传统的方法<body onload=”load()”> 相似，不同的是onload()的方法是在页面加载完成后才发生，这包括DOM元素和其他页面元素（例如图片）的加载，

因此，使用document.ready()方法的执行速度比onload()的方法要快。