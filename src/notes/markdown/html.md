---
title: HTML - 于乐的 Markdown 教程
shortTitle: HTML
description: 介绍 Markdown 的 HTML 语法
isOriginal: true
author: Yule
date: 2025-11-24

category: ["笔记"]
tag: ["Markdown", "教程"]
excerpt: Markdown 支持 HTML

order: 11
---

Markdown 支持 HTML 语法。

## 语法

HTML 语法是将 HTML 标签直接写入 Markdown 源文件中，支持 HTML 的所有标签。但一些地方可能会禁用某些标签以防止 [XSS 攻击](https://wilesangh.github.io/ctf-web/xss_guide/)。

下面举一些例子：

::: tabs

@tab Markdown

```md
<h1>标题</h1>

<p>段落</p>

<code>行内代码</code>

<pre>
  代码块
</pre>

<img src="https://www.baidu.com/favicon.ico" alt="图片">

<a href="https://www.google.com">链接</a>

<p>换<br>行</p>
```

@tab 渲染效果

<h1>标题</h1>

<p>段落</p>

<code>行内代码</code>

<pre>
  代码块
</pre>

<img src="https://www.baidu.com/favicon.ico" alt="图片">

<a href="https://www.google.com">链接</a>

<p>换<br>行</p>

:::
