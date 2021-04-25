# 异步编程


## 一、异步编程简介
  众所周知JavaScript语言执行环境是“单线程”（单线程，就是指一次只能完成一件任务，如果有多个任务就必须排队等候，前面一个任务完成，再执行后面一个任务）。这种“单线程”模式执行效率较低，任务耗时长。   
  为了解决这个问题，提出了“异步模式”(异步模式，是指后一个任务不等前一个任务执行完就执行，每个任务有一个或多个回调函数)。   
  异步模式使得JavaScript在处理事务时非常高效，但也带来很多问题，如异常处理困难、嵌套过深。 

## 二、异步编程的发展
JavaScript异步编程从出现不断发展和精进，主要经历了以下4个阶段：
### 阶段1 传统callback回调函数
  回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数。它的英语名字 callback，直译过来就是"重新调用"。虽然回调函数多用于异步编程，但带有回调函数的方法不一定是异步的。
```js
// demo1（简单callback封装）
function successCallback() {
    console.log('callback');
}
function fn(successCallback) {
    console.log('这里表示执行了一大堆各种代码');

    // 其他代码执行完毕，最后执行回调函数
   successCallback instanceof Function && successCallback();
}
fn(successCallback); 
```

```js
//callback hell 回调地狱
doSomethingAsync1(function(){
    doSomethingAsync2(function(){
        doSomethingAsync3(function(){
            doSomethingAsync4(function(){
                doSomethingAsync5(function(){
                    // code...
                });
            });
        });
    });
});
```

可以发现一个问题，在回调函数嵌套层数不深的情况下，代码还算容易理解和维护，一旦嵌套层数加深，就会出现“回调金字塔”的问题，就像demo2那样，如果这里面的每个回调函数中又包含了很多业务逻辑的话，整个代码块就会变得非常复杂。从逻辑正确性的角度来说，上面这几种回调函数的写法没有任何问题，但是随着业务逻辑的增加和趋于复杂，这种写法的缺点马上就会暴露出来，想要维护它们实在是太痛苦了，这就是“回调地狱(callback hell)”。


### 阶段2 事件发布/订阅模式
  发布订阅模式，它定义了一种一对多的关系，可以使多个观察者对象对一个主题对象进行事件监听，当这个主题对象发生改变时，依赖的所有对象都会被通知到。
```js
var PubSub = function(){
    this.handlers = {}; 
};
PubSub.prototype.subscribe = function(eventType, handler) {
    if (!(eventType in this.handlers)) {
        this.handlers[eventType] = [];
    }
    this.handlers[eventType].push(handler); //添加事件监听器
    return this;//返回上下文环境以实现链式调用
};
PubSub.prototype.publish = function(eventType) {
    var _args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0, _handlers = this.handlers[eventType]; i < _handlers.length; i++) {
        _handlers[i].apply(this, _args);// 遍历事件监听器
    }
    return this;
};
var event = new PubSub;// 构造PubSub实例
event.subscribe('list', function(msg) {
    console.log(msg);
});
event.publish('list', {data: ['one,', 'two']});// Object {data: Array[2]}
```
### 阶段3 Deferred
  jQuery $.Deferred() 是一个构造函数，用来返回一个链式实用对象方法来注册多个回调，并且调用回调队列，传递任何同步或异步功能成功或失败的状态。成功回调done()中使用deferred.resolve，失败回调fail()中使用deferred.reject。
``` js
var deferred = $.Deferred();
$.ajax(url, {
    type: "post",
    dataType: "json",
    data: data
}).done(function(json) [
    if (json.code !== 0) {
        showError(json.message || "操作发生错误");
        deferred.reject();
    } else {
        deferred.resolve(json);
    }
}).fail(function() {
    showError("服务器错误，请稍后再试");
    deferred.reject();
}).always(function() {
    if (button) {
        button.prop("disabled", false);
    }
});
return deferred.promise();
```
### 阶段4 Promise
  Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。   
  所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。   
  使用Promise对象可以用同步操作的流程写法来表达异步操作，避免了层层嵌套的异步回调，代码也更加清晰易懂，方便维护，也可以捕捉异常。
```js
function fn(num) {
  return new Promise(function(resolve, reject) {
    if (typeof num == 'number') {
      resolve();
    } else {
      reject();
    }
  })
  .then(function() {
    console.log('第1个then：参数是一个number值');
  })
  .then(null, function() {
    console.log('第2个then');
  })
}
fn('haha');
fn(1234);// 第1个then：参数是一个number值、第2个then
```


### 异步编程解决方案的优缺点：

|  表头   | callback回调  | 事件发布/订阅 | Deferred | Promise |
|  ----  | ----  | ----  | ----  | ----  |
|  优点   | 简单、容易理解 | 容易理解，可以绑定多个事件，每个事件可以指定多个回调函数 |  避免了层层嵌套的回调函数，有统一的API，使得控制异步操作更加容易 |  ES6将promise写进了语言标准，统一了使用的语法，使用简洁方便，比传统异步解决方案更合理强大 |
| 缺点 |不利于代码的阅读和维护，会出现“回调地域”，而且每个任务只能指定一个回调函数 | 由事件驱动，运行流程变得很不清晰 | 状态不可逆，确定状态后再次调用resolve/reject对原状态不起任何作用 | 状态不可逆 |


----

作者：小铭子   链接：https://juejin.cn/post/6844903889477566471   
