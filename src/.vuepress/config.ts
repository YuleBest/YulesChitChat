import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  title: "于乐的碎碎念",
  description: "于乐的碎碎念丨Yule's Chit-Chat",
  lang: "zh-CN",

  alias: {
    "@VueDemo": path.resolve(__dirname, "components/VueDemo.vue"),
  },

  theme,

  port: 8081,
  shouldPrefetch: false,
});
