# view类组件说明

---

view类组件需要支持直接注册到应用路由即可快速集成，也需要支持暴露组件给应用自由组装路由。

## API设计

```js
// 以一个数据集功能作为示例

import DatasetList from './DatasetList';
import Dataset from './Dataset';

// 路由配置

const routeCfg = [
    {
        path: 'dataset-list',
        name: 'DatasetList',
        component: DatasetList,
    },
    {
        path: 'dataset-create',
        name: 'Dataset',
        component: Dataset,
    }
];

// 注册到应用路由的方法

const register = (router, parentPath) => {
    return router.addRoutes(registerObj.routeCfg, parentPath)
};



const viewRouter = {
    routes: routeCfg,
    register
};

// 把组件及路由注册方法暴露，暴露路由配置的目的是为了给外部应用修改配置

export default {DatasetList, Dataset, viewRouter}

```

## Usage

```js

import {ViewDataset} from '@sdx/view';
```

在应用中使用时，可以直接注册到路由，即可直接使用:

```js

ViewDataset.viewRouter.register(router, parentPath);
```

也可以在应用的路由配置中自由组装：

```js

new VueRouter({
    routes: [
        {
            path: '/dataset-list',
            name: 'DatasetList',
            component: ViewDataset.DatasetList // View1为
        }
    ]
})
```

