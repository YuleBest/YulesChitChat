import { defineClientConfig } from "vuepress/client";

import VueDemo2 from "./components/VueDemo2.vue"; // 在这导入组件

export default defineClientConfig({
  enhance({ app }) {
    app.component("VueDemo2", VueDemo2); // 全局注册
  },
});
