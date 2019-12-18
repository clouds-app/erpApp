import axios from '@/libs/api.request'
import config from '@/config'
 let apiPath= '/clerp-app-api'  //正式环境

///查询班别列表 下拉框
export const getClassBanList = ({}) => {
  //参数
  let data = {}
   
 return axios.request({
    url: `${apiPath}/scan/classBan`,
    data,
    method: 'POST',
  })
}

///查询线别列表 下拉框
export const getLineSeparationList = ({}) => {
  //参数
  let data = {}
   
 return axios.request({
    url: `${apiPath}/scan/lineSeparation`,
    data,
    method: 'POST',
  })
}

///查询车牌列表 下拉框 
export const getLicensePlateList = ({}) => {
  //参数
  let data = {}
   
 return axios.request({
    url: `${apiPath}/scan/LicensePlate`,
    data,
    method: 'POST',
  })
}

///查询 司机 列表 下拉框 
export const getDriverList = ({}) => {
  //参数
  let data = {}
   
 return axios.request({
    url: `${apiPath}/scan/drivere`,
    data,
    method: 'POST',
  })
}

///查询 装车单号 列表 下拉框 
export const getEntruckingList = ({}) => {
  //参数
  let data = {}
   
 return axios.request({
    url: `${apiPath}/scan/entrucking`,
    data,
    method: 'POST',
  })
}


/**
* @description  纸板明细清单 
* 搜索条件：
*  procName,params (存储过程名称) 其它参数
  返回值：
	(List)
*/
export const getPaperBoardDetail = ({ procName,params }) => {
  //参数
  let data = {
    params
   }
   
 return axios.request({
    url: `${apiPath}/scan/execute/${procName}`,
    data,
    method: 'POST',
  })
}

/**
* @description  获取装车清单下拉列表  
* 搜索条件：
*   procName,params (存储过程名称) 其它参数
  返回值：
	(List)
*/
export const getExecuteDropDown = ({ procName,params }) => {
  //参数
  let data = {
    params
   }
   
 return axios.request({
    url: `${apiPath}/scan/executeDropDown/${procName}`,
    data,
    method: 'POST',
  })
}


/**
* @description  获取装车清单详细 
* 搜索条件：
*   procName,params (存储过程名称) 其它参数
  返回值：
	(List)
*/
export const getExecuteDropDownDetails = ({ procName,params }) => {
  //参数
  let data = {
    params
   }
   
 return axios.request({
    url: `${apiPath}/scan/executeDropDownDetails/${procName}`,
    data,
    method: 'POST',
  })
}


/**
* @description  本单清单详情  
* 搜索条件：
*   procName,params (存储过程名称) 其它参数
  返回值：
	(List)
*/
export const getBoardDetails = ({ procName,params }) => {
  //参数
  let data = {
    params
   }
   
 return axios.request({
    url: `${apiPath}/scan/getBoardDetails/${procName}`,
    data,
    method: 'POST',
  })
}

/**
* @description  获取卡板号 
* 搜索条件：
*   id (id) 
  返回值：
	(List)
*/
export const getMoveBoardNumbe = ({ id }) => {
  //参数
  let data = {
    id
   }
   
 return axios.request({
    url: `${apiPath}/scan/getMoveBoardNumbe`,
    data,
    method: 'POST',
  })
}


/**
* @description  库位扫描卡板号 
* 搜索条件：
*   id (字符串) 
  返回值：
	(List)
*/
export const getWarehouseBoardNumbe = ({ id }) => {
  //参数
  let data = {
    id
   }
   
 return axios.request({
    url: `${apiPath}/scan/getWarehouseBoardNumbe`,
    data,
    method: 'POST',
  })
}

/**
* @description  获取纸板入库卡板号id 
* 搜索条件：
*   id (字符串) 
  返回值：
	(List)
*/
export const getWorkNumbe = ({ id }) => {
  //参数
  let data = {
    id
   }
   
 return axios.request({
    url: `${apiPath}/scan/getWorkNumbe`,
    data,
    method: 'POST',
  })
}

/**
* @description  获取二维码工单号相关信息并新增到数据库
* 搜索条件：
*   map (对象) 
  返回值：
	(List)
*/
export const getWorkOrderDetails = ({ map }) => {
  //参数
  let data = {
    map
   }
   
 return axios.request({
    url: `${apiPath}/scan/getWorkOrderDetails`,
    data,
    method: 'POST',
  })
}

/**
* @description  保存出仓  
* 搜索条件：
*   procName,params (存储过程名称) 其它参数
  返回值：
	(List)
*/
export const setWarehouses = ({ procName,params }) => {
  //参数
  let data = {
    params
   }
   
 return axios.request({
    url: `${apiPath}/scan/saveWarehouses/${procName}`,
    data,
    method: 'POST',
  })
}
///查询 发货员 列表 下拉框
export const getSendGoodsList = ({}) => {
  //参数
  let data = {}
   
 return axios.request({
    url: `${apiPath}/scan/sendGoods`,
    data,
    method: 'POST',
  })
}


/**
* @description  修改卡板号数据 根据卡板号 批量修改
* 搜索条件：
*   map (对象) 
  返回值：
	(List)
*/
export const setBoardNumber = ({ map }) => {
  //参数
  let data = {
    map
   }
   
 return axios.request({
    url: `${apiPath}/scan/updateBoardNumber`,
    data,
    method: 'POST',
  })
}


/**
* @description  修改卡板号数据 根据卡板号 可能批量修改
* 搜索条件：
*   map (对象) 
  返回值：
	(List)
*/
export const setCardBoardNumber = ({ map }) => {
  //参数
  let data = {
    map
   }
   
 return axios.request({
    url: `${apiPath}/scan/updateCardBoardNumber`,
    data,
    method: 'POST',
  })
}


/**
* @description  修改库位
* 搜索条件：
*   newStationNo,StationNo (字符串) 
  返回值：
	(List)
*/
export const setStationNo = ({ newStationNo,StationNo }) => {
  //参数
  let data = {
    newStationNo,StationNo
   }
   
 return axios.request({
    url: `${apiPath}/scan/updateStationNo`,
    data,
    method: 'POST',
  })
}
