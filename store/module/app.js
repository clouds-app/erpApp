import { setLocalStorage,getLocalStorage,JSONParseLocalStorage} from '@/libs/util'
export default {
    state: {
		//当前选择功能下标
		subIndex:getLocalStorage("subIndex")=='' ? '' :JSONParseLocalStorage("subIndex"),
	  dataSelectedPageTitle:getLocalStorage("dataSelectedPageTitle")=='' ? '' :JSONParseLocalStorage("dataSelectedPageTitle"),
	  dataSelectedList:getLocalStorage("dataSelectedList")=='' ? '' :JSONParseLocalStorage("dataSelectedList"),
	  currentComFactoryChartData:getLocalStorage("currentComFactoryChartData")=='' ? '' :JSONParseLocalStorage("currentComFactoryChartData"),
      currentSelectedMenuIndex: '',
      currentSelectedFooterMenu: '',
    },
    //获取：this.$store.getters.currentSelectedMenu_getter
    getters:{
		//当前选择功能下标
		subIndex_getter:(state)=>{
		    return state.subIndex
		},
		//数据选择列表 缓存数据==>页面标题
		dataSelectedPageTitle_getter:(state)=>{
		    return state.dataSelectedPageTitle
		},
		//数据选择列表 缓存数据
		dataSelectedList_getter:(state)=>{
		    return state.dataSelectedList
		},
		currentComFactoryChartData_getter:(state)=>{
		    return state.currentComFactoryChartData
		},
        currentSelectedMenu_getter:(state)=>{
            if(state.currentSelectedFooterMenu==''){
                return 'index'
            }
            return state.currentSelectedFooterMenu
        },
        currentSelectedMenuIndex_getter:(state)=>{
            if(state.currentSelectedMenuIndex==null || state.currentSelectedMenuIndex=='undefined'){
                return 0
            }
            return state.currentSelectedMenuIndex
        }
    },
    //设置：this.$store.commit('setCurrentSelectdMenu',data)
    mutations: {
		//当前选择功能下标
		setSubIndex(state, data) {
		  state.subIndex = data
				uni.setStorageSync("subIndex",JSON.stringify(data)) 
		},
		//数据选择列表 ==>页面标题
		setDataSelectedPageTitle(state, data) {
		  state.dataSelectedPageTitle = data
				uni.setStorageSync("dataSelectedPageTitle",JSON.stringify(data)) 
		},
		//保存数据列表选择数据
		setDataSelectedList(state, data) {
		  state.dataSelectedList = data
				uni.setStorageSync("dataSelectedList",JSON.stringify(data)) 
		},
		setCurrentComFactoryChartData(state, data) {
		  state.currentComFactoryChartData = data
				uni.setStorageSync("currentComFactoryChartData",JSON.stringify(data)) 
		     
		},
      setCurrentSelectdFooterMenu(state, data) {
        state.currentSelectedFooterMenu = data
		uni.setStorageSync("currentSelectedFooterMenu",JSON.stringify(data)) 
     
      },
      setCurrentSelectdMenuIndex(state, data) {
        state.currentSelectedMenuIndex = data
		uni.setStorageSync("currentSelectedMenuIndex",JSON.stringify(data)) 
     
      },
    },
    actions: {}

  }