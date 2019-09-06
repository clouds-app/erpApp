import config from '@/config'
const baseUrl = config.isRunApp ? config.baseUrl.pro : config.baseUrl.dev


import Request from './request/request'

const axios = new Request()

axios.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = baseUrl /* 根域名不同 */
	config.header = {
		'Content-Type': 'application/x-www-form-urlencoded',
		token:uni.getStorageSync("TOKEN"),
		time: Date.now().toString()
	}
	return config
})

axios.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	config.header = {
		...config.header,
	}
	uni.showLoading({
		mask: true,
		title: '请稍候...'
	})
	/*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
	return config
})

axios.interceptor.response((res) => { /* 请求之后拦截器 */
     uni.hideLoading()
   // console.log(JSON.stringify(res))
   if(res.data.status===10000){
	   uni.showToast({
	       title: '登陆超时，请重新登陆！',
	       duration: 2000
	   });
	   try {
	       uni.removeStorageSync('TOKEN');
	   } catch (e) {
	       // error
	   }
	   uni.navigateTo({
	       url: '../login/login'
	   })
   }
   
	return res
}, (error) => { // 请求错误做点什么
	uni.hideLoading()
	return Promise.reject(error)
})

export default axios