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
              path: '/collect'
            },
            {
              path: '/userInfo',
              name: '',
              component: () => import('@/views/personal/info')
            }
          ]
        }
      ]
    },
    {
      path: '/ent',
      name: 'ent',
      component: () => import('@/views/ent/index'),
      redirect: '/ent/active',
      children: [
        {
          path: '/ent/active',
          name: 'active',
          component: () => import('@/views/ent/active/active')
        },
        {
          path: '/ent/employment',
          name: 'ent-employment',
          component: () => import('@/views/ent/employment/index'),
          redirect: '/ent/employment/edit',
          children: [
            {
              path: '/ent/employment/edit',
              name: '',
              component: () => import('@/views/ent/employment/emp_edit')
            },
            {
              path: '/ent/employment/manage',
              name: '',
              component: () => import('@/views/ent/employment/emp_manage')
            },
            {
              path: '/ent/employment/resume',
              name: '',
              component: () => import('@/views/ent/employment/emp_resume')
            }
          ]
        },
        {
          path: '/ent/competition',
          name: '',
          component: () => import('@/views/ent/competition/competition'),
          children: [
            {
              path: '/ent/competition/edit',
              name: '',
              component: () => import('@/views/ent/competition/comp_edit')
            },
            {
              path: '/ent/competition/manage',
              name: '',
              component: () => import('@/views/ent/competition/comp_manage')
            }
          ]
        },
        {
          path: '/ent/info',
          name: '',
          component: () => import('@/views/ent/info/info')
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
