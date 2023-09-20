---
title: Markdown Extension Examples
date: 2023-09-20
img: 'https://ts1.cn.mm.bing.net/th/id/R-C.f4dd383a91aa149fd47da7a0cba73a95?rik=KRZB3DYDNVGq9w&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0716%2fpgjlg7.jpg&ehk=yGkBxqtnGW%2bsIAxJA0yro%2bOLIk0fJU5jR1SsfId3PL0%3d&risl=&pid=ImgRaw&r=0'
---

This page demonstrates some of the built-in markdown extensions provided by VitePress.

---



# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
