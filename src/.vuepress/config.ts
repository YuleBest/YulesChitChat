import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "于乐的碎碎念",
  description: "于乐的碎碎念丨Yule's Chit-Chat",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  // 字体
  head: [
    [
      "link",
      {
        rel: "preload",
        href: "/assets/fonts/woff2/PingFangSC-Regular.woff2",
      },
    ],
    [
      "link",
      {
        rel: "preload",
        href: "/assets/fonts/woff2/PingFangSC-Regular.ttf",
      },
    ],
  ],
});
