import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const personalRouter = {
  path: '/gc/personal/',
  name: 'personal',
  component: () => import('@/views/personal/index'),
  redirect: '/gc/personal/active',
  children: [
    {
      path: 'active',
      name: '我的动态',
      meta: {icon: 'el-icon-news'},
      component: () => import('@/views/personal/components/active')
    },
    {
      path: 'resume',
      name: '个人简历',
      meta: {icon: 'el-icon-document'},
      component: () => import('@/views/personal/components/resume')
    },
    {
      path: 'fan',
      name: '我的粉丝',
      meta: {icon: 'icon-fan'},
      component: () => import('@/views/personal/fan')
    },
    {
      path: 'follow',
      name: '我的关注',
      meta: {icon: 'icon-follow'},
      component: () => import('@/views/personal/follow')

    },
    {
      path: 'collect',
      name: '我的收藏',
      meta: {icon: 'el-icon-star-off'},
      component: () => import('@/views/personal/collect')
    },
    {
      path: 'userInfo',
      name: '个人信息',
      meta: {icon: 'el-icon-setting'},
      component: () => import('@/views/personal/info')
    }
  ]
}
export const otherRouter = {
  path: '/gc/op/:id',
  name: '',
  redirect: '/gc/op/:id/desc',
  component: () => import('@/views/others/index'),
  children: [
    {
      path: 'desc',
      name: 'TA的信息',
      meta: {icon: 'el-icon-setting'},
      component: () => import('@/views/others/desc')
    },
    {
      path: 'active',
      name: 'TA的动态',
      meta: {icon: 'el-icon-news'},
      component: () => import('@/views/others/other_active')
    }
  ]
}
export const userRouter = {
  path: '/gc/directory_user',
  name: 'directory_user',
  component: () => import('@/views/first_page/user/index'),
  redirect: '/gc/directory_user/main',
  children: [
    {
      path: 'main',
      name: 'main',
      component: () => import('@/views/first_page/user/first_page')
    },
    {
      path: 'employment',
      name: 'employment',
      component: () => import('@/views/employment/index')
    },
    {
      path: 'competition',
      name: 'competition',
      component: () => import('@/views/competition/index')
    },
    {
      path: 'lab',
      name: 'lab',
      component: () => import('@/views/lab/index')
    },
    {
      path: 'pros',
      name: 'pros',
      component: () => import('@/views/pros/index')
    },
    personalRouter,
    otherRouter
  ]}

export const entRouter = {
  path: '/gc/ent',
  name: 'ent',
  component: () => import('@/views/ent/index'),
  redirect: '/gc/ent/active',
  children: [
    {
      path: '/gc/ent/active',
      name: 'active',
      meta: {title: '动态管理', icon: 'el-icon-edit-outline'},
      component: () => import('@/views/ent/active/active')
    },
    {
      path: '/gc/ent/employment',
      name: '',
      meta: {title: '招聘信息', icon: 'el-icon-news'},
      component: () => import('@/views/ent/employment/index'),
      redirect: 'edit',
      children: [
        {
          path: '/gc/ent/employment/edit',
          name: '',
          meta: {title: '编辑招聘信息'},
          component: () => import('@/views/ent/employment/emp_edit')
        },
        {
          path: '/gc/ent/employment/manage',
          name: 'ent-employment',
          meta: {title: '管理招聘信息'},
          component: () => import('@/views/ent/employment/emp_manage')
        },
        {
          path: '/gc/ent/employment/resume',
          name: '',
          meta: {model: 'watch', title: '管理简历'},
          component: () => import('@/views/ent/employment/emp_resume')
        }
      ]
    },
    {
      path: '/gc/ent/competition',
      name: '',
      meta: {title: '比赛活动', icon: 'el-icon-news'},
      component: () => import('@/views/ent/competition/competition'),
      redirect: 'edit',
      children: [
        {
          path: '/gc/ent/competition/edit',
          name: '',
          meta: {title: '编辑比赛信息'},
          component: () => import('@/views/ent/competition/comp_edit')
        },
        {
          path: '/gc/ent/competition/manage',
          name: 'ent-competition',
          meta: {title: '管理比赛信息'},
          component: () => import('@/views/ent/competition/comp_manage')
        }
      ]
    },
    {
      path: '/gc/ent/info',
      name: '',
      meta: {title: '我的信息', icon: 'el-icon-setting'},
      component: () => import('@/views/ent/info/info')
    }
  ]
}
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/gc/login'
  },
  {
    path: '/gc',
    redirect: '/gc/login'
    // component: () => import('@/views/log_reg/reg'),
    // hidden: true
  },
  {
    path: '/gc/login',
    name: 'login',
    component: () => import('@/views/log_reg/login')
  },
  {
    path: '/gc/register',
    name: 'register',
    component: () => import('@/views/log_reg/reg')
  },
  userRouter,
  entRouter
]
export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
// export default router
