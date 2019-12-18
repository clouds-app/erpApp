import {getPaperBoxProgress,getPaperBoxOrderSummary,getPaperBoxDeliverySummary } from '@/api/paperBox'
import config from '@/config'
import { setLocalStorage,getLocalStorage } from '@/libs/util'
const serverBusyTips="执行失败，请稍后再试！"


export default {
    state:{
	 //纸箱进度列表
	 paperBoxProgressList: uni.getStorageSync("paperBoxProgressList")=='' ? '' :JSON.parse(uni.getStorageSync("paperBoxProgressList")),
    },
    getters:{
	 //纸箱进度列表
      paperBoxProgressList_getters:(state, getters)=>{
        return state.paperBoxProgressList
      },

    },
    mutations: {
		//纸箱进度列表
        set_paperBoxProgressList(state, data) {
           state.paperBoxProgressList = data
		   uni.setStorageSync("paperBoxProgressList",JSON.stringify(data)) 
        },

   
    },
    actions: {
		/**
		* @description 纸箱进度列表
		* @params { ct_ID }
		*/
		getPaperBoxProgress_action({commit},params){
		  return new Promise((resolve,reject)=>{
		    try {
		      getPaperBoxProgress(params).then(res=>{
		        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
		        if(data.success)
		        {
				  commit('set_paperBoxProgressList',data)
		          resolve(data)
		        }
		        else
		        {
		          reject(data.msg)
		        } 
		      }).catch(err=>{
		        reject(serverBusyTips)
		      })
		    } catch (error) {
		      reject(serverBusyTips+error)
		    }
		  })
		},
		/**
		* @description 纸箱订单汇总-
		* @params { mode,cList,ct_SalerId,sFrom,sTo }
		*/
		getPaperBoxOrderSummary_action({commit},params){
		  return new Promise((resolve,reject)=>{
		    try {
		      getPaperBoxOrderSummary(params).then(res=>{
		        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
		        if(data.success)
		        {
				  //commit('set_paperBoxProgressList',data)
		          resolve(data)
		        }
		        else
		        {
		          reject(data.msg)
		        } 
		      }).catch(err=>{
		        reject(serverBusyTips)
		      })
		    } catch (error) {
		      reject(serverBusyTips+error)
		    }
		  })
		},
		/**
		* @description 纸箱送货汇总
		* @params { ct_ID }
		*/
		getPaperBoxDeliverySummary_action({commit},params){
		  return new Promise((resolve,reject)=>{
		    try {
		      getPaperBoxDeliverySummary(params).then(res=>{
		        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
		        if(data.success)
		        {
				 // commit('set_paperBoxProgressList',data)
		          resolve(data)
		        }
		        else
		        {
		          reject(data.msg)
		        } 
		      }).catch(err=>{
		        reject(serverBusyTips)
		      })
		    } catch (error) {
		      reject(serverBusyTips+error)
		    }
		  })
		},
	
    }
  }