import { getValidatorToken,login,getMenuByToken,getCustomerInfo } from '@/api/user'
import config from '@/config'
import { setLocalStorage,getLocalStorage } from '@/libs/util'
const serverBusyTips="服务繁忙，请稍后再试！"


export default {
    state:{
      token: uni.getStorageSync("TOKEN") || '',
      menuList: uni.getStorageSync("menuList"),
    },
    getters:{
      menuList_getters:(state, getters)=>{
		  console.warn('====menuList_getters=====')
        return state.menuList
      },
    },
    mutations: {
        setLoginToken(state, token) {
         // debugger
           state.token = token
          //setLocalStorage('TOKEN',token)
		  uni.setStorageSync("TOKEN",token) 
		 // console.warn('uni.getStorageSync("TOKEN"):'+uni.getStorageSync("TOKEN"))
        },
        //保存菜單
        setMenuList(state,data){
          state.menuList = data
          //setLocalStorage('menuList',data)
		  uni.setStorageSync("menuList",data) 
        }
    },
    actions: {
      /**
      * @description 获取随机码，用于MD5 加密
      * @params { username }
      */
      getValidatorToken_action({commit},params){
        return new Promise((resolve,reject)=>{
          try {
			 // debugger
            getValidatorToken(params).then(res=>{
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
              console.error(JSON.stringify(err))
              reject(serverBusyTips)
            })
          } catch (error) {
            reject(serverBusyTips+error)
          }
        })
      },
     /**
      * @description 用户登录
      * @params { username, password }
      */
      Login_action({commit}, params) {
       // debugger
        return new Promise((resolve, reject) => {
          try {
            login(params).then(res => {
              const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
              
              if(data.success)
              {
                //commit('setToken',data.data.token)
                resolve(data)
              }
              else
              {
                reject(data.msg)
              }
            }).catch(err => {
              console.error(JSON.stringify(err))
              reject(serverBusyTips)
            })
          } catch (error) {
            reject(serverBusyTips+error)
          }
      
         
        })
      },
      /**
      * @description 根据token,获取用户功能菜单
      * @params { token } 
      */
      getMenuByToken_action({commit},params){
        return new Promise((resolve,reject)=>{
          try {
            getMenuByToken(params).then(res=>{
             // debugger
              const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
              if(data.success)
              {
                commit('setMenuList',data.data)
                resolve(data.data)
              }
              else
              {
                reject(data.msg)
              }
            }).catch(err=>{
              console.error(JSON.stringify(err))
              reject(serverBusyTips)
            })
          } catch (error) {
            reject(serverBusyTips+error)
          }
        })
      },
        /**
      * @description 获取过滤选择用户列表
      * @params { token } 
      */
     getCustomerInfo_action({commit},params){
      return new Promise((resolve,reject)=>{
        try {
          getCustomerInfo(params).then(res=>{
           // debugger
            const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
            if(data.success)
            {
              resolve(data.data)
            }
            else
            {
              reject(data.msg)
            }
          }).catch(err=>{
            console.error(JSON.stringify(err))
            reject(serverBusyTips)
          })
        } catch (error) {
          reject(serverBusyTips+error)
        }
      })
    },

    }
  }