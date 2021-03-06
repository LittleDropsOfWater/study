---
title: 性能优化-防抖与节流
sidebar: auto
sidebarDepth: 2
---
# 防抖和节流
减少请求和DOM操作

## 防抖
- 防抖,知道事件触发间隔频率大于一定时间再触发一次，
- 就像重新开始倒计时蓄力、
- 读条
- 经常用在滚动事件
- func 推荐使用箭头函数

简单实现
```js
function Debounce(func, ms = 500) {
  let timer = 0;
  return function() {
    window.clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, ms);
  };
}
```


## 节流
- 节流,事件每隔一定时间一定触发一次,
- 就像进入了冷却
- 冷却
```js
function Throttle(func, ms = 500) {
  let start = +new Date();
  return function() {
    let current = +new Date();
    if (current - start > ms) {
      func();
      start = current;
    }
  };
}
```

## 防抖的复杂实现
- func	被防抖函数
- wait	函数触发滞后时间
- immediate	第一次调用是否执行
```js

function debounce(func, wait, immediate) {
  // immediate默认为false
  var timeout, args, context, timestamp, result;

  var later = function() {
    // 当wait指定的时间间隔期间多次调用debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
    var last = +new Date() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  return function(keyword) {
    context = this[0];
    args = arguments;
    // console.log("context", this);
    // console.log("args", arguments);

    timestamp = +new Date();
    // 第一次调用该方法时，且immediate为true，则调用func函数
    var callNow = immediate && !timeout;
    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}
```
##节奏的复杂实现
- func
- wait
- options
  - leading	
  - trailing	
```js
function throttle(func, wait, options) {
  /* options的默认值
   *  options.leading = true;
   *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
   *  options.trailing = true; 
   * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
   * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
   */
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : +new Date();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = +new Date();
    if (!previous && options.leading === false) previous = now;
    // 计算剩余时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 当到达wait指定的时间间隔，则调用func函数
    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
    if (remaining <= 0 || remaining > wait) {
      // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // options.trailing=true时，延时执行func函数
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
```