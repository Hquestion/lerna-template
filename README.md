## 基于Lerna的组件开发流程管理

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

### 背景

公司各大产品服务化，为了最大化共享前端资源，我们考虑了前端业务组件化的开发方案。
一系列调研之后，确定业务组件化可行，随之而来的问题便是项目如何管理。

根据调研的结果，我们将组件分为基础组件、控件级组件、页面级组件三种类型。
其中，各级别组件之间及组件内部间相互依赖，各组件有自己依赖的第三方工具，同时也
有公共的第三方依赖。应该如何处理各模块之间的依赖关系？如何公用第三方依赖？
各个组件应该如何管理版本号，如何发布版本？如何构建开发环境和
生产环境？Lerna就是来解决这些问题的。

### Lerna能用来做什么

+ 处理各模块之间的依赖关系
+ 自动管理版本号/change log等
+ 自动发布到npm(可关闭)
+ 批量执行脚本

使用Lerna再配合一些其他工具，可以很方便的解决业务组件化的前端工程中的一些问题。

### Lerna使用简介

#### 安装

全局安装lerna以便于我们初始化lerna项目：

```
npm install lerna -g
```
or
```
yarn global add lerna
```

#### 项目初始化

```
lerna init --independent
```
这将为我们创建三个目录: packages, lerna.json, package.json。

简单说明一下lerna的两种版本管理模式：

Fixed: 所有项目会共同维护一个版本号（lerna.json中），任意项目在发布时，都会自动更改此版本号。

Independent: 各项目维护各自的版本号，互不影响，且可独立发布。

#### 安装依赖

- 为某个包安装第三方依赖

```
lerna add xxx --scope=xxxx
```
- 为某个包安装本地依赖，如packages/a依赖packages/b

```
lerna add b --scope=a
```
- 为所有包安装依赖

```
lerna add xxx
```

#### 启动

```
lerna bootstrap --hoist
```

将会在lerna的每个包下面执行 npm install，添加--hoist参数后，会
将共同的依赖安装到根目录下以提升性能。

#### 创建包

```
lerna create xxx
```

#### 发布

```
lerna publish  // 发布最新commit的修改
lerna publish <commit-id> // 发布指定commit-id的代码
```
publish 时基本上lerna做了这些事情：

1. 检查哪些项目应该被publish
2. 调整lerna.json中的版本号
3. 修改所有的package.json让它们只想正确的版本
4. 更新所有的依赖
5. 创建新的git commit和tag
6. publish(可以配置--skip-npm跳过发布到npm)
7. 最后把tag和相应的commit给push上去

#### 版本管理

```
lerna version  --conventional-commits //  --conventional-commits用于生成changelogo
```

这个命令 识别出修改的包 --> 创建新的版本号 --> 修改package.json --> 提交修改 打上版本的tag --> 推送到git上。

#### 执行脚本
```
lerna run xxx
```
将会执行每个包中package.json中定义的脚本

#### 其他

以上列举了一些常用的命令，其他的命令可以到github或[简书--中文](https://www.jianshu.com/p/8b7e6025354b)上查看

### 配合其他的工具

+ 代码质量管理？

```
yarn add --dev husky
```
通过钩子来在commit之前做些事情，如eslint检查、静态类型检查（Flow/TS）等。

```
yarn add --dev lint-staged
```
配合husky,只对git暂存区的文件做lint校验，以提升性能。

+ 提交信息随意、不规范？

```
yarn add --dev @commitlint/cli @commitlint/config-conventional
```

commitlint用于对提交信息进行校验，在husky配置里配置commit-msg钩子：

```
"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
```

并配置.commitlintrc.js文件指定常用的规则：

```javascript
module.exports = {
    extends: ['@commitlint/config-conventional']
};
```

+ 每次按指定的格式写提交信息太麻烦？

```
yarn global add commitizen
```
或者也可以安装到本地
```
yarn add --dev commitizen
```
安装到全局时，可以使用git cz替代git commit，这样我们就会有一个交互式命令行来规范我们的输入。

安装到本地时，在package.json中添加脚本：
```
"cm": "npx git-cz"
```
再在项目下运行npm run cm命令，会得到与上面运行git cz一样的交互式命令行。

WebStorm用户也可以安装git commit template插件。

### 总结

至此，前端组件化开发的包管理工具大致完成了。我们用lerna来管理我们的包依赖、版本变更，甚至changelogo
等，用husky来规范开发者的提交。通过这些工具，我们不必再手动维护包与包之间的依赖关系，
不必再每次修改时纠结版本号的管理，也不必担心开发者不按lint的规则来编写代码或者随意编写提交信息。
我们将得到一个统一管理的、自动发布的、编码风格统一的多项目开发环境。


### TODO

+ 工具类函数组件提取
+ 支持按需加载的构建方式
+ 集成单元测试
+ 集成vuepress
+ scss更多的应用
