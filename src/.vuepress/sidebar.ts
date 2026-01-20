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
  ],

  // 技术分析 - 笔记
  "/notes/tech/": [
    "/",
    "/notes/",
    {
      text: "技术分析",
      link: "/notes/tech/",
      children: "structure",
    },
  ],
});
