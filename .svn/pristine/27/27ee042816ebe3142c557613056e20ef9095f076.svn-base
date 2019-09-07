import Vue from 'vue'
import App from './App'
import store from './store'
import config from '@/config'
Vue.prototype.$store = store
Vue.prototype.$config = config //自定义配置文件
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()

 //条件编译目前有7个平台，APP-PLUS、APP-PLUS-NVUE、MP-WEIXIN、H5、MP、MP-BAIDU、MP-ALIPAY



