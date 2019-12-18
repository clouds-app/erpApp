import {
	getClassBanList,
	getLineSeparationList,
	getLicensePlateList,
	getDriverList,
	getEntruckingList,
	getPaperBoardDetail,
	getExecuteDropDown,
	getExecuteDropDownDetails,
	getBoardDetails,
	getMoveBoardNumbe,
	getWarehouseBoardNumbe,
	getWorkNumbe,
	getWorkOrderDetails,
	setWarehouses,
	getSendGoodsList,
	setBoardNumber,
	setCardBoardNumber,
	setStationNo
} from '@/api/cardBoard'
import config from '@/config'
import {
	setLocalStorage,
	getLocalStorage
} from '@/libs/util'
const serverBusyTips = "执行失败，请稍后再试！"

export default {
	state: {

	},
	mutations: {

	},
	actions: {
		///查询班别列表 下拉框
		getClassBanListAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getClassBanList(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		///查询线别列表 下拉框
		getLineSeparationListAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getLineSeparationList(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//查询车牌列表 下拉框 
		getLicensePlateListAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getLicensePlateList(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//查询 司机 列表 下拉框
		getDriverListAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getDriverList(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//查询 装车单号 列表 下拉框 
		getEntruckingListAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getEntruckingList(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//纸板明细清单
		getPaperBoardDetailAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getPaperBoardDetail(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//获取装车清单下拉列表
		getExecuteDropDownAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getExecuteDropDown(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//获取装车清单详细
		getExecuteDropDownDetailsAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getExecuteDropDownDetails(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//本单清单详情
		getBoardDetailsAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getBoardDetails(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//获取卡板号
		getMoveBoardNumbeAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getMoveBoardNumbe(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//库位扫描卡板号
		getWarehouseBoardNumbeAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getWarehouseBoardNumbe(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//获取纸板入库卡板号id 
		getWorkNumbeAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getWorkNumbe(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//获取二维码工单号相关信息并新增到数据库
		getWorkOrderDetailsAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getWorkOrderDetails(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//保存出仓
		setWarehousesAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					setWarehouses(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		//查询 发货员 列表 下拉框
		getSendGoodsListAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					getSendGoodsList(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		// 修改卡板号数据 根据卡板号 批量修改
		setBoardNumberAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					setBoardNumber(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		// 修改卡板号数据 根据卡板号 可能批量修改
		setCardBoardNumberAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					setCardBoardNumber(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		// 修改库位
		setStationNoAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
				try {
					setStationNo(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						//console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
	}
}
