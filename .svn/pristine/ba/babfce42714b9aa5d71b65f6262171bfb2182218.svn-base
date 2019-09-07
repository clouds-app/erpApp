import Request from './request/request'

const http = new Request()

http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = 'http://www.bbb.cn' /* 根域名不同 */
	config.header = {
		a: 1,
		b: 2
	}
	return config
})

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	config.header = {
		...config.header,
		b: 1
	}
	/*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
	return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
	return response
}, (response) => { // 请求错误做点什么
	return response
})

export {
	http
}







// //公共js,以及基本方法封装 nvue里使用
// const fetch = {
// 	interfaceUrl: function() {
// 		//接口地址
// 		return "http://shop.szclsoft.com";
// 	},
// 	toast: function(tips) {
// 		uni.showToast({
// 			title: tips || "出错啦~",
// 			icon: 'none',
// 			duration: 2000
// 		})
// 	},
// 	request: function(url, postData, method, type, showLoading) {
// 		//接口请求
// 		if (showLoading) {
// 			uni.showLoading({
// 				mask: true,
// 				title: '请稍候...'
// 			})
// 		}
// 		const token = postData.token || "";
// 		delete postData["token"]
// 		const params = {
// 			data: method === "POST" ? postData : JSON.stringify(postData)
// 		}
// 		return new Promise((resolve, reject) => {
// 			uni.request({
// 				url: fetch.interfaceUrl() + url,
// 				data: method === "POST" ? JSON.stringify(params) : params,
// 				header: {
// 					'content-type': type ? 'application/x-www-form-urlencoded' : 'application/json',
// 					'authorization': token,
// 					'security': "1"
// 				},
// 				method: method, //'GET','POST'
// 				dataType: 'json',
// 				success: (res) => {
// 					showLoading && uni.hideLoading()
// 					resolve(res.data)
// 				},
// 				fail: (res) => {
// 					fetch.toast("网络不给力，请稍后再试~")
// 					reject(res)
// 				}
// 			})
// 		})
// 	}
// }
// 
// module.exports = {
// 	request: fetch.request,
// 	toast: fetch.toast
// }
// 