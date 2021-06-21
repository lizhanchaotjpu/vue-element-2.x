// 账户模块路由
const accountRoute = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '登录'
    },
    component: () =>
      import(/* webpackChunkName: "account" */ '@/views/pages/Login.vue')
  }
]
export default accountRoute
