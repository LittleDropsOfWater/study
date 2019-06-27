# 函数式编程
## 函子

面向对象设计，内部状态难以追踪。

## 一等公民的函数
函数不特殊,你可以像对待任何其他数据类型一样使用函数，存在数组里，当参数传递，赋值给变量...等等。
很多人对这一点并不了解，看以下这个例子：
```javascript
const hi = name => `Hi ${name}`;
const greeting = name => hi(name);
```
这里的greeting指向的那个把`hi`包了一层的包裹函数完全是多余的.为什么呢?因为JavaScript的函数是*可调用的*的,当`hi`后面紧跟`()`的时候会运行并返回一个值;如果没有`()`,`hi`就简单的返回存到这个变量里的函数.
`greeting`只不过是转了个身如何以相同的参数调用了`hi`函数而已,因此可以这么写:
```javascript
const greeting = hi;
greeting("times"); // "Hi times"
```
换句话说,`hi`已经是个接受一个参数的函数了,为何要再定义一个额外的包裹函数,而它仅仅是用这个相同的参数调用`hi`?完全没道理.就像在秋天开着空调然后裹着厚被子睡.真实脱裤子放屁多此一举.
用一个函数把另一个函数抱起来,目的仅仅是延迟执行,真的是非常糟糕的编程习惯.(且和可维护性密切相关.)
```javascript
// 太傻了
const getServerStuff = callback => ajaxCall(json => callback(json));

// 这才像样
const getServerStuff = ajaxCall;
```
```javascript
// 这行
ajaxCall(json => callback(json));

// 等价于这行
ajaxCall(callback);

// 那么，重构下 getServerStuff
const getServerStuff = callback => ajaxCall(callback);

// ...就等于
const getServerStuff = ajaxCall // <-- 看，没有括号哦
```
避免函数的无用嵌套.
```javascript
const BlogController = {
  index(posts) { return Views.index(posts); },
  show(post) { return Views.show(post); },
  create(attrs) { return Db.create(attrs); },
  update(post, attrs) { return Db.update(post, attrs); },
  destroy(post) { return Db.destroy(post); },
};
```
这个可笑的控制器（controller）99% 的代码都是垃圾。我们可以把它重写成这样：
```
const BlogController = {
  index: Views.index,
  show: Views.show,
  create: Db.create,
  update: Db.update,
  destroy: Db.destroy,
};
```
...或者直接全部删掉，因为它的作用仅仅就是把视图（Views）和数据库（Db）打包在一起而已。
### 为何钟爱一等公民?
添加没有实际用处的间接层实现起来容易,但这样除了徒增代码量,提高维护和检索代码的成本外,没有任何用处.
除了删除不必要的函数,正确地为参数命令也必不可少.
```JavaScript
// 只针对当前的博客
const validArticles = articles =>
  articles.filter(article => article !== null && article !== undefined),

// 对未来的项目更友好
const compact = xs => xs.filter(x => x !== null && x !== undefined);
```
小心this,函数时编程中根本用不到它.
高度的抽象.对行为的分离.设置通用的函数.
## 纯函数的好处
### 再次强调"纯"
纯函数的概念.
>纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

比如slice和splice,这两个函数作用类似.`slice`符合纯函数的定义是因为对相同的输入它保证能够返回相同的输出.而`splice`却会嚼烂调用它的那个数组,然后再吐出来;这就产生可观察到的副作用,即猪哥哥数组永久的改变了.

函数时编程中,我们讨厌这种会*改变*数据的笨函数.我们追求可靠的每次都能返回同样结果的函数.

来看看另一个例子.
```JavaScript
// 不纯的
var minimum = 21;

var checkAge = function(age) {
  return age >= minimum;
};


// 纯的
var checkAge = function(age) {
  var minimum = 21;
  return age >= minimum;
};
```
不纯的版本中,`checkAge`的结果取决于`minimum`这个可变变量的值.换句话说,他取决于系统状态(system state).因为它引入了外部的环境,从而增加了认知负荷(cognitive load).

这个例子可能还不是那么明显，但这种依赖状态是影响系统复杂度的罪魁祸首（http://www.curtclifton.net/storage/papers/MoseleyMarks06a.pdf ）。输入值之外的因素能够左右 checkAge 的返回值，不仅让它变得不纯，而且导致每次我们思考整个软件的时候都痛苦不堪。

另一方面,使用纯函数的形式,函数能够做到自给自足.我们也可以让`minimun`成为一个不可变(immutable)对象,这样就能保留纯粹想,因为状态不会有变化.要实现这个效果,必须得创建一个对象,然后调用`Object.freeze`方法:
```JavaScript
var immutableState = Object.freeze({
  minimum: 21
});
```
### 副作用可能包括...
*纯函数*定义中提到的万分邪恶的*副作用*到底是什么?"作用"我们可以理解为一切除结果计算之外发生的事情.
"作用"本身没什么坏处,而且在本书后面的章节你随处可见它的身影."副作用"的关键部分在于"副".就像一潭死水中的"水"本身并不是幼虫的培养起,"死"才是生成虫群的原因.同理,副作用中的"副"是滋生bug 的温床.
>副作用是在计算结果的过程中,系统状态的一种变化,或者与外部世界进行的*可观察*的交互.

副作用可能包含,但不限于:
- 更改文件系统
- 往数据库插入记录
- 发送一个http请求
- 可变数据
- 打印/log
- 获取用户输入
- DOM查询
- 访问系统状态

这个列表还可以继续写下去.概括来讲,只要是跟函数外部环境发生的交互都是副作用————这一点可能会让你怀疑无副作用编程的可行性。函数式编程的哲学就是嘉定副作用是造成不正当虚伪的主要原因。

这并不是说禁止一切的副作用，而是让它们在可控的范围内发生。

副作用让一个函数变得不*纯*是有道理的：从定义上说，纯函数必须要能够根据相同的输入返回相同的输出；如果函数需要跟外部事物打交道，那么就无法保证这一点了。
坚持一个原则【相同输入得到相同输出】。
### 八年级数学
根据mathisfun.com：
>函数是不同数值之间的特殊关系：每一个输入值返回且只返回一个输出值

换句话说，函数就只是两种数值之间的关系：输入和输出。尽管每个输入都只会有一个输出，但不同的输入可以有相同的输出。
![合法的从x到y的函数关系](/study/xToy.png)
函数可以描述为一个集合，这个集火的内容是（输入，输出）对：[(1,2),(3,6),(5,10)] (看起来这个函数是把输入值加倍)。
或者一张表
|输入|输出|
|-|-|
|1|2|
|2|4|
|3|6|

甚至一个以x为输入y为输出的函数曲线图：
![合法的从x到y的函数关系](/study/函数曲线图.png)
如果输入直接指明了输出，那么就没有必要再实现具体的细节了。因为函数仅仅只是输入到输出的映射而已，所以简单地写一个对象就能“运行”它，使用`[]`代替`()`即可。
```JavaScript
var toLowerCase = {"A":"a", "B": "b", "C": "c", "D": "d", "E": "e", "D": "d"};

toLowerCase["C"];
//=> "c"

var isPrime = {1:false, 2: true, 3: true, 4: false, 5: true, 6:false};

isPrime[3];
//=> true
```
当然，实际情况中你可能需要进行一些计算而不是手动指定各项值；不过上例倒是表明了另外一种思考函数的方式。（你可能回想“要是函数有多个参数呢？”。的确，这种情况表明了以数学方式思考问题的一点点不便。暂时我们可以把它打包放在数组里，或者把`arguments`对象看出是输入。等学习`curry`的概念之后，你就知道如何直接为函数再数学上的定义减魔了。）
戏剧性的是：纯函数`就是`数学上的函数，而且是函数式编程的全部。使用这些纯函数编程能够带来大量的好处，让我们来看以下为何要不遗余力地保留函数的纯粹性的原因。
### 追求“纯”的理由
#### 可缓存性（Cacheable）
首先，纯函数总能根据输入来做缓存。实现缓存的一种典型方式是memoize技术:

```javascript
var squareNumber  = memoize(function(x){ return x*x; });

squareNumber(4);
//=> 16

squareNumber(4); // 从缓存中读取输入值为 4 的结果
//=> 16

squareNumber(5);
//=> 25

squareNumber(5); // 从缓存中读取输入值为 5 的结果
//=> 25
```
下面的代码是一个简单的实现，尽管它不太健壮。
```javascript
var memoize = function(f) {
  var cache = {};

  return function() {
    var arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};
```
值得注意的一点是,可以通过延迟执行的方式把不纯的函数转换为纯函数:
```javascript
var pureHttpCall = memoize(function(url, params){
  return function() { return $.getJSON(url, params); }
});
```
这里有趣的地方在于我们并没有真正发送http请求————只是返回了一个函数,当调用它的时候才会发请求.这个函数之所以有资格成为纯函数,是因为它总是会根据相同的输入返回相同的输出:给定了`url`和`params`之后,它就只会返回同一个发送http请求的函数.
我们的`memoize`函数工作起来没有任何问题,虽然它缓存的并不是http请求所返回的结果,而是生成的函数.
现在来看这种方式意义不大,不过很快我们就会学习一些技巧来发掘它的用处.重点是我们可以缓存任意一个函数,不管它们看起来多么具有破坏性.
#### 可移植性/自文档化(Portable/Self-Documenting)
纯函数是完全自给自足的,它需要的所有东西都能轻易获得.仔细思考思考这一点...这种自给自足的好处是什么呢?首先,纯函数的依赖很明确,因此更易于观察和理解————没有偷偷摸摸的小动作.
“面向对象语言的问题是，它们永远都要随身携带那些隐式的环境。你只需要一个香蕉，但却得到一个拿着香蕉的大猩猩...以及整个丛林”
#### 可观测性(Testable)
纯函数让测试更加容易.只需简单地给函数一个输入,然后断言输出就好了.
#### 合理性(Reasonable)
很多人相信使用纯函数最大的好处是*引用透明性*(referential transparency).如果一段代码可以替换成它执行所得的结果,而且是在不改变整个程序行为的前提下替换的,那么就说这段代码是引用透明的.
由于纯函数总是能够根据保证返回同一个结果,也就保证了引用透明性.
```javascript

```

```javascript

```
