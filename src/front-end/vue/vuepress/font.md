---
title: VuePress Theme Hope 如何自定义字体
description: 自定义 VuePress Theme Hope 字体
isOriginal: true

category: ["前端", "Vue", "VuePress"]
tag: ["vuepress-theme-hope", "个性化", "woff2", "ttf"]
---

最近用 VuePress 的 Hope 主题时想更换一下字体，按照[官方文档](https://theme-hope.vuejs.press/zh/guide/customize/font.html)的操作方法，设置成功了，但是**移动端没有生效**。原因不明，自己琢磨了下，按照以下方式设置之后就可以正常生效了，分享给大家参考。

<!-- more -->

按照下面的方法设置完成后，你可以看到类似本站的字体显示效果。

## 引入字体

首先需要在 `/src/.vuepress/public/assets/` 下新建一个目录 `fonts/`，用于储存字体文件，可以额外加字体类型目录，比如 `woff2/` `ttf/`（当然这看你自己的喜好，不加也行），然后把你所需的字体文件放在里面，例如：

![文件路径截图](https://image.yule.ink/blog/20251120143358699.png)

然后修改 `/src/.vuepress/config.ts`，新增或修改下面的代码 [^1]：

```ts {2-20}
export default defineUserConfig({
  head: [
    [
      "link",
      {
        rel: "preload", // preload 表示提前加载字体文件，避免在页面渲染时再加载
        href: "/assets/fonts/woff2/PingFangSC-Regular.woff2", // 这里修改成你字体实际的路径
      },
    ],

    [
      "link",
      {
        rel: "preload",
        href: "/assets/fonts/woff2/PingFangSC-Thin.woff",
      },
    ],

    // 设置完所有你需要的字体...
  ],
});
```

以上这些步骤是官方文档中有的，如果这时候你直接设置主题变量来修改字体，那你会发现移动端上没有生效，还需要自己声明字体才行。

## 声明字体

修改 `/src/.vuepress/styles/index.scss`，在开头新增代码：

```scss
$pf-fonts: (
  400: "PingFangSC-Regular",
  500: "PingFangSC-Medium",
  600: "PingFangSC-Semibold",
  // 添加你需要的所有字重和字体名称
);

@each $weight, $file in $pf-fonts {
  @font-face {
    font-family: "PingFang SC";
    src: url("/assets/fonts/woff2/#{$file}.woff2") format("woff2"); // 替换成你实际的文件类型，比如 .ttf 是 truetype
    font-weight: $weight;
    font-display: swap; // 这个是字体显示策略，你可以上网查找相关信息。swap: 字体加载时先显示占位字体，等字体加载完成后再替换。
  }
}
```

这是 SCSS 的一个循环，用于声明所有字体文件。

## 设置字体

修改 `/src/.vuepress/styles/palette.scss`，把 `$vp-font` 和 `$vp-font-heading` 这两个变量的值设置为你声明的字体族名称，这里是 `"PingFang SC"`，注意开头和结束都要加单引号 [^1]。

```scss
$vp-font: '"PingFang SC", "Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
$vp-font-heading: '"PingFang SC", "Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
// $vp-font-mono 是等宽字体，这里没有设置，你可以根据需要自己设置
```

然后你就可以看见字体应用的效果了，移动端也会生效。

::: center

![移动端显示效果 =x300](https://image.yule.ink/blog/移动端显示效果) ![PC端显示效果 =x300](https://image.yule.ink/blog/PC端显示效果.png)

:::

[^1]: [VuePress Theme Hope 官方文档](https://theme-hope.vuejs.press/zh/guide/customize/font.html)
