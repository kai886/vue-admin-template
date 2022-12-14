import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import htmlToPdf from '@/utils/exportPdf'
Vue.use(htmlToPdf)

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: '3axM7xY1moZ2DsrWFO0rCtK8WyukVQCM'   // ak 是在百度地图开发者平台申请的** 详见 http://lbsyun.baidu.com/apiconsole/key */
})
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.directive('dbClick', {
  inserted (el, binding) {
    el.addEventListener('click', e => {
      if (!el.disabled) {
        el.disabled = true
        el.style.cursor = 'not-allowed'
        setTimeout(() => {
          el.style.cursor = 'pointer'
          el.disabled = false
        }, 1500)
      }
    })
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
