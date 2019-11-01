import axios from '@/libs/api.request'
import config from '@/config'
//import Qs from 'qs'
 let apiPath= '/clerp-app-api'  //正式环境

/**
* @description  纸箱进度查询
* @params { ct_ID }
*/
export const getPaperBoxProgress = ({ ct_ID }) => {
  //参数
  let data = {
    //ct_IDP
   }
   
 return axios.request({
    url: `${apiPath}/paperBox/progress`,
    data,
    method: 'POST',
  })
}

/**
* @description  纸箱进度详细 BY ID
* @params { ct_ID }
*/
export const getPaperBoxProgressDetail = ({ ct_ID }) => {
  //参数
  let data = {
    //ct_ID
   }
   
 return axios.request({
    url: `${apiPath}/paperBox/progress_detail`,
    data,
    method: 'POST',
  })
}


/**
* @description  纸箱订单汇总 
*
* 搜索条件：
	mode (0:客户 | 1:业务员)
	cList (客户编号)
	ct_SalerId(业务员ID)
	sFrom (开始时间)
	sTo (结束时间)
 返回值：
	(ct_Desc|w_Name)(客户|业务员)名称
	(co_Qty)数量
	(BMoney)金额
	(Aarea)面积
	(Acube)体积
	(AmtB)金额点比
*/
export const getPaperBoxOrderSummary = ({ mode,cList,ct_SalerId,sFrom,sTo}) => {
  //参数
  let data = {}
  if(mode ==0){
	  data = 
	  {
		  mode,cList,sFrom,sTo
	  }
  }else{
	  data = 
	  {
	  	 mode,ct_SalerId,sFrom,sTo
	  }
  }
   
 return axios.request({ 
    url: `${apiPath}/common/aspBoxCOAnalyzerAPP/findList`,
    data,
    method: 'POST',
  })
}

/**
* @description  纸箱送货汇总
*
* 搜索条件：
	mode (0:客户 | 1:业务员)
	cList (客户编号)
	ct_SalerId(业务员ID)
	sFrom (开始时间)
	sTo (结束时间)
  返回值：
	(ct_Desc|w_Name)(客户|业务员)名称
	(bi_Qty)数量
	(BMoney)金额
	(Aarea)面积
	(Acube)体积
	(AmtB)金额点比 Delivery summary
*/
export const getPaperBoxDeliverySummary = ({ mode,cList,ct_SalerId,sFrom,sTo}) => {
  //参数
  let data = {}
  if(mode ==0){
  	  data = 
  	  {
  		  mode,cList,sFrom,sTo
  	  }
  }else{
  	  data = 
  	  {
  	  	 mode,ct_SalerId,sFrom,sTo
  	  }
  }
   
 return axios.request({
    url: `${apiPath}/common/aspBoxDeliAnalyzerAPP/findList`,
    data,
    method: 'POST',
  })
}






