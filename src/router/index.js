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
      redirect: '/directory_user/main',
      children: [
        {
          path: '/directory_user/main',
          name: 'main',
          component: () => import('@/views/first_page/user/first_page')
        },
        {
          path: '/directory_user/employment',
          name: 'employment',
          component: () => import('@/views/employment/index')
        },
        {
          path: '/directory_user/competition',
          name: 'competition',
          component: () => import('@/views/competition/index')
        },
        {
          path: '/directory_user/lab',
          name: 'lab',
          component: () => import('@/views/lab/index')
        },
        {
          path: '/directory_user/pros',
          name: 'pros',
          component: () => import('@/views/pros/index')
        },
        {
          path: '/personal/:user_id',
          name: 'personal',
          component: () => import('@/views/personal/index'),
          redirect: '/personal/gallery',
          children: [
            {
              path: '/personal/gallery',
              name: 'gallery',
              component: () => import('@/views/personal/components/left'),
              redirect: '/personal/active',
              children: [
                {
                  path: '/personal/active',
                  name: 'active',
                  component: () => import('@/views/personal/components/active')
                },
                {
                  path: '/personal/resume',
                  name: 'resume',
                  component: () => import('@/views/personal/components/resume')
                }
              ]
            },
            {
              path: '/personal/fan',
              name: 'fan',
              component: () => import('@/views/personal/fan')
            },
            {
              path: '/personal/follow',
              name: 'follow',
              component: () => import('@/views/personal/follow')

            },
            {
              path: '/personal/collect'
            },
            {
              path: '/personal/userInfo',
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
  if (!store.state.user.userInfo.user_id && cookie.get('user_id')) {
    store.dispatch('getSelfInfo')
  }
  next()
})
export default router
