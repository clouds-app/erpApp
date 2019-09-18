// import { login, logout, getUserInfo, } from '@/api/app'
//import {setLocalStorage,getLocalStorage } from '@/libs/util'
// import { GetGuid } from '@/libs/tools'
// const serverBusyTips="服务繁忙，请稍后再试！";

export default {
    state: {
	  currentComFactoryChartData:uni.getStorageSync("currentComFactoryChartData")=='' ? '' :JSON.parse(uni.getStorageSync("currentComFactoryChartData")),
      currentSelectedMenuIndex: '',
      currentSelectedFooterMenu: '',
    },
    //获取：this.$store.getters.currentSelectedMenu_getter
    getters:{
		currentComFactoryChartData_getter:(state)=>{
		    return state.currentComFactoryChartData
		},
        currentSelectedMenu_getter:(state)=>{
            if(state.currentSelectedFooterMenu==''){
                return 'index'
            }
            return state.currentSelectedFooterMenu
        },
        currentSelectedMenuIndex_getter:(state)=>{
            if(state.currentSelectedMenuIndex==null || state.currentSelectedMenuIndex=='undefined'){
                return 0
            }
            return state.currentSelectedMenuIndex
        }
    },
    //设置：this.$store.commit('setCurrentSelectdMenu',data)
    mutations: {
		setCurrentComFactoryChartData(state, data) {
		  state.currentComFactoryChartData = data
				uni.setStorageSync("currentComFactoryChartData",JSON.stringify(data)) 
		     
		},
      setCurrentSelectdFooterMenu(state, data) {
        state.currentSelectedFooterMenu = data
		uni.setStorageSync("currentSelectedFooterMenu",JSON.stringify(data)) 
     
      },
      setCurrentSelectdMenuIndex(state, data) {
        state.currentSelectedMenuIndex = data
		uni.setStorageSync("currentSelectedMenuIndex",JSON.stringify(data)) 
     
      },
    },
    actions: {}

  }