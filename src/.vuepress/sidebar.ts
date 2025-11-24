import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": "structure",

  // 笔记
  "/notes/": [
    "/",
    "/textbook/",
    {
      text: "笔记",
      link: "/notes/",
      children: "structure",
    },
  ],

  // 前端 - 笔记
  "/notes/front-end/": [
    "/",
    "/notes/",
    "/textbook/",
    {
      text: "前端",
      link: "/notes/front-end/",
      children: "structure",
    },
  ],

  // Markdown 教程 - 笔记
  "/notes/markdown/": [
    "/",
    "/notes/",
    "/textbook/",
    {
      text: "于乐的 Markdown 教程",
      link: "/notes/markdown/",
      children: "structure",
    },
  ],
});
