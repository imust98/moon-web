import { RouteConfig } from 'vue-router';
import ErrorList from '../views/JsError/ErrorList.vue';
import ErrorDetail from '../views/JsError/ErrorDetail.vue';
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/errorlist',
    name: 'errorlist',
    meta: {
      title: '错误列表'
    },
    component:ErrorList
  },
  {
    path: '/errordetail/:id',
    name: 'errordetail',
    meta: {
      title: '错误详情'
    },
    component:ErrorDetail
  }
];

export default routes;
