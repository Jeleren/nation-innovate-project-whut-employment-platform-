// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import {Message, Radio, RadioGroup, Row, Col, Menu, Submenu, MenuItem, Form, FormItem, Input,
  DatePicker, Switch, Button, Table, TableColumn, Tag} from 'element-ui'
import './style/common.scss'
import store from './store'
import './mock'

Vue.use(Message)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Switch)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
