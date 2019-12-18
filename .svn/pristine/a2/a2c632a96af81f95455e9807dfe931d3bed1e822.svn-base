import { searchBoxApprovalList,boxDetailApproval,getNoticeInfo,searchPOData,searchPODetail,approvePO,searchProdPO,searchProdPODetail,approveProdPo,approvePaperSpecPrice,searchSpecPrice} from '@/api/verify'
import config from '@/config'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
const serverBusyTips="执行失败，请稍后再试！"


export default {
	state:{
		//纸箱
		boxList:uni.getStorageSync("boxList")==''?'':JSON.parse(uni.getStorageSync("boxList")),
		//辅料
		materialList:uni.getStorageSync("materialList")==''?'':JSON.parse(uni.getStorageSync("materialList")),
		//原纸
		originalPapersList:uni.getStorageSync("originalPapersList")==''?'':JSON.parse(uni.getStorageSync("originalPapersList")),
		//特价
		barginPriceList:uni.getStorageSync("barginPriceList")==''?'':JSON.parse(uni.getStorageSync("barginPriceList")),
	},
	getters:{
		//纸箱审批
		boxList_getter:(state)=>{
			return state.boxList
		},
		//特价审批
		barginPriceList_getter:(state)=>{
			return state.barginPriceList
		},
		//原纸审批
		originalPapersList_getter:(state)=>{
			return state.originalPapersList
		},
		//辅料审批
		materialList_getter:(state)=>{
			return state.materialList
		}
	},
	mutations:{
		//纸箱审批-存储
		setBoxList(state,data){
			state.boxList =data
		    uni.setStorageSync("boxList",JSON.stringify(data)) 
		},
		//特价审批-存储
		setBarginPriceList(state,data){
			state.barginPriceList =data
		    uni.setStorageSync("barginPriceList",JSON.stringify(data)) 
		},
		//原纸审批-存储
		setOriginalPapersList(state,data){
			state.originalPapersList =data
		    uni.setStorageSync("originalPapersList",JSON.stringify(data)) 
		},
		//辅料审批-存储
		setMaterialList(state,data){
			state.materialList =data
		    uni.setStorageSync("materialList",JSON.stringify(data)) 
		}
	},
    actions: {
		//獲取通知信息個數
		getNoticeInfoAction({commit},params){
			return new Promise((resolve,reject)=>{
			  try {
				getNoticeInfo(params).then(res=>{
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
				 // console.error(JSON.stringify(err))
				  reject(serverBusyTips)
				})
			  } catch (error) {
				reject(serverBusyTips+error)
			  }
			})
		  },
		// 纸箱审批-数据列表查询
		searchBoxApprovalListAction({commit}){
		  return new Promise((resolve,reject)=>{
		    try {
		      searchBoxApprovalList().then(res=>{
		        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
		        if(data.success)
		        {
				  commit('setBoxList',data.data)
		          resolve(data)
		        }
		        else
		        {
		          reject(data.msg)
		        } 
		      }).catch(err=>{
		        //console.error(JSON.stringify(err))
		        reject(serverBusyTips)
		      })
		    } catch (error) {
		      reject(serverBusyTips+error)
		    }
		  })
		},
		boxDetailApprovalAction({commit},params){
				return new Promise((resolve,reject)=>{
				  try {
				    boxDetailApproval(params).then(res=>{
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

				      reject(serverBusyTips)
				    })
				  } catch (error) {
				    reject(serverBusyTips+error)
				  }
				})
			
		},
		  // 原纸审批-数据列表查询-OK
		searchPODataAction({commit}){
		  return new Promise((resolve,reject)=>{
		    try {
		      searchPOData().then(res=>{
		        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
		        if(data.success)
		        {
				  commit('setOriginalPapersList',data.data)
		          resolve(data)
		        }
		        else
		        {
		          reject(data.msg)
		        } 
		      }).catch(err=>{
		        //console.error(JSON.stringify(err))
		        reject(serverBusyTips)
		      })
		    } catch (error) {
		      reject(serverBusyTips+error)
		    }
		  })
		},
		//查询原纸详细信息
		searchPODetailAction({commit},params){
			return new Promise((resolve,reject)=>{
			  try {
			    searchPODetail(params).then(res=>{
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
		approvePOAction({commit},params){
				return new Promise((resolve,reject)=>{
				  try {
				    approvePO(params).then(res=>{
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
		//查询==辅料审批== 数据列表
		searchProdPOAction({commit}){
		  return new Promise((resolve,reject)=>{
		    try {
		      searchProdPO().then(res=>{
		        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
		        if(data.success)
		        {
				  commit('setMaterialList',data.data)
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
		//辅料过滤查询 
		searchProdPODetailAction({commit},params){
			return new Promise((resolve,reject)=>{
			  try {
			    searchProdPODetail(params).then(res=>{
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
		//辅料--》审批 说明--》提交
		approveProdPoAction({commit},params){
				return new Promise((resolve,reject)=>{
				  try {
				    approveProdPo(params).then(res=>{
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
		//查询特价审批 数据列表
		searchSpecPriceAction({commit}){
				return new Promise((resolve,reject)=>{
				  try {
				    searchSpecPrice().then(res=>{
				      const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
				      if(data.success)
				      {
						commit('setBarginPriceList',data.data)
				        resolve(data)
				      }
				      else
				      {
				        reject(data.msg)
				      } 
				    }).catch(err=>{
				      //console.error(JSON.stringify(err))
				      reject(serverBusyTips)
				    })
				  } catch (error) {
				    reject(serverBusyTips+error)
				  }
				})
			
		},
		//特价--》审批说明--提交
		approvePaperSpecPriceAction({commit},params){
				return new Promise((resolve,reject)=>{
				  try {
				    approvePaperSpecPrice(params).then(res=>{
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
				     // console.error(JSON.stringify(err))
				      reject(serverBusyTips)
				    })
				  } catch (error) {
				    reject(serverBusyTips+error)
				  }
				})
			
		}
	}
  }