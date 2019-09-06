/**
 *审批API
 */
import axios from '@/libs/api.request'
import config from '@/config'
//import Qs from 'qs'
 let apiPath= '/clerp-app-api'  //正式环境 
/**
 * @description 獲取通知信息個數
 * @params {url} 動態地址查詢
 */
export const getNoticeInfo = ({url}) => {
	//参数
	let data = {
		isLoad:'false',
	}

	
	return axios.request({
		url: `${apiPath}${url}`,
		data,
		method: 'POST',
	})
}


/**
 * @description 采购单审批列表
 * @params {}
 */
export const searchPOData = () => {
	//参数
	let data = {}

	
	return axios.request({
		url: `${apiPath}/confirm/spaperpo/searchPOData`,
		data,
		method: 'POST',
	})
}

export const searchPODetail = ({
	poId
}) => {
	//参数
	let data = {
		poId: poId
	}

	
	return axios.request({
		url: `${apiPath}/confirm/spaperpo/searchPODetail`,
		data,
		method: 'POST',
	})
}
export const approvePO = ({
	poId,
	approvalExplain,
	approveState
}) => {
	//参数
	let data = {
		poId: poId,
		approvalExplain: approvalExplain,
		approveState: approveState
	}

	
	return axios.request({
		url: `${apiPath}/confirm/spaperpo/approvePO`,
		data,
		method: 'POST',
	})
}
/*  辅料  */
export const searchProdPO = () => {
	//参数
	let data = {}

	return axios.request({
		url: `${apiPath}/confirm/prodpo/searchProdPO`,
		data,
		method: 'POST',
	})
}

export const searchProdPODetail = ({
	poId
}) => {
	//参数
	let data = {
		poId: poId
	}

	
	return axios.request({
		url: `${apiPath}/confirm/prodpo/searchProdPODetail`,
		data,
		method: 'POST',
	})
}

export const approveProdPo = ({
	poId,
	approvalExplain,
	approveState
}) => {
	//参数
	let data = {
		poId: poId,
		approvalExplain: approvalExplain,
		approveState: approveState
	}

	
	return axios.request({
		url: `${apiPath}/confirm/prodpo/approveProdPo`,
		data,
		method: 'POST',
	})
}

//POST /confirm/paperspecprice/
/*特价*/
export const searchSpecPrice = () => {
	//参数
	let data = {
	}
	
	return axios.request({
		url: `${apiPath}/confirm/paperspecprice/searchSpecPrice`,
		data,
		method: 'POST',
	})
}
//POST /confirm/paperspecprice/
export const approvePaperSpecPrice = ({coId,approveState,approvalExplain}) => {
	//参数
	let data = {
		coId,
		approvalExplain,
		approveState
	}
	
	return axios.request({
		url: `${apiPath}/confirm/paperspecprice/approvePaperSpecPrice`,
		data,
		method: 'POST',
	})
}