// 公共测试模块路由
const componentRoute = [
  {
    path: '/editor',
    name: 'Editor',
    meta: {
      name: '富文本编辑框'
    },
    component: () =>
      import(/* webpackChunkName: "component" */ '@/views/pages/Editor')
  }
]
export default componentRoute
