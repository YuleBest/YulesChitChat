import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // 基础
  hostname: "https://blog.yule.ink/", // 网站地址
  repo: "YuleBest/YulesChitChat", // 仓库地址
  docsDir: "src", // 根目录
  author: {
    name: "于乐Yule",
    url: "https://yule.ink",
  },

  // 自定义
  contributors: false, // 页面贡献者
  editLink: false, // 编辑此页链接
  breadcrumb: false, // 面包屑导航
  titleIcon: false, // 标题旁边的图标
  navbar, // 开启导航栏
  sidebar, // 开启侧边栏
  sidebarSorter: ["readme", "order", "date", "title", "filename"], // 侧边栏排序

  // 页脚
  footer: "", // 页脚文字
  license: "MIT", // 版权信息
  displayFooter: true, // 显示页脚

  // 深色模式
  darkmode: "switch",

  // 博客相关
  blog: {
    name: "于乐 Yule",
    avatar: "/avatar-yule.png",

    description: "永远相信美好的事情即将发生",
    medias: {
      GitHub: "https://github.com/YuleBest",
      Email: "mailto:yule-best@outlook.com",
      Telegram: "@XiaoxiaoYua",
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 全屏按钮
  fullscreen: true,

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  hotReload: false,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: false,
    codeTabs: true,
    component: true,
    demo: false,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    math: {
      type: "katex", // 使用的公式渲染引擎
    },
    obsidianImgSize: true, // Obsidian 风格的图片大小语法
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    comment: {
      provider: "Giscus", // 使用的评论服务
      repo: "YuleBest/YulesChitChat", // 仓库地址
      repoId: "R_kgDOQZDtfA", // 仓库 ID
      category: "Announcements", // 分类
      categoryId: "DIC_kwDOQZDtfM4Cx_y8", // 分类 ID
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:", // 图标前缀
    },

    slimsearch: {
      indexContent: true,
      hotKeys: [],
    },
  },
});
