/**
 * 纸板入库，出仓
 */
import axios from '@/libs/api.request'
import config from '@/config'
//import Qs from 'qs'
 let apiPath= '/clerp-app-api'  //正式环境

export const spGetSPaperStoreForPDA = ({
	Coil,
	Flag
}) => {
	//参数
	let data = {
		Coil,
		Flag
	}

	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/spGetSPaperStoreForPDA`,
		data,
		method: 'POST',
	})
}

export const aspExeuteSPaperSimpleAutoScan = ({
	Line,
	Group,
	Oper,
	Flag,
	Coil,
	OutUseID,
	InUseID,
	Wt,
	OperDate_IN_date,
	ErrorStr_OUT_varchar
}) => {
	//参数
	let data = {
		Line,
		Group,
		Oper,
		Flag,
		Coil,
		OutUseID,
		InUseID,
		Wt,
		OperDate_IN_date,
		ErrorStr_OUT_varchar
	}

	
	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/aspExeuteSPaperSimpleAutoScan_InI`,
		data,
		method: 'POST',
	})
}


export const spSPaperStoreQueryForPDA = ({
	Coil,
	Vend,
	Type,
	Width,
	Gram,
	Station
}) => {
	//参数
	let data = {
		Coil,
		Vend,
		Type,
		Width,
		Gram,
		Station
	}


	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/spSPaperStoreQueryForPDA`,
		data,
		method: 'POST',
	})
}
