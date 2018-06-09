import Main from '@/views/Main.vue'

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () => import('@/views/error-page/404.vue')
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/site',
    icon: 'icon-zhandian',
    name: 'site',
    title: '站点管理',
    component: Main,
    children: [
      {
        path: 'index',
        title: '站点管理',
        name: 'site_index',
        component: () => import('@/views/site/site.vue')
      }
    ]
  },
  {
    path: '/search',
    icon: 'icon-icon01',
    name: 'search',
    title: '搜索管理',
    component: Main,
    children: [
      {
        path: 'index',
        title: '搜索管理',
        name: 'search_index',
        component: () => import('@/views/search/search.vue')
      }
    ]
  },
  {
    path: '/live',
    icon: 'icon-zhibo',
    name: 'live',
    title: '直播管理',
    component: Main,
    children: [
      {
        path: 'unhandle',
        title: '待处理直播',
        name: 'live_unhandle',
        component: () => import('@/views/live/unhandle/unhandle.vue')
      },
      {
        path: 'all',
        title: '全部直播',
        name: 'live_all',
        component: () => import('@/views/live/all/all.vue')
      }
    ]
  }
]

export const routers = [
  ...appRouter,
  page404
]
