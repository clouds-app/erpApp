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
	//'Content-Type': 'application/x-www-form-urlencoded',
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
    url: `${apiPath}/user/resourceInfoV2`,
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

/**
* @description  获取过滤选择 ===报价 ===用户列表
* /common/select_T_Customer/findList
* ct_Type(客户类型)0:全部,1:纸箱,2:纸板,3:蜂窝 多个逗号分开
* @params { ct_Type }  
* 返回值：
	(ct_ID)客户编号
	(ct_Desc)客户名称
	(ct_Type)客户类型
*/
export const getQutationCustomerList = ({ct_Type}) => {
  //参数
  let data = {
    ct_Type
   }
  return axios.request({
    url: `${apiPath}/common/select_T_Customer/findList`,
    data,
   method: 'POST',
  })
}

/**
* @description  业务员查询
* 搜索条件：
	w_OptType(类型)0:业务员
 返回值：
	(w_ID)业务员id
	(w_Name)业务员名称
*/
export const getSalesmanList = ({w_OptType}) => {
  //参数
  let data = {
    w_OptType
   }
  return axios.request({
    url: `${apiPath}/common/select_T_Worker/findList`,
    data,
   method: 'POST',
  })
}