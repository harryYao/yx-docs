## window.name

在整理js基础类型知识的时候，在chrome浏览器console中调试时，发现了如下问题！
typeof (new String('Tom')) // 正常是object类型
使用name这个变量测试时，却为string, 而其他变量名都是 object
```
  var name = new String('Tom')
  typeof name
  "string"
  var name2 = new String('Tom')
  typeof name2
  "object"
```


#### 带着以下的一些疑虑，进行了一番测试
* 查看其他浏览器的情况，查看nodejs的情况?
* 是否 name 这个词的特殊性？


> 经检测， name 这个属性在Chrome&firefox浏览器中的特殊性，为浏览器环境内置的一个属性。
> IE, Node都没有这样的设置。

```
for(var b in window) { 
  if(window.hasOwnProperty(b) && b === 'name') {
    console.log(b); 
  } 
}
// name
```

> 进一步调试发现，不仅String, 任何类型赋值，都会被默认调用.toString() 方法；
```
var name = 1;
console.log(name); // "1"
var name = [1,2,3];
console.log(name); // "1,2,3"
var name = () => { console.log('I\'m a function!')}
console.log(name); // "() => { console.log('I\'m a function!')}"
var name = new Set();
console.log(name); // "[object Set]"
```


> 但是使用es6的 const/let 去声明变量的时候，不会被内部转为 "string"
```
var name = new String('s')
typeof name; // "string"
const name = new String('s')
typeof name; // "object"
let name = new String('s')
typeof name; // "object"

```

#### 进行到此知道了 chrome对象中的 window.name的特殊性，为了了解为何这样的设置，进行了更多了调研

## window.name跨域
在页面在浏览器端展示的时候，我们总能在控制台拿到一个全局变量window，该变量有一个name属性，其有以下 特征：
1. 每个窗口都有独立的window.name与之对应；
2. 在一个窗口的生命周期中（被关闭前），窗口载入的所有页面同时共享一个window.name，每个页面对window.name都有读写的权限；
3. window.name一直存在与当前窗口，即使是有新的页面载入也不会改变window.name的值；
4. window.name可以存储不超过2M的数据，数据格式按需自定义。

下面我们就验证一下同一个窗口下，页面重新载入，window.name仍然不变

```
<script>
    // 这里是要传输的数据，大小一般为2M，IE和firefox下可以大至32M左右
    // 数据格式可以自定义，如json、字符串
    window.name = "这是a页面的内容"; 
    setTimeout(function(){
        window.location.href= b.html;
        console.log(window.name);  //"这是a页面的内容"
    },2000);
</script>
```

* IE环境也存在 window.name, 但是我们重新定义时不会默认执行.toString()方法

有时候我们的需求是在https://localhost/a.html页面内，获得"https://xxx.github.io/xxx/"上的数据，并且页面不能进行刷新。

对于这种需求，我们不能通过window.location.href更新页面来获得数据，我们可以用一个隐藏的iframe作为中间的代理，iframe的src为"https://xxx.github.io/xxx/"，在iframe页面加载完毕的时候，我们再让iframe与当前页面属于同一个域下，我们就可以拿到window.name了。

```
<script>
    function load () {
        var iframe = document.getElementById('iframe');
        iframe.onload = function () {
            var window = iframe .contentWindow;
            console.log(window.name);
        }
        iframe.src = 'about:blank'; //让url地址改变，与当前页面同源,可以任意写，保持同源就好
    }
</script>
<iframe id="iframe" src="https://xxx.github.io/xxx/" onload="load()"></iframe>
```

完成的跨域代码
```
<script type="text/javascript">
    var boo = false;
    var iframe = document.createElement('iframe');
    var loadData = function() {
        if (boo) {
            var data = iframe.contentWindow.name;    //获取window.name
            console.log(data); 
            //销毁数据   
            iframe.contentWindow.document.write('');
            iframe.contentWindow.close();
            document.body.removeChild(iframe);
        } else {
            boo = true;
            iframe.contentWindow.location = "b.html";    // 设置的代理文件,iframe重新载入
        }  
    };
    iframe.src = 'https://xxx.github.io/xxx';
    if (iframe.attachEvent) {
        iframe.attachEvent('onload', loadData);
    } else {
        iframe.onload  = loadData;
    }
    document.body.appendChild(iframe);
</script>
```


作者：Bennt
链接：https://www.jianshu.com/p/43ff69d076e3
