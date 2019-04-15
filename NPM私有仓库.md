## NPM私有仓库

前端组件化开发后，我们会创建大量的组件，如何发布这些组件？如何在公司内部使用这些组件？如何集成到我们的项目中？
组件更新发布后，各项目中如何同步更新或者使用旧版本组件？

我们使用开源的组件库时都是通过npm来管理我们的项目依赖。同样，我们开发的组件
也应该是同样的使用方式。显然我们的业务发布到公网是不合适的。因此我们需要一个私有的
npm服务来给我们发布/获取组件库。

### 三个轻量级的开源npm私服搭建项目

调研了如下几个开源私有npm服务项目，其他cnpm相较于其他两种更加成熟，
也有阿里的团队维护，建议使用cnpm来部署公司内部npm服务。

#### cpm

[github地址](https://github.com/cevio/cpm)

比较小众，但体验不错。

安装方法很简单，官方有详细的文档，这里就不赘述了。

该项目还提供了一个cpm工具，可以通过全局安装

```
npm i @evio/cpm -g
```

来使用。安装后设置host为我们部署的cpm私服地址，即可使用cpm来替代npm了。

#### sinopia

[github地址](https://github.com/rlidwka/sinopia)

安装/配置/部署很简单，官网有对应的描述，这里不再赘述。

不好的地方是，包发布后无法查看详情，ui界面比较简单。

#### cnpm

[github地址](https://github.com/cnpm/cnpmjs.org)

阿里系产品，cnpmjs.org国内npm镜像基于此开发部署。
安装部署与cpm类似，推荐使用cnpm

### npm 源管理

使用私服后，可能会需要切换npm源，这里推荐一个npm源管理工具
```
npm i -g nrm
```
可以添加多个源，并很方便的切换，使用方法自行google或
```
nrm --help
```

### 组件库发布

有了私有npm仓库后，我们便可以将开发的组件发布到私有仓库。

使用lerna：

```
lerna publish --registry=http://xxx // xxx为私有服务器地址
```

使用npm 

```
npm publish --registry=http://xxx // xxx为私有服务器地址
```

如果配置过npm的registry为私有npm服务地址，则不需要携带--registry参数

### .npmignore文件

用于指定项目中的哪些文件不需要发布到npm，
详情见[https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package](https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package)

### 项目中使用

通过私有npm服务，我们可以跟以前一样通过npm install来安装我们所需的依赖。
甚至，我们可以将本地化的一些项目发布到我们的npm服务器来保持一致的开发体验。
