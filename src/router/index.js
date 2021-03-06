import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home.vue'
import account from './modules/account'
import component from './modules/component'
import status from './modules/status'
import stores from 'store'
import { routerWhiteList, tokenName, title, routeModel } from '@/conf/config'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        meta: {
          name: '首页'
        },
        component: () =>
          import(
            /* webpackChunkName: "index" */ '@/views/pages/index/Index.vue'
          )
      },
      // 状态页
      ...status
    ]
  },
  /* 账户相关路由 */
  ...account,
  /* 组件相关路由 */
  ...component,
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  mode: routeModel,
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.name} | ${title}`
  const whiteList = routerWhiteList.filter((item) => item === to.path)
  if (!stores.get(tokenName) && !whiteList.length) {
    next('/login')
  } else {
    next()
  }
})
export default router
