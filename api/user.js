import axios from '@/libs/api.request'
import config from '@/config'
//import Qs from 'qs'
 let apiPath= '/clerp-app-api'  //正式环境

/**
* @description 获取随机码，用于MD5 加密
* @params { userId }
*/
export const getValidatorToken = ({ userId }) => {
	//debugger
  //参数
  let data = {
    userId
   }
   
 return axios.request({
    url: `${apiPath}/user/validatorToken`,
    data,
    method: 'POST',
  })
}

/**
* @description 用户登录
* @params { userId, password }
*/
export const login = ({ userId, pwd }) => {
    //参数
    let data = {
      userId,
      pwd
     }
     
   
    return axios.request({
      url: `${apiPath}/user/login`,
      data,
	  method: 'POST',

    })
  }


/**
* @description 根据token,获取用户功能菜单
* @params { token } 
*/
export const getMenuByToken = ({ token }) => {
  //参数
  let data = {
    isLoad:'false',
   }
   
 
  return axios.request({
    url: `${apiPath}/user/resourceInfo`,
    data,
   method: 'POST',

  })
}


/**
* @description 获取过滤选择用户列表
* @params { token } 
*/
export const getCustomerInfo = () => {
 // console.warn('=======getCustomerInfo======'+apiPath)
  //参数
  let data = {
    //token
   }
   
 
  return axios.request({
    url: `${apiPath}/user/customerInfo`,
    data,
   method: 'POST',
  })
}