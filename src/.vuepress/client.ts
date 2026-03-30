import { defineClientConfig } from "vuepress/client";
import VueDemo2 from "./components/VueDemo2.vue";

import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

export default defineClientConfig({
  enhance({ app }) {
    // 全局注册组件
    app.component("VueDemo2", VueDemo2);
  },
});
