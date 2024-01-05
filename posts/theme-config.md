---
title: 主题配置
date: 2023-11-09
---

本文介绍Blur主题的配置，包含部署方法。
[[toc]]

---

## Front Matter

front matter 必须是 markdown 文件中的第一部分，且必须是有效的 YAML。例如：

```yaml
---
title: Hello World
date: 2023-01-01
img: https://example.com/image.png # 封面图片（可选）
hide: true # 隐藏文章（可选）
---
```

## 简介

```yaml{6-7}
---
title: Hello World
date: 2023-01-01
...
---
这里是简介，将会显示在主页上，可以留空。最多显示 5 行。
[[toc]] # 生成文章目录（可选）
---
```

## 写作

### 自定义容器

```md
::: info 自定义标题
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

**输出**

::: info 自定义标题
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

### 代码块

````js
```{3-5} # 从第3行到第5行高亮
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{3-5}
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code focus]
    }
  }
}
```

或使用 `// [!code hl]` 高亮。

待适配：`// [!code  focus]` `// [!code --]` `// [!code ++]` `// [!code warning]` `// [!code warning]` `::: code-group`

## 部署

### Vercel (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJazee6%2Fvitepress-theme-blur%2F)

### GitHub Pages

示例Github Actions配置

```yaml
name: GitHub Pages

on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js environment
        uses: actions/setup-node@v3.7.0

      - name: Setup pnpm
        uses: pnpm/action-setup@v2.4.0
        with:
          version: 8
          run_install: false

      - name: Get pnpm store directory
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

      - uses: actions/cache@v3
        name: Setup pnpm cache
        with:
          path: ${{ env.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm run build

      - name: Upload a Build Artifact
        uses: actions/upload-artifact@v3.1.2
        with:
          name: production-files
          path: ./.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: pages
    if: github.ref == 'refs/heads/master'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v3
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          external_repository: Jazee6/jazee6.github.io
          publish_dir: ./dist
          publish_branch: main
          cname: jaze.top
```

### 阿里云 OSS

部分示例

```yaml
      - name: upload files to OSS
        uses: fangbinwei/aliyun-oss-website-action@v1.4.0
        with:
          accessKeyId: ${{ secrets.ACCESS_KEY_ID }}
          accessKeySecret: ${{ secrets.ACCESS_KEY_SECRET }}
          bucket: jaze-web
          endpoint: https://oss-cn-shanghai.aliyuncs.com
          folder: dist
          skipSetting: true
```

## 分析

如果你不使用vercel提供的分析功能，请删除@vercel/analytics包。