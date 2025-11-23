import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  title: "于乐的碎碎念",
  description: "于乐的碎碎念丨Yule's Chit-Chat",
  lang: "zh-CN",
  
  head: [
    // 字体
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  alias: {
    "@VueDemo": path.resolve(__dirname, "components/VueDemo.vue"),
  },

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
