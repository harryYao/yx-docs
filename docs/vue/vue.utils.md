# vue.util方法和属性

属性和方法：

    ["defineReactive", "_toString", "toNumber", "makeMap",
    "isBuiltInTag", "remove", "hasOwn", "isPrimitive",
    "cached", "camelize", "capitalize", "hyphenate",
    "bind", "toArray", "extend", "isObject",
    "isPlainObject", "toObject", "noop", "no",
    "genStaticKeys", "isReserved", "def", "parsePath",
    "hasProto", "inBrowser", "devtools", "UA", "nextTick",
    "_Set", "mergeOptions", "resolveAsset", "warn",
    "formatComponentName", "validateProp"]


1. defineReactive:定义一个对象的响应属性（core/observer/index.js）

    usage:
        Vue.util.defineReactive(obj,key,value,fn)
        
        obj: 目标对象，
        key: 目标对象属性；
        value: 属性值
        fn: 只在node调试环境下set时调用
2. _toString : 字符串表示，与原生的toString()方法的区别：object和array使用JSON.stringify()处理，null输出''；(shared/util.js)

    usage:
        let person = {
                name : 'libai'
        }
        Vue.util._toString(person)
3. toNumber: 转化为number类型，内部使用parseFloat；返回浮点数或者本身(shared/util.js)

usage:
    let size = '0.1$';
    Vue.util.toNumber(size)  //--0.1

4. makeMap: 生成一个Map对象实例，并返回检测key是否存在的函数；(shared/util.js)

usage:
    Vue.util.makeMap(str,toLowerCase);
    str : 生成map对象key键的字符串，以‘,’隔开
    toLowerCase: boolen是否小写
    
    let keys = 'name,age,job,email';
    let maps = Vue.util.makMap(keys);

    console.log(maps['name'])  //---true
    console.log(maps['phone'])  //--false
5. isBuiltInTag : makeMap('slot,component',true)执行结果(shared/util.js)

    usage:
        console.log(Vue.util.isBuiltInTag('slot')) //--true;
        
        console.log(Vue.util.isBuiltInTag('component')) //--true;
        
        console.log(Vue.util.isBuiltInTag('transition')) //--false;
6. remove: 删除数组中的一个项(shared/util.js)

    usage:
        Vue.util.remove(array,item);
        
        let arr = ['libai','age'];
        Vue.util.remove(arr,'libai');
        console.log(arr)  //['age'];
7. hasOwn: 其实就是Object.hasOwnProperty(obj,key)的封装；(shared/util.js)

    usage:
        Vue.util.hasOwn(obj,key);
        
        let person ={
                name : 'libai',
                age : '100'
        };
        
        console.log(Vue.util.hasOwn('name')) //---true
8. isPrimitive : 检测是不是简单类型值：string,number；(shared/util.js)

    usage:
        Vue.util.isPrimitive(value);
        
        console.log(Vue.util.isPrimitive(12)) // --true
9. cached : 缓存函数执行的结果;将函数执行结果缓存在内部cache变量上，当第二次执行相同参数时，直接返回缓存结果(shared/util.js)

    usage :
        Vue.util.cached(fn);
        
    实例：
      var camelizeRE = /-(\w)/g;
      var camelize =  Vue.util.cached(function (str) {
        return str.replace(camelizeRE, function (_, c) {
          return c ? c.toUpperCase() : '';
        });
      });
      
     let str = 'person-name-age';
     let ret = camelize(str);
     let ret1 = camelize(str);  //--此时取缓存值
     
     console.log(ret,ret1)
10. camelize : 驼峰写法，使用了cached方式缓存结果；(shared/util.js)

    usage:
        Vue.util.camelize(str)；
        
    example:
        let str = 'person-name-age';
        let ret = Vue.util.camelize(str);
        console.log(ret) //personNameAge;
11. hyphenate: 驼峰写法转化为连接符'-'写法：(shared/util.js)

    usage:
        Vue.util.camelize(str);
        
    example:
        
        let name = 'personNameAge';
        let ret = Vue.util.hyphenate(name);
        
        console.log(ret) //--输出person-name-age
12. bind: 绑定函数作用域，(shared/util.js)

    usage:
        Vue.util.bind(fn,ctx)
        
    example:
        var name = 'dufu';
        var name1 = 'libai'
        var person = { name1 };
        
        var fn = Vue.util.bind(test,person);
        test() //dufu
        fn()   //libai
        
        function test(){
            console.log(this.name)
        }
13. toArray: 将类数组转化为数组(shared/util.js)

    usage:
        window.util.toArray(likeArray,start)
        likeArray: 类数组对象；
        start: 开始位置
        
    example:
        let divs = document.querySelectorAll('div');
        let arr = Vue.util.toArray(divs,0);
14. extend: 浅复制(shared/util.js)

    usage:
        Vue.util.extend(to,form);
        to : 目标对象
        form： 源对象
        
    example:
    
        let person ={
                name: 'libai',
                age : 100
        };
        
        let cloneObj = Vue.util.extend({},person);
        console.loh(cloneObj)
15. isObject ： 检测是不是对象和null;(shared/util.js)

    usage:
        Vue.util.isObject(obj);
    
    example:
        Vue.util.isObject(null)  //true
16. isPlainObject : 检测是不是object对象，(shared/util.js)

     usage:
        Vue.util.isPlainObject(obj);
    
    example:
        Vue.util.isPlainObject(null)  //false
        Vue.util.isPlainObject({}) //true
17. toObject : 将对象数组合并为一个对象；后面的属性覆盖前面的属性(shared/util.js)

    usage:
        Vue.util.toObject(arr);
        arr : 对象数组；
        
    example:
        let name='libai',age=100
        let names = {name };
        let ages = {age}
        
        let ret = Vue.util.toObject([names,ages]);
        
        console.log(ret) //{name:'libai',age:100}
一些简单工具函数：(shared/util.js)

    noop : 纯函数；= function(){}
    no : 返回false函数；=> false
18. genStaticKeys: 链接staticKeys合并成一个字符串(shared/util.js)

    usage:
        Vue.util.genStaticKeys(modules)
        modules: 对象数组，包含staticKeys数组字段；
        
    example:
    
        let keys1 = ['name','age'];
        let keys2 = ['job','email','phone'];
        
        let module1 = {
                staticKeys:keys1
        }
        
        let module2 = {
                staticKeys:keys2
        };
        
        Vue.util.genStaticKeys([module1,module2]);
        
        //--输出：'name,age,job,email,phone'
19. isReserved: 判断字符串是不是$和_符开始的:用来过滤vm的方法和属性 (core/util/lang.js);

    usage:
        Vue.util.isReserved(str);
        
    example:
        let str = '$name';
        let str1 = '_age';
        let str2= 'normal';
        
        Vue.util.isReserved(str) //true
        Vue.util.isReserved(str1)  //true
        Vue.util.isReserved(str2)  //false
20. def : 其实就是Object.defineProperty()方法的简便封装；

    usage:
        Vue.util.def(obj,key,value,enumerable)
        enumerable: 是否可枚举；
        
    example:
        let target = Object.create({});
        Vue.util.def(target,'name','libai',true);
        
        console.log(target) //---{name:'libai'}
21. parsePath: 解析路径

    usage:
        Vue.util.parsePath(str) 
        str : 'vue.core.util';
        
    example:
        let pathname = 'vue.core.util';
        let paths = {
                vue:{
                  core:{
                    util:['index.js','util.js','lang.js']
                  }  
                }
        };
        
        
        let parse = Vue.util.parsePath(pathname); 
        let ret = parse(paths)
        console.log(ret) //['index.js','util.js','lang.js']
22. hasProto : 是否可以使用__proto__属性；

    usage: 
            Vue.util.hasProto; //true or false
23. inBrowser : 是否是浏览器环境

    usage:
        Vue.util.isBrowser //--true or false
24. devtools: 浏览器环境是否安装vue-devtools工具

    usage:
        Vue.util.devtools //true or false
25. UA : 浏览器用户代理navigator.userAgent.toLowerCase()

    usage:
        Vue.util.UA //--string
26. nextTick : 延迟到下有一次执行：使用最新的window.MutationObserver对象；回退使用setTimeout方法；

    usage : 
        Vue.util.nextTick(fn,ctx);
        
    example:
        let name = 'libai';
        let person = {name};
        
        Vue.util.nextTick(function(){console.log(this.name)},person);
        console.log('dufu');
27. _Set: 兼容es6中的Set数据结构；只提供了add,has,clear三个方法

    usage:
        let set = new Vue.util._Set();
        set.add(1);
        set.has(1);
        set.clear();
        
    es6中还包含有delete,keys,values,entries,forEach,size等方法和属性；
28. warn: 输出警告信息：(core/util/debug.js)

    usage:
        Vue.util.warn(message,vm);
        message： 输出信息
        vm: 取得vm.name，告之警告信息是来源于那个组件
        
    example:
        let message = 'text warn';
        let name='vue';
        Vue.util.warn(message,{name});
        
        'vue.js:2250 [Vue warn]: text warn (found in component <vue>)'
29. formatComponentName:格式化组件名称,(core/util/debug.js)

    usage:
        Vue.util.formatComponentName(vm);
        1: 'root instance'
        2: 'component <${name}>'
        3: 'anonymous component'
        
    example:
        let name = 'libai';
        let vm = {name}
        
        Vue.util.formatComponentName(vm)
        
        //--component <libai>