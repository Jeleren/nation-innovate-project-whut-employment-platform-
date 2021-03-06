import router from './router'
// {userRouter, entRouter}
import store from '@/store/index'
import cookie from 'js-cookie'
// import {entRouter, userRouter} from '@/router'

router.beforeEach((to, from, next) => {
  // if (cookie.get('token')) {
  //   if (from.path === '/gc/login') {
  //     if (store.state.user.userInfo.identity === 1) {
  //       console.log('add')
  //       router.addRoutes(userRouter)
  //       // console.log(to)
  //       // next({ ...to, replace: true })
  //       // console.log(router)
  //     } else {
  //       router.addRoutes(entRouter)
  //     }
  //   }
  // } else {
  //   // next(`/login?redirect=${to.path}`)
  // }
  if (to.path === '/gc/login') {
    if (cookie.get('id') && cookie.get('token')) {
      store.dispatch('getSelfInfo', cookie.get('id')).then(res => {
        if (res === 1) {
          next('/gc/directory_user')
        } else {
          next('/gc/ent')
        }
      })
    }
  }
  // console.log(to, from)
  if (!store.state.user.userInfo.id && cookie.get('id')) {
    store.dispatch('getSelfInfo', cookie.get('id'))
    if (to.params.id) {
      store.dispatch('getInfo', {id: to.params.id})
    }
  }
  if (to.query.entId) {
    store.dispatch('getInfo', {id: to.query.entId})
  }
  next()
  // console.log(to, from)
})
