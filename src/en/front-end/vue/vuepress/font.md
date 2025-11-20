---
title: How to Use Custom Local Fonts with VuePress Theme Hope
description: Customizing the VuePress Theme Hope Font, Including Setting Local Font Files and Declaring Fonts
isOriginal: true

category: ["Front end", "Vue", "VuePress"]
tag: ["vuepress-theme-hope", "customization", "woff2", "ttf"]
---

Recently while using the Hope theme with VuePress, I wanted to change the font. However, the [official documentation](https://theme-hope.vuejs.press/en/guide/customize/font.html) only explains how to use fonts from the font library[^1]. So I tinkered around and figured out how to use local fonts. I'm sharing this for reference.

<!-- more -->

After setting up the custom font, you can see the similar font display effect as this site.

::: center

![PE display effect|0x200](https://image.yule.ink/blog/移动端显示效果) ![PC display effect|0x200](https://image.yule.ink/blog/PC端显示效果.png)

:::

## Preparation

First, create a new directory named `fonts/` under `/src/.vuepress/public/assets/` to store font files. You may optionally add subdirectories for different font formats, such as `woff2/` and `ttf/` (though this is entirely up to you—omitting them is fine). Then place your required font files inside, for example:

![File path screenshot](https://image.yule.ink/blog/20251120143358699.png)

## Declaring Fonts

Modify `/src/.vuepress/styles/index.scss` by adding the following code at the beginning:

```scss
$pf-fonts: (
  400: "PingFangSC-Regular",
  500: "PingFangSC-Medium",
  600: "PingFangSC-Semibold",
  // Add all required font weights and names here
);

@each $weight, $file in $pf-fonts {
  @font-face {
    font-family: "PingFang SC";
    src: url("/assets/fonts/woff2/#{$file}.woff2") format("woff2"); // Replace with your actual file type, such as .ttf for TrueType.
    font-weight: $weight;
    font-display: swap; // This is the font display strategy, you can search for more information online
  }
}
```

This is a SCSS loop that declares all font files.

## Setting the Font

Modify `/src/.vuepress/styles/palette.scss` and set the values of the variables `$vp-font` and `$vp-font-heading` to the font family name you declared, which is `"PingFang SC"`. Note that single quotes must be added at both the beginning and end [^1].

```scss
$vp-font: '"PingFang SC", "Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
$vp-font-heading: '"PingFang SC", "Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
// $vp-font-mono is the monospaced font, which is not set here. You can set it according to your needs.
```

Then you'll see the font applied, and it will also take effect on mobile devices.

[^1]: [VuePress Theme Hope Guide](https://theme-hope.vuejs.press/en/guide/customize/font.html)
