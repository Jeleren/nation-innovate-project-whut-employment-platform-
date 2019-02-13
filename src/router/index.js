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
      path: '/ent_register',
      name: 'ent_register',
      component: () => import('@/views/log_reg/ent_reg')
    },
    {
      path: '/directory_user',
      name: 'directory_user',
      component: () => import('@/views/first_page/user/index'),
      redirect: 'main',
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
          redirect: '/personal/:user_id/active',
          children: [
            {
              path: '/personal/:user_id/active',
              name: 'active',
              component: () => import('@/views/personal/components/active')
            },
            {
              path: '/personal/:user_id/resume',
              name: 'resume',
              component: () => import('@/views/personal/components/resume')
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
