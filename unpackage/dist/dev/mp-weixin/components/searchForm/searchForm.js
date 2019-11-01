(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/searchForm/searchForm"],{

/***/ 306:
/*!*************************************************************!*\
  !*** E:/cl_vue/erpApp/components/searchForm/searchForm.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _searchForm_vue_vue_type_template_id_452b77a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchForm.vue?vue&type=template&id=452b77a4& */ 307);
/* harmony import */ var _searchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchForm.vue?vue&type=script&lang=js& */ 309);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _searchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _searchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);





/* normalize component */

var component = Object(_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _searchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _searchForm_vue_vue_type_template_id_452b77a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _searchForm_vue_vue_type_template_id_452b77a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/cl_vue/erpApp/components/searchForm/searchForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 307:
/*!********************************************************************************************!*\
  !*** E:/cl_vue/erpApp/components/searchForm/searchForm.vue?vue&type=template&id=452b77a4& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchForm_vue_vue_type_template_id_452b77a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./searchForm.vue?vue&type=template&id=452b77a4& */ 308);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchForm_vue_vue_type_template_id_452b77a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchForm_vue_vue_type_template_id_452b77a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 308:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/cl_vue/erpApp/components/searchForm/searchForm.vue?vue&type=template&id=452b77a4& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.customerInfo = ""
    }

    _vm.e1 = function($event) {
      _vm.SalesmanSearch.SalesmanItemText = ""
    }

    _vm.e2 = function($event) {
      _vm.SalesmanSearch.isShow = false
    }

    _vm.e3 = function($event) {
      _vm.isShowCustomerList = false
    }

    _vm.e4 = function($event) {
      _vm.isShowProList = false
    }
  }
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 309:
/*!**************************************************************************************!*\
  !*** E:/cl_vue/erpApp/components/searchForm/searchForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./searchForm.vue?vue&type=script&lang=js& */ 310);
/* harmony import */ var _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_searchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 310:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/cl_vue/erpApp/components/searchForm/searchForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

































































































































var _tools = __webpack_require__(/*! @/libs/tools */ 20);
var _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ 153));

var _vuex = __webpack_require__(/*! vuex */ 16);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var wPicker = function wPicker() {return Promise.all(/*! import() | components/w-picker/w-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/w-picker/w-picker")]).then(__webpack_require__.bind(null, /*! @/components/w-picker/w-picker.vue */ 352));};var _default =
{
  name: 'searchForm',
  components: { wPicker: wPicker },
  props: {
    //搜索条件：
    //ct_Type(客户类型)0:全部,1:纸箱,2:纸板,3:蜂窝 多个逗号分开
    customerType: {
      type: String,
      default: '0' } },


  data: function data() {
    return {
      currentFilterType: '', //当前查询类型：周 week 月 month 季 season 是否选择，选中为 primary
      SalesmanSearch: {
        SalesmanItemText: '',
        SalesmanItem: {},
        isShow: false, //是否显示业务员列表
        SalesmanList: [] //业务员列表
      },
      isShowProList: false,
      productTypeText: '纸板',
      productTypeItem: {},
      productType: [{ type: '1', ct_Desc: '纸板' }, { type: '2', ct_Desc: '纸箱' }], //产品类型(1纸板,2纸箱...)
      endYear: (0, _dayjs.default)(Date.now()).format('YYYY'), //当前年份
      CustomBar: this.CustomBar, //uni-app :内置属性，bar :高度
      isShowCustomerList: false, //是否显示客户信息列表
      isShowSearchForm: false, //当前是否打开状态
      customerList: [], //客户列表
      startDate: (0, _dayjs.default)(Date.now()).subtract(1, 'month').format('YYYY-MM-DD'), //开始时间
      endDate: (0, _dayjs.default)(Date.now()).format('YYYY-MM-DD'), //结束时间
      customerInfo: '', //客户信息
      customerItem: {}, //客户信息 对象
      dataType: 'start' //开始时间:start,结束时间:end
    };

  },






  onReady: function onReady() {

  },

  methods: _objectSpread({
    //切換按鈕事件 周 月 季
    handleFilterData: function handleFilterData(type) {
      //debugger
      this.currentFilterType = type;
      switch (type) {
        case 'week':
          this.startDate = (0, _dayjs.default)(Date.now()).startOf('week').format('YYYY-MM-DD');
          this.endDate = (0, _dayjs.default)(Date.now()).format('YYYY-MM-DD');
          break;
        case 'month':
          this.startDate = (0, _dayjs.default)(Date.now()).startOf('month').format('YYYY-MM-DD');
          this.endDate = (0, _dayjs.default)(Date.now()).format('YYYY-MM-DD');
          break;
        case 'season':
          this.startDate = (0, _dayjs.default)(Date.now()).subtract(3, 'month').format('YYYY-MM-DD');
          this.endDate = (0, _dayjs.default)(Date.now()).format('YYYY-MM-DD');
          break;}

    } },
  (0, _vuex.mapActions)(['getSalesmanList_action', 'getCustomerInfo_action', 'getQutationCustomerList_action']), {
    //验证两个输入的日期 是否有效
    checkInputData: function checkInputData() {
      var flag = true;
      var msg = "";
      if (this.startDate == "" || this.endDate == "") {
        msg = "起始/结束日期必填";
        flag = false;
      } else if (this.startDate != "" || this.endDate != "") {
        var date1 = this.stringToDate(this.startDate);
        var date2 = this.stringToDate(this.endDate);
        var diff = (0, _tools.dataDiff)("d", date1, date2);
        if (diff > 730) {
          msg = "时间间隔不能超过2年";
          flag = false;
        }
        if (diff < 0) {
          msg = "结束日期必须大于起始日期";
          flag = false;
        }
      }

      if (msg != "") {
        uni.showToast({
          title: msg,
          icon: 'none',
          duration: 2000 });

      }
      return flag;
    },
    //字符串转日期
    stringToDate: function stringToDate(dateStr, separator) {
      if (!separator) {
        separator = "-";
      }
      var dateArr = dateStr.split(separator);
      var year = parseInt(dateArr[0]);
      var month;
      //处理月份为04这样的情况
      if (dateArr[1].indexOf("0") == 0) {
        month = parseInt(dateArr[1].substring(1));
      } else {
        month = parseInt(dateArr[1]);
      }
      var day = parseInt(dateArr[2]);
      var date = new Date(year, month - 1, day);
      return date;
    },
    getSalesmanList: function getSalesmanList() {var _this = this;
      if (this.SalesmanSearch.SalesmanList.length > 0) {
        return;
      }
      //搜索条件：
      //w_OptType(类型)0:业务员,其它 暂时 没有
      var params = {
        w_OptType: 0 };


      this.getSalesmanList_action(params).then(function (res) {
        //debugger
        _this.SalesmanSearch.SalesmanList = res.records;
      }).catch(function (err) {
        uni.showToast({
          title: '获取业务员列表失败 err:' + err,
          icon: 'none',
          duration: 2000 });

      });
    },
    // loadCustomerList(){
    // 	//debugger
    // 	if(this.customerList.length>0){
    // 		//debugger
    // 		return
    // 	}
    // 	let params ={}
    // 	this.getCustomerInfo_action(params).then(res=>{
    // 		this.customerList =res
    // 	}).catch(err=>{
    // 		uni.showToast({
    // 			title:'获取客户列表失败 err:'+err,
    // 			icon:'none',
    // 			duration:2000
    // 		})
    // 	})
    // },
    loadCustomerList: function loadCustomerList() {var _this2 = this;
      if (this.customerList.length > 0) {
        return;
      }
      //搜索条件：
      //ct_Type(客户类型)0:全部,1:纸箱,2:纸板,3:蜂窝 多个逗号分开
      var params = {
        ct_Type: this.customerType };


      this.getQutationCustomerList_action(params).then(function (res) {
        //debugger
        _this2.customerList = res.records;
      }).catch(function (err) {
        uni.showToast({
          title: '获取客户列表失败 err:' + err,
          icon: 'none',
          duration: 2000 });

      });
    },
    //获取选择的业务员信息
    getSalesmanInfo: function getSalesmanInfo(val) {
      this.SalesmanSearch.isShow = false;
      this.SalesmanSearch.SalesmanItemText = val.w_Name;
      this.SalesmanSearch.SalesmanItem = val;
    },
    //获取选择的客户信息
    getSelectCustomerInfo: function getSelectCustomerInfo(val) {
      this.isShowCustomerList = false;
      this.customerInfo = val.ct_Desc;
      this.customerItem = val;
      //console.warn('currentItem:'+val.ct_ID)
    },
    //获取选择的产品类型信息
    getSelectProtypeInfo: function getSelectProtypeInfo(val) {
      this.isShowProList = false;
      this.productTypeText = val.ct_Desc;
      this.customerItem = val;
      //console.warn('currentItem:'+val.ct_ID)
    },
    //打开客户信息
    openCustomerList: function openCustomerList() {
      this.isShowCustomerList = true;
      this.loadCustomerList();
    },
    //打开业务员列表
    openSalesmanList: function openSalesmanList() {
      this.SalesmanSearch.isShow = true;
      this.getSalesmanList();
    },
    //弹出时间选择器
    openDateSelect: function openDateSelect(type) {
      this.dataType = type;
      this.$refs.DatePicker.show();
    },
    //时间确认-回调事件
    onConfirmDate: function onConfirmDate(val) {
      //console.log('date now:'+ JSON.stringify(val))
      if (this.dataType === 'start') {
        this.startDate = val.result;
      } else {
        this.endDate = val.result;
      }
    },
    //确认搜索-回调事件
    comfirmEvent: function comfirmEvent() {
      //debugger
      if (!this.checkInputData()) {
        return;
      }
      this.isShowSearchForm = false;
      var params = {
        startDate: this.startDate,
        endDate: this.endDate,
        ctCode: this.customerItem.ct_ID === null ? '' : this.customerItem.ct_ID };

      if (this.customerInfo == '') {
        params.ctCode = '';
      }
      this.$emit('comfirmEvent', params);
    },
    cancelEvent: function cancelEvent() {
      this.isShowSearchForm = false;
      this.$emit('cancelEvent', 'cancel');
    },
    //显示搜索框
    open: function open() {
      this.isShowSearchForm = true;
    },
    //关闭搜索框
    close: function close() {
      this.isShowSearchForm = false;
    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/searchForm/searchForm.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/searchForm/searchForm-create-component',
    {
        'components/searchForm/searchForm-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(306))
        })
    },
    [['components/searchForm/searchForm-create-component']]
]);                
