# `@sdx/ui`

> sdx项目基础组件库

## Usage

为了方便给应用定制ui，组件库内未编译scss文件，且未在加载组件时加载scss文件。
需要开发者在应用代码里手动引入scss文件。详见【定制ui】

### 全量加载

```
const SDXUI = require('@sdx/ui');
Vue.use(SDXUI);
```

### 按需加载

```
import { Button } from '@sdx/ui';
Vue.use(Button);
```

按需加载需要安装babel插件[babel-plugin-component-customize](https://www.npmjs.com/package/babel-plugin-component-customize)，并且在
babel.config.js 或 .babelrc文件中配置
```js
plugins: [
    ['component-customize', {
        libraryName: '@sdx/ui',
        styleCustomize: true
    }]
]
```

> babel-plugin-component-customize插件为定制工具，修改自babel-plugin-component

## 定制UI

组件库暴露了一些scss变量方便给外部应用定制。具体的变量请查看文档中scss变量。

在开发中，我们可以这样引入样式文件

**全量加载**：

```
// 在应用代码中新建scss文件如sdx-ui.scss

$ilv-primary-color: #f00;

// 引入前定义变量覆盖组件库中定义的默认变量
@import '~@sdx/ui/lib/theme/index.scss';
```

**按需加载**

```
// 在应用代码中新建scss文件如sdx-ui.scss

$ilv-primary-color: #f00;

// 引入前定义变量覆盖组件库中定义的默认变量
@import '~@sdx/ui/lib/theme/base.scss';
@import '~@sdx/ui/lib/theme/button.scss';
```

> 需要注意的是，后面可能会引入字体文件，在sdx-ui.scss中需指定字体文件路径，具体方案待定



