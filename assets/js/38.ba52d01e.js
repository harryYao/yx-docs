(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{304:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" EVENT LOOP")]),t._v(" "),a("h2",{attrs:{id:"js是单线程的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js是单线程的"}},[t._v("#")]),t._v(" JS是单线程的")]),t._v(" "),a("p",[t._v("作为浏览器的脚本语言,JS的主要用途就是操作DOM,以及与用户交互.这就决定了它只能是单线程的.否则会带来很复杂的同步问题.比如JS同时有两个线程,一个线程要在某个DOM节点上添加内容,而另一个线程要删除这个DOM节点,那么浏览器以哪个为准呢.因此JS必须是单线程的,它在同一时间只能做一件事.")]),t._v(" "),a("h2",{attrs:{id:"web-worker-html5新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-worker-html5新特性"}},[t._v("#")]),t._v(" Web Worker(html5新特性)")]),t._v(" "),a("p",[t._v("Web Worker为JS创建多线程环境,允许主线程创建Worker线程,将一些任务分配给后者运行.在主线程运行的同时,Worker线程在后台运行,互不干扰,等到Worker线程完成运行,再把结果返回给主线程.但是Worker线程一旦新建成功,就会始终运行(不会被主线程的活动打断),会带来资源上的巨大消耗,因此当Worker对任务计算结束,就应该关闭.")]),t._v(" "),a("ul",[a("li",[t._v("同源限制: 分配给Worker线程的脚本文件,必须与主线程脚本文件同源")]),t._v(" "),a("li",[t._v("文件限制: worker线程不能读取本地文件,只能执行同源脚本")]),t._v(" "),a("li",[t._v("DOM限制: worker线程无法操作DOM")]),t._v(" "),a("li",[t._v("通信限制: 主线程和worker线程不在同一个执行上下文,不能直接通信,需要通过消息完成")]),t._v(" "),a("li",[t._v("脚本限制: Worker线程不能执行alert和confirm,但是可以调用XMLHttpRequest")])]),t._v(" "),a("h2",{attrs:{id:"service-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[t._v("#")]),t._v(" Service Worker")]),t._v(" "),a("p",[t._v("Service Worker基于Web Worker,并在Web Worker上添加了离线缓存能力,它是一个服务器与浏览器的中间人(代理服务器)的角色,如果网站注册了Service Worker,那么就可以拦截当前网站的所有请求,进行管理(开发者自己编程判断)是否使用缓存或者发起请求.\nPromises是一种非常适用于异步操作的机制,一个操作依赖于另一个操作的成功执行.这是Service Worker的核心工作机制.")]),t._v(" "),a("h2",{attrs:{id:"event-loop-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-2"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),a("p",[t._v("Event Loop 是一个很重要的概念，指的是计算机系统的一种运行机制。\nJavaScript语言就采用这种机制，来解决单线程运行带来的一些问题。")]),t._v(" "),a("h3",{attrs:{id:"浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),a("p",[t._v("JS是单线程的,它在同一时间只能做一件事,那么这就意味着:前一个任务结束才能执行后一个任务.如果前一个任务(比如I/O、AJAX、回调函数)耗时很久,那么下一个任务就必须等待.如果因为计算量比较大,占用的CPU比较多(复杂的逻辑或者DOM渲染),还可以理解,但是如果只是简单的I/O那么我们就要考虑为什么不把这样的任务挂起,等到I/O操作完毕再执行呢.因此所有的任务又分为:同步任务和异步任务.")]),t._v(" "),a("ul",[a("li",[t._v("同步任务(synchronous):在主线程上排队执行的任务,只有前一个执行完毕,才会执行下一个任务")]),t._v(" "),a("li",[t._v("异步任务(asynchronous):不进入主线程,进入任务队列(task queue)的任务,只有任务队列通知主线程某个任务可以执行了,该任务才会进入主线程执行.")]),t._v(" "),a("li",[t._v("任务队列(task queue):一个事件队列,先进先出的数据结构,当异步任务完成,就会在队列中添加一个事件,表示相关的异步任务可以进入执行栈.排在前面的事件优先被主线程读取,读取的过程是自动的,当执行栈清空,任务队列的上的第一位事件就会自动进入主线程.主线程读取任务队列,其实就是读取里面的事件.\n"),a("ul",[a("li",[t._v("I/O任务完成,在任务队列中添加一个事件")]),t._v(" "),a("li",[t._v("自定义事件(鼠标事件、ajax等)的回调函数,当触发交互动作,回调函数在任务队列中添加一个事件")]),t._v(" "),a("li",[t._v("定时器(setTimeout/setInterval):向任务队列尾部添加定时事件,主线程检查执行时间,到达时间后,事件进入主线程.setTimeout(callback,time)在time毫秒后执行callback,指定任务在主线程最早可得的空闲时间执行,只执行一次,当time为0时表示当前执行栈清空立即执行callback.setInterval(callback,time)在time毫秒后执行callback,重复执行多次.html5规定setTimeout的time不得低于4毫秒,老版本浏览器规定不得低于10毫秒,而对于dom操作通常是16毫秒执行一次(requestAnimationFrmae > setTimeout).")])])])]),t._v(" "),a("p",[t._v("执行栈中的同步任务总是在任务队列中的异步任务前执行.")]),t._v(" "),a("h2",{attrs:{id:"node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" Node")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/imgs/node_event_loop.jpg"),alt:"foo"}}),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("V8引起解析JS脚本")]),t._v(" "),a("li",[t._v("解析后的代码调用Node API")]),t._v(" "),a("li",[t._v("libuv库负责Node API的执行,它将不同的任务分配给不同的线程,形成Event Loop,以异步的方式将任务的执行结果返回给V8引擎")]),t._v(" "),a("li",[t._v("V8引擎将结果返回给用户")])])]),t._v(" "),a("p",[t._v("Node中Event Loop分为6个阶段")]),t._v(" "),a("ul",[a("li",[t._v("timers:执行setTimeout和setInterval中到期的callback")]),t._v(" "),a("li",[t._v("pending callback: 上一轮循环中少数的callback会在这一阶段执行\nidle,prepare:仅在内部使用")]),t._v(" "),a("li",[t._v("poll:最重要的阶段,执行pending callback,在适当的情况下会阻塞在这个阶段")]),t._v(" "),a("li",[t._v("check: 执行setImmediate的callback")]),t._v(" "),a("li",[t._v("close callback: 执行close事件的callback")]),t._v(" "),a("li",[t._v("process.nextTick:在当前执行栈尾部,下一次Event Loop之前触发回调函数,它指定的任务总是发生在所有异步任务之前(process.nextTick > Promise)")]),t._v(" "),a("li",[t._v("setImmediate:在当前任务队列尾部添加事件,指定的任务总是在下一次Event Loop时执行.(setImmediate > setTimeout)")])]),t._v(" "),a("p",[t._v("多个process.nextTick总是在当前执行栈一次执行完,多个setImmediate可能需要多次loop才能执行完成.")]),t._v(" "),a("p",[t._v("Event Loop")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("所有的同步任务都在主线程中执行,形成一个执行栈(当函数开始执行,形成一个执行上下文,推入执行栈)")]),t._v(" "),a("li",[t._v("主线程之外有一个“任务队列”,只要异步任务有了运行结果,就在“任务队列”中放置一个事件")]),t._v(" "),a("li",[t._v("一旦执行栈中的所有同步任务执行完毕,系统就会读取“任务队列”,看看有哪些事件,那么对应的异步任务,结束等待状态,进入执行栈,开始执行")]),t._v(" "),a("li",[t._v("主线程不断重复以上三个步骤")])])]),t._v(" "),a("p",[t._v("以上当主线程空了就去读取“任务队列”的事件这个循环的运行机制,就是"),a("b",[t._v("Event Loop")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"宏任务和微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务和微任务"}},[t._v("#")]),t._v(" 宏任务和微任务")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/imgs/event_loop1.jpg"),alt:"foo"}}),t._v(" "),a("ol",[a("li",[t._v("执行全局JS,全局JS作为全局任务,属于一个宏任务,其中的同步任务推入执行栈,异步任务中的宏任务进入任务队列,微任务进入微任务队列")]),t._v(" "),a("li",[t._v("执行栈清空,执行微任务队列的微任务")]),t._v(" "),a("li",[t._v("微任务队列清空,读取任务队列的宏任务到执行栈中")]),t._v(" "),a("li",[t._v("循环执行步骤2、3")])]),t._v(" "),a("h2",{attrs:{id:"宏任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务"}},[t._v("#")]),t._v(" 宏任务")]),t._v(" "),a("p",[t._v("一般消息队列中的任务被称为宏任务,它是由浏览器或者Node环境实现的方法,在全局的JS也可以看作是一个宏任务.")]),t._v(" "),a("ul",[a("li",[t._v("Script(整体代码)")]),t._v(" "),a("li",[t._v("setTimeout/setInterval(定时任务)")]),t._v(" "),a("li",[t._v("I/O")]),t._v(" "),a("li",[t._v("UI交互事件")]),t._v(" "),a("li",[t._v("postMessage")]),t._v(" "),a("li",[t._v("MessageChannel")]),t._v(" "),a("li",[t._v("setImmidate(Node)")])]),t._v(" "),a("h2",{attrs:{id:"微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微任务"}},[t._v("#")]),t._v(" 微任务")]),t._v(" "),a("p",[t._v("由于消息队列中粗时间颗粒度的任务已经不能胜任部分领域的需求,所以微任务应运而生(ES6,ES3之前JS本身没有异步请求能力,不存在微任务,ES5之后引入Promise,JS不需要浏览器也可以发起异步任务),微任务可以在时效性和效率之间做个有效的权衡.每个宏任务都包含一个微任务队列.在当前宏任务的JS快要执行完成时(微任务检查点,JS引擎准备退出全局执行上下文清空执行栈),JS引擎会检查全局执行上下文中的微任务队列,按照顺序执行微任务.如果在执行微任务的过程中产生新的微任务,那么将会将该微任务加入当前微任务队列中,V8引擎会一直循环执行微任务队列中的任务,直到队列为空时才结束(新的微任务不会推迟).\n由JS引擎提供的方法就属于微任务.")]),t._v(" "),a("ul",[a("li",[t._v("Promise")]),t._v(" "),a("li",[t._v("MutationObserver")]),t._v(" "),a("li",[t._v("process.nextTick(Node)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局JS,作为宏任务加入到执行栈")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定时器任务,推入任务队列(宏任务)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定时器任务,推入任务队列(宏任务)")]),t._v("\n\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微任务")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局JS,作为宏任务加入到执行栈")]),t._v("\n")])])]),a("p",[t._v("那么这个执行结果为")]),t._v(" "),a("blockquote",[a("p",[t._v("VM123:1 start"),a("br"),t._v("\nVM123:21 end"),a("br"),t._v("\nVM123:18 promise3"),a("br"),t._v("\nundefined"),a("br"),t._v("\nVM123:4 timer1"),a("br"),t._v("\nVM123:6 promise1"),a("br"),t._v("\nVM123:11 timer2"),a("br"),t._v("\nVM123:13 promise2")])]),t._v(" "),a("ul",[a("li",[t._v("log('start')作为全局JS,输出start")]),t._v(" "),a("li",[t._v("setTimeout作为定时器任务,将回调函数加入任务队列")]),t._v(" "),a("li",[t._v("setTimeout作为定时器任务,将回调函数加入任务队列")]),t._v(" "),a("li",[t._v("Promise.then作为微任务,加入微任务队列")]),t._v(" "),a("li",[t._v("log('end')作为全局JS,输出end")]),t._v(" "),a("li",[t._v("执行栈清空,全局JS作为宏任务执行完毕,开始执行微任务队列,此时微任务队列中存在log('promise3')")]),t._v(" "),a("li",[t._v("微任务队列清空,将任务队列事件推入执行栈,判断定时时间开始执行定时事件")]),t._v(" "),a("li",[t._v("定时事件log('timer1'),同时Promise.then加入微任务队列,宏任务执行结束,执行微任务,输出promise1")]),t._v(" "),a("li",[t._v("定时事件log('timer2'),同时Promise.then加入微任务队列,宏任务执行结束,执行微任务,输出promise2")])]),t._v(" "),a("p",[t._v("作者：zjwgank在掘金\n链接：https://juejin.cn/post/6942882400703610916")])])}),[],!1,null,null,null);s.default=e.exports}}]);