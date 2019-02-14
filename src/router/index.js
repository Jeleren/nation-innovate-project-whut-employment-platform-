import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/log_reg/login'
import store from '../store'
import cookie from 'js-cookie'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/user_register',
      name: 'user_register',
      component: () => import('@/views/log_reg/user_reg')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/log_reg/reg')
    },
    {
      path: '/directory_user',
      name: 'directory_user',
      component: () => import('@/views/first_page/user/index'),
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: 'main',
          component: () => import('@/views/first_page/user/first_page')
        },
        {
          path: '/employment',
          name: 'employment',
          component: () => import('@/views/employment/index')
        },
        {
          path: '/competition',
          name: 'competition',
          component: () => import('@/views/competition/index')
        },
        {
          path: '/lab',
          name: 'lab',
          component: () => import('@/views/lab/index')
        },
        {
          path: '/pros',
          name: 'pros',
          component: () => import('@/views/pros/index')
        },
        {
          path: '/personal/:user_id',
          name: 'personal',
          component: () => import('@/views/personal/index'),
          redirect: '/gallery',
          children: [
            {
              path: '/gallery',
              name: 'gallery',
              component: () => import('@/views/personal/components/left'),
              redirect: '/active',
              children: [
                {
                  path: '/active',
                  name: 'active',
                  component: () => import('@/views/personal/components/active')
                },
                {
                  path: '/resume',
                  name: 'resume',
                  component: () => import('@/views/personal/components/resume')
                }
              ]
            },
            {
              path: '/fan',
              name: 'fan',
              component: () => import('@/views/personal/fan')
            },
            {
              path: '/follow',
              name: 'follow',
              component: () => import('@/views/personal/follow')

            },
            {
              path: 'collect'
            }
          ]
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (!store.state.user.userInfo.id && cookie.get('user_id')) {
    store.dispatch('getSelfInfo')
  }
  next()
})
export default router
