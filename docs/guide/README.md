# 指南

## claus-ui

vue3 的项目只能使用 vue3 的组件库。vue2 的项目只能使用 vue2 的组件库。否则可能会报一个错 Object(...) is not a function
vuepress 框架 v1.x 的 vue 版本是 2.x，因此只能引入 vue2 的组件库

### 安装

```sh
yarn add claus-ui-vue2
```

### 使用

```js
import { createApp } from "vue";

import clausUI from "claus-ui-vue2"; // 全量引入
// import {clColorCard} from 'claus-ui-vue2'// 按需引入
// 引入样式
import "claus-ui-vue2/lib/index.css";

createApp(App).use(clausUI); // use(clColorCard)
```

## claus-core

### 安装

```sh
yarn add claus-core
```

### 使用

```js
import { getToday } from "claus-core";
console.log(getToday());
```
