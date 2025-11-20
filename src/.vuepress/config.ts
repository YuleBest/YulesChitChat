import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  title: "于乐的碎碎念",
  description: "于乐的碎碎念丨Yule's Chit-Chat",

  lang: "zh-CN",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
