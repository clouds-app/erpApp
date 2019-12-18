import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import user from './module/user'
import report from './module/report'
import verify from './module/verify'
import paperIn from './module/paperIn'
import paperOB from './module/paperOB'
import boxIn from './module/boxIn'
import qutation from './module/qutation'
import paperboard from './module/paperboard'
import paperBox from './module/paperBox'
import cardBoard from './module/cardBoard'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {

	},
	mutations: {

	},
	actions: {

	},
	modules: {
		app,
		user,
		report,
		verify,
		paperIn,
		paperOB,
		boxIn,
		qutation,
		paperBox,
		paperboard,
		cardBoard,
	}
})
