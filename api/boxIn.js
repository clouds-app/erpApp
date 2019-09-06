/**
 * 纸箱成品入库,成品出库,半成品入库
 */
import axios from '@/libs/api.request'
import config from '@/config'
//import Qs from 'qs'
 let apiPath= '/clerp-app-api'  //正式环境

/**
 * @desc boxIn 描述 添加出入库
 * 
 * @params 参数
 * 
 * @author Andy Huang
 * 
 * @created 2019/08/22 13:43:45
 */

export const aspSaveBoxIn = ({
	bi_Group,
	bi_WorkNo,
	bi_InQty
}) => {
	//参数
	let data = {
		bi_Group,
		bi_WorkNo,
		bi_InQty
	}

	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/aspSaveBoxIn`,
		data,
		method: 'POST',
	})
}

export const boxScanOrder = ({
	bi_WorkNo,
	bc_No,
	Flag
}) => {
	//参数
	let data = {
		bi_WorkNo,
		bc_No,
		Flag
	}

	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/boxScanOrder`,
		data,
		method: 'POST',
	})
}

export const aspSaveBoxOutTemp = ({
	bd_CarNo,
	bd_Follower,
	bd_Loador,
	bd_SenderID,
	OrderQtyStr,
	NoStr
}) => {
	//参数
	let data = {
		bd_CarNo,
		bd_Follower,
		bd_Loador,
		bd_SenderID,
		OrderQtyStr,
		NoStr
	}


	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/aspSaveBoxOutTemp`,
		data,
		method: 'POST',

	})
}

export const aspSaveBoxHalfProdIn =  ({
	hp_bi_WorkNo,
	hp_wpl_Id,
	hp_mo_ID,
	hp_tt_Code,
	Qty,
	Remark
}) => {
	//参数
	let data = {
		hp_bi_WorkNo,
		hp_wpl_Id,
		hp_mo_ID,
		hp_tt_Code,
		Qty,
		Remark
	}

	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/aspSaveBoxHalfProdIn`,
		data,
		method: 'POST',

	})
}

export const findUser =  ({
	workType
}) => {
	//参数
	let data = {
		workType
	}

	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/findUser`,
		data,
		method: 'POST',

	})
}

export const findCar =  () => {
	//参数
	let data = {
	}

	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/findCar`,
		data,
		method: 'POST',
	})
}
