(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"0222":function(t,n,a){"use strict";a.r(n);var e=a("7af0"),u=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,function(){return e[t]})}(c);n["default"]=u.a},"257e":function(t,n,a){},"4f46":function(t,n,a){"use strict";var e=a("257e"),u=a.n(e);u.a},5266:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},u=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return u})},"79d2":function(t,n,a){"use strict";a.r(n);var e=a("5266"),u=a("0222");for(var c in u)"default"!==c&&function(t){a.d(n,t,function(){return u[t]})}(c);a("4f46");var r=a("2877"),o=Object(r["a"])(u["default"],e["a"],e["b"],!1,null,null,null);n["default"]=o.exports},"7af0":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,a=this.bgImage,e="height:".concat(n,"px;padding-top:").concat(t,"px;");return this.bgImage&&(e="".concat(e,"background-image:url(").concat(a,");")),e}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1}),this.$emit("BackPageEvent","")},searchEvent:function(){this.$emit("searchEvent","")}}};n.default=a}).call(this,a("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("79d2"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);                
