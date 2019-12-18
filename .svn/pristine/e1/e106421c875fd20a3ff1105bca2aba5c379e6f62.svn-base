import { getQutation_basePaper,getQutation_paperQuality,getQutation_paperParts,getQutation_lb,getQutation_boxArea,getQutation_products } from '@/api/qutation'
import config from '@/config'
import { setLocalStorage,getLocalStorage } from '@/libs/util'
const serverBusyTips="执行失败，请稍后再试！"


export default {
    state:{
	 //原纸报价 纸质报价 配纸加价 楞别加价
	 basePaper: uni.getStorageSync("basePaper")=='' ? '' :JSON.parse(uni.getStorageSync("basePaper")),
	 paperQuality: uni.getStorageSync("paperQuality")=='' ? '' :JSON.parse(uni.getStorageSync("paperQuality")),
	 paperParts: uni.getStorageSync("paperParts")=='' ? '' :JSON.parse(uni.getStorageSync("paperParts")),
	 paperlb: uni.getStorageSync("paperlb")=='' ? '' :JSON.parse(uni.getStorageSync("paperlb")),
    },
    getters:{
	 //原纸报价 纸质报价 配纸加价 楞别加价
      basePaper_getters:(state, getters)=>{
        return state.basePaper
      },
	  paperQuality_getters:(state, getters)=>{
	    return state.paperQuality
	  },
	  paperParts_getters:(state, getters)=>{
	    return state.paperParts
	  },
	  paperlb_getters:(state, getters)=>{
	    return state.paperlb
	  },
    },
    mutations: {
		//原纸报价 纸质报价 配纸加价 楞别加价
        set_basePaper(state, data) {
           state.basePaper = data
		   uni.setStorageSync("basePaper",JSON.stringify(data)) 
        },
		set_paperQuality(state, data) {
		   state.paperQuality = data
		   uni.setStorageSync("paperQuality",JSON.stringify(data)) 
		},
		set_paperParts(state, data) {
		   state.paperParts = data
		   uni.setStorageSync("paperParts",JSON.stringify(data)) 
		},
		set_paperlb(state, data) {
		   state.paperlb = data
		   uni.setStorageSync("paperlb",JSON.stringify(data)) 
		},
   
    },
    actions: {
		/**
		* @description 纸箱报价
		* @params { ct_ID }
		*/
		getQutation_boxArea_action({commit},params){
		  return new Promise((resolve,reject)=>{
		    try {
		      getQutation_boxArea(params).then(res=>{
		        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
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
		/**
		* @description 产品报价
		* @params { ct_ID }
		*/
		getQutation_products_action({commit},params){
		  return new Promise((resolve,reject)=>{
		    try {
				
		      getQutation_products(params).then(res=>{
		        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
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
      /**
      * @description 原纸报价
      * @params { ct_ID }
      */
      getQutation_basePaper_action({commit},params){
        return new Promise((resolve,reject)=>{
          try {
			console.log('getQutation_basePaper_action:'+JSON.stringify(params))
            getQutation_basePaper(params).then(res=>{
              const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
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
	  /**
	  * @description // 纸质报价
	  * @params { ct_ID }
	  */
   getQutation_paperQuality_action({commit},params){
     return new Promise((resolve,reject)=>{
       try {
         getQutation_paperQuality(params).then(res=>{
           const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
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
   /**
   * @description  配纸加价 
   * @params { ct_ID }
   */
   getQutation_paperParts_action({commit},params){
     return new Promise((resolve,reject)=>{
       try {
         getQutation_paperParts(params).then(res=>{
           const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
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
   /**
   * @description 楞别加价
   * @params { ct_ID }
   */
   getQutation_lb_action({commit},params){
     return new Promise((resolve,reject)=>{
       try {
         getQutation_lb(params).then(res=>{
           const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
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