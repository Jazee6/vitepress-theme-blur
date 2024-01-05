---
title: 前端八股
date: 2024-01-05
hide: true
---

[[toc]]

---

## JS

### prototype

- 每个函数都有一个prototype属性，指向一个对象，这个对象的所有属性和方法，都会被构造函数的实例继承
- 每个对象都有一个`__proto__`属性，指向它的原型对象(构造函数的prototype)

### 原型链

- 每个对象都有一个`__proto__`属性，指向它的原型对象
- 原型对象也是对象，也有`__proto__`属性，指向它的原型对象
- 一直往上找，直到`__proto__`为null

## 性能优化

- http缓存（强缓存/协商缓存）
- CDN
- 动态加载（路由/组件/图片懒加载）
- 合并请求
- 骨架屏
- SSR（prerender）
- service worker
- http2/quic
- gzip/br
- webp
- async/defer
- 防抖/节流

### 缓存

强缓存：浏览器直接从本地缓存中读取资源，不会发请求，状态码为200

`Cache-Control: max-age=31536000` `Expires: Wed, 21 Oct 2020 07:28:00 GMT`

协商缓存：过期，客户端和服务端协商资源是否更新，没有更新，返回304

响应`Last-Modified: Wed, 21 Oct 2020 07:28:00 GMT` `Etag: "5f8f2a80-2b"`

请求`If-Modified-Since: Wed, 21 Oct 2020 07:28:00 GMT` `If-None-Match: "5f8f2a80-2b"`

### 防抖/节流

防抖：事件触发后，n秒内不再触发事件，n秒后再执行事件，如果n秒内再次触发，则重新计算时间

节流：事件触发后，n秒内只执行一次事件，n秒后再执行事件，如果n秒内再次触发，则忽略

```js
function debounce(fn, delay) {
    let timer = null
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}
```