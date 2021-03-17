(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{356:function(e,a,t){"use strict";t.r(a);var n=t(41),l=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"js基础类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js基础类型"}},[e._v("#")]),e._v(" js基础类型")]),e._v(" "),t("p",[e._v("ECMAScript中有5中简单数据类型（也称为基本数据类型）: Undefined、Null、Boolean、Number和String。\n还有1中复杂的数据类型————Object，Object本质上是由一组无序的名值对组成的。")]),e._v(" "),t("p",[e._v("其中Undefined、Null、Boolean、Number都属于基本类型。Object、Array和Function则属于引用类型，String有些特殊，具体的会在下面展开分析。\nstring类型有些特殊，因为字符串具有可变的大小，所以显然它不能被直接存储在具有固定大小的变量中。由于效率的原因，我们希望JS只复制对字符串的引用，而不是字符串的内容。但是另一方面，字符串在许多方面都和基本类型的表现相似，而字符串是不可变的这一事实（即没法改变一个字符串值的内容），因此可以将字符串看成行为与基本类型相似的不可变引用类型")]),e._v(" "),t("p",[e._v("Boolean、Number、String 这三个是Javascript中的基本包装类型，也就是这三个其实是一个构造函数，他们是Function的实例，是引用类型，至于这里的String与以上说的String是同名，是因为其实上文说的String是指字符串，这里的String指的是String这个构造函数，上面那么写，是为了更好的理解，因为Javascript是松散类型的。我们可以看下String实例化的例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('alert(typeof new String("jwy"));//"object"\nvar author = "Tom";\nalert(typeof name);//"string"\n')])])]),t("h3",{attrs:{id:"undefined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undefined"}},[e._v("#")]),e._v(" undefined")]),e._v(" "),t("p",[e._v("变量声明了但是没赋值 解析器会给一个默认值 就是undefined")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var a;\nif (a === undefined) {\n  console.log('a is undefined')\n} else {\n  console.log('a is not defined')\n}\n\ntypeof a; // undefined\n")])])]),t("ol",[t("li",[e._v("变量没赋值")]),e._v(" "),t("li",[e._v("数组中某项没赋值")]),e._v(" "),t("li",[e._v("函数的参数没赋值")]),e._v(" "),t("li",[e._v("函数没有返回值")]),e._v(" "),t("li",[e._v("对象某个属性没有赋值\n以上情况都为undefined.")])]),e._v(" "),t("h3",{attrs:{id:"null"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[e._v("#")]),e._v(" Null")]),e._v(" "),t("p",[e._v("本质上就是一个特殊值，表示“没有”")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var a = null;\ntypeof a; // object\n")])])]),t("blockquote",[t("p",[e._v("只把它当作object的一种特殊值，为了兼容以前的代码，后来就没法修改了。\n这并不是说null就属于对象")])]),e._v(" "),t("blockquote",[t("p",[e._v("2015年, ES6草案时，也曾将 null 的数据类型修改为了 null, 但是因为兼容性问题，后来又改回了object；")])]),e._v(" "),t("ul",[t("li",[e._v("获取一个不存在的对象时，值为null,如获取一个不存在的DOM对象")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var d = document.getElementById('shdyfajfasf');\nd; // null\n")])])]),t("ul",[t("li",[e._v("null是一个表示”无”的对象，转为数值时为0；")]),e._v(" "),t("li",[e._v("undefined是一个表示”无”的原始值，转为数值时为NaN")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var n = Number(null);\nn; // 0\nvar m = Number(undefined);\nm; // NaN\n")])])]),t("h3",{attrs:{id:"boolean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[e._v("#")]),e._v(" boolean")]),e._v(" "),t("p",[e._v("使用Boolean(value)方法可以强制转换任意值为boolean类型,除了以下六个值，其他都是自动转为true：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Boolean(undefined) // false\nBoolean(null) // false\nBoolean(-0) // false\nBoolean(0) // false\nBoolean(NaN) // false\nBoolean('') // false\n")])])]),t("p",[e._v("所有对象的布尔值都是true，甚至连false对应的布尔对象也是true。\n请注意，空对象{}和空数组[]也会被转成true。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Boolean(new Boolean(false))// Boolean对象会转成true\nBoolean([]) // 空数组会转成true\nBoolean({}) // 空对象会转成true\n")])])]),t("p",[e._v("&& 表达式从第一个开始,遇到值为false的表达式,则返回表达式本身,否则返回最后一个表达式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var obj = new Boolean(false);\nconsole.log(obj && true);//true\nconsole.log(true && obj);//Boolean {false}\n")])])]),t("p",[e._v("因此,第二个console实际上打印的是obj对象的值")]),e._v(" "),t("h2",{attrs:{id:"es6-新增的基本类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6-新增的基本类型"}},[e._v("#")]),e._v(" ES6 新增的基本类型")]),e._v(" "),t("h3",{attrs:{id:"symbol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[e._v("#")]),e._v(" Symbol")]),e._v(" "),t("h3",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[e._v("#")]),e._v(" Set")])])}),[],!1,null,null,null);a.default=l.exports}}]);