import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": "structure",

  // 笔记
  "/notes/": [
    "/",
    {
      text: "笔记",
      link: "/notes/",
      children: "structure",
    },
    "/reprint/",
    "/textbook/",
  ],

  // 前端 - 笔记
  "/notes/front-end/": [
    "/",
    "/notes/",
    {
      text: "前端",
      link: "/notes/front-end/",
      children: "structure",
    },
    "/reprint/",
    "/textbook/",
  ],

  // Markdown 教程 - 笔记
  "/notes/markdown/": [
    "/",
    "/notes/",
    {
      text: "于乐的 Markdown 教程",
      link: "/notes/markdown/",
      children: "structure",
    },
    "/reprint/",
    "/textbook/",
  ],

  // 转载
  "/reprint/": [
    "/",
    "/notes/",
    {
      text: "转载",
      link: "/reprint/",
      children: "structure",
    },
    "/textbook/",
  ],

  // 教科书收录计划
  "/textbook/": [
    "/",
    "/notes/",
    "/reprint/",
    {
      text: "教科书收录计划",
      link: "/textbook/",
      children: "structure",
    },
  ],
});
