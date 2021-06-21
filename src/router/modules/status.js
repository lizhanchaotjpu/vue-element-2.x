// 状态路由
const statusRoute = [
  {
    path: '/401',
    name: '401',
    meta: {
      name: '401'
    },
    component: () =>
      import(/* webpackChunkName: "account" */ '@/views/pages/status/401.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      name: '404'
    },
    component: () =>
      import(/* webpackChunkName: "account" */ '@/views/pages/status/404.vue')
  }
]
export default statusRoute
