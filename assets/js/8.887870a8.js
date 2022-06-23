(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{275:function(a,t,e){"use strict";e.r(t);var r=e(16),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"gzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[a._v("#")]),a._v(" GZIP")]),a._v(" "),e("p",[a._v("在基于 HTTP 协议的网络传输中将传输内容进行 GZip 压缩后再进行传输，客户端再进行GZip解压的方式。")]),a._v(" "),e("h2",{attrs:{id:"gzip原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip原理"}},[a._v("#")]),a._v(" Gzip原理")]),a._v(" "),e("p",[a._v("GZIP 的核心是 Deflate，是一个同时使用 LZ77 与 Huffman Coding 的算法。")]),a._v(" "),e("h2",{attrs:{id:"lz77"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lz77"}},[a._v("#")]),a._v(" LZ77")]),a._v(" "),e("p",[a._v("LZ77 的核心思路是如果一个串中有两个重复的串，那么只需要知道第一个串的内容和后面串相对于第一个串起始位置的距离 + 串的长度。")]),a._v(" "),e("p",[a._v("比如： ABCDEFGABCDEFH → ABCDEFG(7,6)H。7 指的是往前第 7 个数开始，6 指的是重复串的长度，ABCDEFG(7,6)H 完全可以表示前面的串，并且是没有二义性的。")]),a._v(" "),e("h2",{attrs:{id:"huffman-coding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#huffman-coding"}},[a._v("#")]),a._v(" Huffman Coding")]),a._v(" "),e("p",[a._v("Huffman Coding 是大学课本中一般都会提到的算法。核心思路是通过构造 Huffman Tree 的方式给字符重新编码（核心是避免一个叶子的路径是另外一个叶子路径的前缀），以保证出现频路越高的字符占用的字节越少。")]),a._v(" "),e("h2",{attrs:{id:"网站中的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网站中的使用"}},[a._v("#")]),a._v(" 网站中的使用")]),a._v(" "),e("p",[a._v("在 RFC 2016 中 GZIP 已经成为了规定的三种标准HTTP压缩格式之一。目前绝大多数的网站都在使用 GZIP 传输 HTML、CSS、JavaScript 等资源文件。")]),a._v(" "),e("h2",{attrs:{id:"浏览器和服务器配合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器和服务器配合"}},[a._v("#")]),a._v(" 浏览器和服务器配合")]),a._v(" "),e("p",[a._v("浏览器在请求资源的时候再 header 里面带上 accept-encoding: gzip 的参数。Nginx 在接收到 Header 之后，发现如果有这个配置，则发送 GZIP 之后的文件（返回的 header 里也包含相关的说明），如果没有则发送源文件。浏览器根据 response header 来处理要不要针对返回的文件进行解压缩然后展示。")]),a._v(" "),e("h2",{attrs:{id:"前端优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端优化"}},[a._v("#")]),a._v(" 前端优化")]),a._v(" "),e("p",[a._v("一般来说，Gzip 压缩是服务器的活儿：服务器了解到我们这边有一个 Gzip 压缩的需求，它会启动自己的 CPU 去为我们完成这个任务。而压缩文件这个过程本身是需要耗费时间的, 所以我们前端在构建web应用的同时应生成GZip压缩文件，省去服务端对每次请求进行Gzip压缩的问题。")])])}),[],!1,null,null,null);t.default=s.exports}}]);