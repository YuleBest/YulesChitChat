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

    // Google Fonts API
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
        rel: "stylesheet",
      },
    ],

    // InterVariable
    [
      "link",
      {
        href: "https://cdnjs.cloudflare.com/ajax/libs/inter-ui/4.1.1/inter-variable.min.css",
        rel: "stylesheet",
      },
    ],

    // MiFonts
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/misans-vf@1.0.0/lib/MiSans.min.css",
        rel: "stylesheet",
      },
    ],

    // Yozai Light
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-screen/font.css",
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
