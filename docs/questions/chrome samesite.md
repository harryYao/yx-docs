# chrome 同站策略（samesite）问题及解决方案


## 一、同站策略问题
chrome自版本80之后，出现了所谓同站策略问题。

即，在A页面请求B页面，如果chrome发现它们不是同一个站点的话，就不传cookie给B页面所在的服务器。众所周知，原本cookie是会附在浏览器到服务器的每个请求（request）里的，仿佛这是理所应当，自然而然的，现在好了，chrome区分情况，不一定允许这么干了。

这样的后果是什么呢？就是有些功能以前没问题的，现在不行了。拿我们项目来说，原本我们有些WEB项目，会用iframe将其他项目的一些页面嵌进去，看上去就好像同一个系统一样，这叫界面集成吧，很正常的行为。两边项目的自动登录什么的都搞好了，一直运行正常。后来升级了浏览器，发现嵌进去的页面数据出不来。程序没有做任何更改，最后发现是账号登录问题，嵌进去的页面始终处于无法登录状态，从而导致获取不了数据。

具体来说，cookie是由服务器分配给浏览器的，相当于给了浏览器一个访问凭证。浏览器每次访问服务器的时候，都会带上这些个凭证。现在由于浏览器策略改变，嵌进去的页面与服务器交互的时候，无法带上cookie，服务器检索不到这个凭证，就每次都给页面分配一个新的cookie，前后对应不上，当然就登录不了了。

其实，chrome一直有这个同站策略，Chrome 51 开始，浏览器的 Cookie 新增加了一个SameSite属性，用来防止 CSRF 攻击和用户追踪。SameSite可以设置三个值：

Strict
Lax
None

Strict最为严格，完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie。

Lax规则稍稍放宽，分情况处理，具体如下

None的话，就不做是否同站的检查和限制。以前，chrome默认SameSite=None，**80版本以后则默认是Lax**了。这也是为什么chrome升级以后，程序突然异常的缘故。


## 二、解决方案

1、修改浏览器设置
这种方法简单粗暴，直接将SameSite的属性设置回到以前的None状态。姑且不论用户是否愿意，但单就每台机的浏览器都要进行设置而言，已经违背了BS架构应用的最大优点，就是客户端无须安装部署这一宗旨。所以我觉得这是一个实在没有别的办法的时候，才不得不采取的措施。

设置方法如下：

1）chrome地址栏输入chrome://flags
2）通过禁用“SameSite by default cookies”和“Cookies without SameSite must be secure”功能开关
3）重新启动浏览器

2、Set-Cookie：SameSite=None
就是将response的header设置Set-Cookie：SameSite=None。


但是：chrome91.0.4472.77（正式版本）以后，SameSite by default cookies 选项已经被隐藏了，无法手动设置。这时候就需要
在桌面的谷歌快捷方式：右键-属性，将下面复制到最后面确定即可。（注意有个空格别忘了，不然报错）：
> --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure


## 三、Nginx做网站映射

最好还是使用Nginx映射能力，将嵌套的iframe做成同源策略。