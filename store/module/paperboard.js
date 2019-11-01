import {getProgress,getProgressDetail } from '@/api/paperboard'
import config from '@/config'
import { setLocalStorage,getLocalStorage } from '@/libs/util'
const serverBusyTips="执行失败，请稍后再试！"


export default {
    state:{
	 //纸板进度列表
	 progressList: uni.getStorageSync("progressList")=='' ? '' :JSON.parse(uni.getStorageSync("progressList")),
    },
    getters:{
	 //纸板进度列表
      progressList_getters:(state, getters)=>{
        return state.progressList
      },

    },
    mutations: {
		//纸板进度列表
        set_progressList(state, data) {
           state.progressList = data
		   uni.setStorageSync("progressList",JSON.stringify(data)) 
        },

   
    },
    actions: {
		/**
		* @description 纸板进度查询
		* @params { ct_ID }
		*/
		getProgress_action({commit},params){
		  return new Promise((resolve,reject)=>{
		    try {
		      getProgress(params).then(res=>{
				  //debugger
		        const data = config.isRunApp ? res : res.data
		        if(data.success)
		        {
				  commit('set_progressList',data.data.records)
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
		* @description 纸板进度详细
		* @params { coNo }
		*/
		getProgressDetail_action({commit},params){
		  return new Promise((resolve,reject)=>{
		    try {
		      getProgressDetail(params).then(res=>{
		        const data = config.isRunApp ? res : res.data
		        if(data.success)
		        {
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