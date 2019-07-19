# VUE
vue分2.0和3.0
vue-cli 分2.0和3.0 
市面上说vue3.0指的是vue-cli3.0
.webpack 文件 可以修改原本的配置
## vue2.0
依托 defineProperty,兼容到IE9

| 框架   | 方法     |
| ------ | -------- |
| 小程序 | setData  |
| React  | setState |
| vue    | 赋值     |

新添加的属性需要依靠$set ,$forceUpdate
触发回调函数: $nextTick

检查属性方法兼容性 
 www.caniuse.com

 ## vue3.0

 vue create xxxx
 默认或定制
 class-style component syntax  vue的类组件
 node-sass

 typescript
 vue=》 ts的es6 =》es5 

 ### vue环境
 #### runtime-only	
	单纯render方法,仅运行时编译
 #### runtime-compiler
	,附带编译模板，在使用template渲染，或在html文件使用vue的插值语法
 #### full
	附带全部功能,包含compiler和runtime
Runtime+Compiler vs Runtime-only
区别在于包的大小,**only小30%**
### 数据
#### computed
	只会在开始时调用一次,有依赖表, 依赖数据变化,函数才会调用
### 数据双向绑定的原理
响应式原理
	单向数据流,只有数据流向视图，没有视图流向数据

vue实现数据双向绑定主要是采用数据劫持结合发布者-订阅者模式的方式，通过**Object.defineProperty()**来劫持各个属性的**setter，getter**，在数据变动时发布消息给订阅者，触发相应的监听回调。
具体话其实就是通过Obeject.defineProperty() 中的setter和getter来监听属性变动实现Observer进行数据的监听然后就是通知订阅者，那么订阅者其实就是简单的一个数组，这个数组中的内容就是我们使用了的一个数据的集合，使用了的数据可以通过getter得到，其实就是在调用的时候给数组里面添加一个订阅者这样就是实现了一个Watcher（需要监听的数据的集合），然后在实现一Compile其作用就是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。
其实vue的数据双向绑定就是MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；

	视图交互变化(input) -> 数据model变更的双向绑定效果
![响应式原理](https://cn.vuejs.org/images/data.png)
collect as dependency 数据绑定时触发watch
notify 数据改变时触发watch

### 违反规则的特殊实现
本质还是语法糖
- v-model
- sync
#### v-model
v-model="value"
	:value 和@change
实现组件修改数据
#### sync
value.sync
	@update:value="(val)=>value=val" :value=value
实现子组件修改父组件

### 单页面应用路由
实现效果:
- 不刷新地址栏改变URL
- 更新页面内容

简单原理:监听路由响应事件,获取路由路径,查找对应路由,渲染component内容

路由跳转方法
- push
- replace

两种路由模式
- hash
- history


#### hash
`#`号后头的路径
哈希值只存在于前端
优点:
- 简单


缺点:
- 服务端回跳页面,无法控制哈希路由
- 路径较长,在#号后头
跳到支付页面时,再回跳时,不会附带哈希值,会忽略哈希值,可以将路径存在问号后面传回来
公众号认证时,也会出现.
两种方法(push,replace)
修改原理:
	修改哈希值
	监听hashChange
#### history
路径和真实的页面一致 
优点
- 路径真实


缺点
- 刷新时,会请求不存在的路径,会跳到404页面

webpack存在配置去配合history
devServer.historyApiFallback

两种跳转方法
>history.pushState
history.replaceState

监听跳转事件
>监听popstate,监听浏览器前进和后退动作
点击跳转链接
手动调用更新内容方法

### 内置组件
#### keep-alive
重要的优化点
空间换时间的手段
将组件放在内存中
常用方法
- 包裹路由组件

自带属性
- include
- exclude

自带生命周期
- activated
- deactivated

小科普:读取速度(大到小)
CPU自带寄存器
内存
硬盘
#### transition
交互

### 图片懒加载
vue-lazyload
图片懒加载原理
为图片添加自定义属性data-src 为图片路径,
判断图片的距顶高度是否小于一屏高度,
小于则用为src赋值data-src

