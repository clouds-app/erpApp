(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/searchForm/paperboardSF"],{

/***/ 418:
/*!***************************************************************!*\
  !*** E:/cl_vue/erpApp/components/searchForm/paperboardSF.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paperboardSF_vue_vue_type_template_id_15b8bd45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paperboardSF.vue?vue&type=template&id=15b8bd45& */ 419);
/* harmony import */ var _paperboardSF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paperboardSF.vue?vue&type=script&lang=js& */ 421);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _paperboardSF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _paperboardSF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);





/* normalize component */

var component = Object(_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paperboardSF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paperboardSF_vue_vue_type_template_id_15b8bd45___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paperboardSF_vue_vue_type_template_id_15b8bd45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/cl_vue/erpApp/components/searchForm/paperboardSF.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 419:
/*!**********************************************************************************************!*\
  !*** E:/cl_vue/erpApp/components/searchForm/paperboardSF.vue?vue&type=template&id=15b8bd45& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paperboardSF_vue_vue_type_template_id_15b8bd45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./paperboardSF.vue?vue&type=template&id=15b8bd45& */ 420);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paperboardSF_vue_vue_type_template_id_15b8bd45___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paperboardSF_vue_vue_type_template_id_15b8bd45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 420:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/cl_vue/erpApp/components/searchForm/paperboardSF.vue?vue&type=template&id=15b8bd45& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.paperQuality = ""
    }

    _vm.e1 = function($event) {
      _vm.paperWide = ""
    }

    _vm.e2 = function($event) {
      _vm.paperLong = ""
    }

    _vm.e3 = function($event) {
      _vm.paperNum = ""
    }

    _vm.e4 = function($event) {
      _vm.paperPO = ""
    }

    _vm.e5 = function($event) {
      _vm.isShowOrderTypeList = true
    }

    _vm.e6 = function($event) {
      _vm.isShowCustomerList = false
    }

    _vm.e7 = function($event) {
      _vm.isShowProList = false
    }

    _vm.e8 = function($event) {
      _vm.isShowOrderTypeList = false
    }
  }
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 421:
/*!****************************************************************************************!*\
  !*** E:/cl_vue/erpApp/components/searchForm/paperboardSF.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paperboardSF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./paperboardSF.vue?vue&type=script&lang=js& */ 422);
/* harmony import */ var _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paperboardSF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paperboardSF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paperboardSF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paperboardSF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_F_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paperboardSF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 422:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/cl_vue/erpApp/components/searchForm/paperboardSF.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























































































































































var _tools = __webpack_require__(/*! @/libs/tools */ 20);
var _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ 160));

var _vuex = __webpack_require__(/*! vuex */ 16);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var wPicker = function wPicker() {return Promise.all(/*! import() | components/w-picker/w-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/w-picker/w-picker")]).then(__webpack_require__.bind(null, /*! @/components/w-picker/w-picker.vue */ 435));};var _default =
{
  name: 'searchForm',
  components: { wPicker: wPicker },

  watch: {
    //时刻监控字段
    searchKeyword: function searchKeyword(newVal, oldVal) {
      //debugger
      if (newVal.length == 0) {
        //	debugger
        return this.customerList = this.customerList_filter;
      }
    } },

  data: function data() {
    return {
      paperNum: '', //数量(片)
      paperPO: '', //PO号
      paperLong: '', //纸长
      paperWide: '', //纸宽
      paperQuality: '', //纸质
      paperType: '0', //全部
      isShowProList: false,
      productTypeText: '纸板',
      productTypeItem: {},
      productType: [
      { type: '0', ct_Desc: '全部' },
      { type: '1', ct_Desc: '纸箱' },
      { type: '2', ct_Desc: '纸板' },
      { type: '3', ct_Desc: '蜂窝' }],
      //(客户类型)0:全部,1:纸箱,2:纸板,3:蜂窝 多个逗号分开)
      isShowOrderTypeList: false,
      orderTypeText: '全部',
      orderTypeItem: {},
      orderType: [
      { type: '0', ct_Desc: '全部' },
      { type: '1', ct_Desc: '已完成' },
      { type: '2', ct_Desc: '未完成' }],
      //(客户类型)0:全部,1:纸箱,2:纸板,3:蜂窝 多个逗号分开)
      endYear: (0, _dayjs.default)(Date.now()).format('YYYY'), //当前年份
      CustomBar: this.CustomBar, //uni-app :内置属性，bar :高度
      isShowCustomerList: false, //是否显示客户信息列表
      isShowSearchForm: false, //当前是否打开状态
      customerList: [], //客户列表
      searchKeyword: '', //过滤关键字
      customerList_filter: [], //客户列表
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
    //过滤用户
    filterCustomer: function filterCustomer() {var _this = this;
      if (this.searchKeyword.length > 0) {
        this.customerList = this.customerList.filter(function (item) {
          return item.ct_Desc.includes(_this.searchKeyword);
        });
      } else {
        this.customerList = this.customerList_filter;
      }
    },
    //获取选择的产品类型信息
    getSelectProtypeInfo: function getSelectProtypeInfo(val) {
      this.isShowProList = false;
      this.productTypeText = val.ct_Desc;
      this.productType = val;
    },
    //获取选择的订单类型
    getSelectOrderType: function getSelectOrderType(val) {
      this.isShowOrderTypeList = false;
      this.orderTypeText = val.ct_Desc;
      this.paperType = val.type;
      this.orderTypeItem = val;
    } },
  (0, _vuex.mapActions)(['getCustomerInfo_action']), {
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
    loadCustomerList: function loadCustomerList() {var _this2 = this;
      if (this.customerList.length > 0) {
        return;
      }
      //搜索条件：
      //ct_Type(客户类型)0:全部,1:纸箱,2:纸板,3:蜂窝 多个逗号分开
      var params = {
        ct_Type: '0' };


      this.getQutationCustomerList_action(params).then(function (res) {
        //debugger
        _this2.customerList = res.records;
        _this2.customerList_filter = _toConsumableArray(_this2.customerList);
      }).catch(function (err) {
        uni.showToast({
          title: '获取客户列表失败 err:' + err,
          icon: 'none',
          duration: 2000 });

      });
    },
    //获取选择的客户信息
    getSelectCustomerInfo: function getSelectCustomerInfo(val) {
      this.isShowCustomerList = false;
      this.customerInfo = val.ct_Desc;
      this.customerItem = val;
    },

    //打开客户信息
    openCustomerList: function openCustomerList() {
      this.isShowCustomerList = true;
      this.loadCustomerList();
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
        DateFr: this.startDate,
        DateTo: this.endDate,
        Qty: this.paperNum, //数量(片)
        PO: this.paperPO, //PO号
        SizeL: this.paperLong, //纸长
        SizeW: this.paperWide, //纸宽
        ArtID: this.paperQuality, //纸质
        NoDeli: this.paperType, //全部
        Spec: this.paperWide + '*' + this.paperLong // (规格，未填写的时候，传入空字符串， 格式为 宽*长)
      };
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
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/searchForm/paperboardSF.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/searchForm/paperboardSF-create-component',
    {
        'components/searchForm/paperboardSF-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(418))
        })
    },
    [['components/searchForm/paperboardSF-create-component']]
]);
