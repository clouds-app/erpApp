import axios from '@/libs/api.request'
import config from '@/config'
//import Qs from 'qs'
let apiPath = '/clerp-app-api' //正式环境




/**
 * @description 报表页面菜单 NEW FOR UNI-APP
 * @params {token}
 */
export const getReportList = ({
	token
}) => {
	//debugger
	//参数
	let data = {
		token
	}

	return axios.request({
		url: `${apiPath}/report`,
		data,
		method: 'POST',
	})
}

/**
 * @description 功能页面菜单 NEW FOR UNI-APP
 * @params {token}
 */
export const getFunctionList = ({
	token
}) => {
	//debugger
	//参数
	let data = {
		token
	}

	return axios.request({
		url: `${apiPath}/function`,
		data,
		method: 'POST',
	})
}

/**
 * @description 客户欠款汇总表 SumOfCustArrears
 * @params { 根据开始日期(startDate)，结束日期(endDate)，客户(ctCode)来汇总客户欠款 }
 */
export const getAccRAnalyzer = ({
	startDate,
	endDate,
	ctCode,
	token
}) => {
	//参数
	let data = {
		startDate,
		endDate,
		ctCode,
		token
	}


	return axios.request({
		url: `${apiPath}/report/simple/aspAccRAnalyzer`,
		data,
		method: 'POST',
	})
}

/**
 * @description 全厂综合报表 CompFactoryReport ==>暂时注销使用，需求变更
 * @params { 根据开始日期(startDate)，结束日期(endDate),token来获取全厂综合报表 }
 */
export const getColligateAnalyzer = ({
	startDate,
	endDate,
	token
}) => {
	//debugger
	//参数
	let data = {
		startDate,
		endDate,
		token
	}


	return axios.request({
		url: `${apiPath}/report/simple/aspSysColligateAnalyzer`,
		data,
		method: 'POST',
	})
}

/**
 * @description 全厂综合报表 New  CompFactoryReport 20190802
 * @params {token来获取全厂综合报表 }
 */
export const getFactoryKanban = ({
	token
}) => {
	//debugger
	//参数
	let data = {
		token
	}


	return axios.request({
		url: `${apiPath}/report/simple/spGetFactoryKanban`,
		data,
		method: 'POST',
	})
}

/**
* @description 订单查询 paperOrderQuery
* @params { 根据开始日期(startDate)， 
    结束日期(endDate) ，
    客户编号(ctCode)，
    汇总方式(mode)来获取订单信息。
    入参：startDate,endDate,ctCode,mode,token,size(前多少条数，
    默认20条)；结果集是个map：key--orderData(订单数据)，topData(前多少条数据) }
*/
export const getPaperCOQueryAnaly = ({
	startDate,
	endDate,
	ctCode,
	token,
	mode,
	size
}) => {
	//参数
	let data = {
		startDate,
		endDate,
		ctCode,
		token,
		mode,
		size
	}


	return axios.request({
		url: `${apiPath}/report/simple/aspSysPaperCOQueryAnaly`,
		data,
		method: 'POST',
	})
}

/**
* @description 送货查询 deliveryQuery
* @params { 
    根据开始日期(startDate)， 
    结束日期(endDate) ，客户编号(ctCode)查询送货信息。
    入参：startDate,endDate,ctCode,token; 
        }
*/
export const getPaperDeliTotal = ({
	startDate,
	endDate,
	ctCode,
	token
}) => {
	//debugger
	//参数
	let data = {
		startDate,
		endDate,
		ctCode,
		token
	}


	return axios.request({
		url: `${apiPath}/report/simple/aspSysPaperDeliTotal`,
		data,
		method: 'POST',
	})
}
