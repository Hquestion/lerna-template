# `@sdx/view`

> 页面级组件是一个完整的系统，可以在应用中直接注册使用，也可以在应用中引入页面组件，由应用组装路由。

## Usage

```js
import {ViewDataset} from '@sdx/view';

// router为应用路由，parentPath为应用中定义的父路由，可借助修改的vue-router将页面挂载到父路由下面
ViewDataset.register(router, parentPath);
```

或者

```js
// 在应用的路由配置中
// components/user-center是例子，假设存在这么一个组件
const ViewUserCenter = require('@sdx/views/components/user-center');

new VueRouter({
    routes: [
        {
            path: '/view-1',
            name: 'View1',
            component: ViewUserCenter // View1为
        }
    ]
})

```
