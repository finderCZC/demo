webpackJsonp([1],{"6rku":function(n,e,t){"use strict";function o(n){t("GGxS")}Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{ruleForm:{id:"142419602237857542",password:""},rules:{id:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!1,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(n){var e=this;e.$refs[n].validate(function(n){if(!n)return console.log("error submit!!"),!1;e.$axios({method:"post",url:"http://192.168.18.205/exam-api/login",data:{id:e.ruleForm.id,password:e.ruleForm.password},transformRequest:[function(n){var e="";for(var t in n)e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){e.$router.push("/manage")}).catch(function(n){console.log(n)})})}}},i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"login-wrap"},[t("div",{staticClass:"ms-title"},[n._v("后台管理系统")]),n._v(" "),t("div",{staticClass:"ms-login"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:n.ruleForm,rules:n.rules,"label-width":"0px"}},[t("el-form-item",{attrs:{prop:"id"}},[t("el-input",{attrs:{placeholder:"id"},model:{value:n.ruleForm.id,callback:function(e){n.$set(n.ruleForm,"id",e)},expression:"ruleForm.id"}})],1),n._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"password"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.submitForm("ruleForm")}},model:{value:n.ruleForm.password,callback:function(e){n.$set(n.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),n._v(" "),t("div",{staticClass:"login-btn"},[t("el-button",{attrs:{type:"primary"},on:{click:function(e){n.submitForm("ruleForm")}}},[n._v("登录")])],1)],1)],1)])},a=[],s={render:i,staticRenderFns:a},l=s,A=t("Mw9A"),p=o,u=A(r,l,!1,p,"data-v-7be8c370",null);e.default=u.exports},GGxS:function(n,e,t){var o=t("aO6e");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("8bSs")("3467863c",o,!0)},aO6e:function(n,e,t){e=n.exports=t("BkJT")(!0),e.push([n.i,"\n.login-wrap[data-v-7be8c370]{\n    position: relative;\n    width:100%;\n    height:100%;\n}\n.ms-title[data-v-7be8c370]{\n    position: absolute;\n    top:50%;\n    width:100%;\n    margin-top: -230px;\n    text-align: center;\n    font-size:30px;\n    color: #fff;\n}\n.ms-login[data-v-7be8c370]{\n    position: absolute;\n    left:50%;\n    top:50%;\n    width:300px;\n    height:160px;\n    margin:-150px 0 0 -190px;\n    padding:40px;\n    border-radius: 5px;\n    background: #fff;\n}\n.login-btn[data-v-7be8c370]{\n    text-align: center;\n}\n.login-btn button[data-v-7be8c370]{\n    width:100%;\n    height:36px;\n}\n","",{version:3,sources:["E:/czc/ksVue/ks/src/components/public/login.vue"],names:[],mappings:";AACA;IACI,mBAAmB;IACnB,WAAW;IACX,YAAY;CACf;AACD;IACI,mBAAmB;IACnB,QAAQ;IACR,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,YAAY;CACf;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;CACpB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,WAAW;IACX,YAAY;CACf",file:"login.vue",sourcesContent:["\n.login-wrap[data-v-7be8c370]{\n    position: relative;\n    width:100%;\n    height:100%;\n}\n.ms-title[data-v-7be8c370]{\n    position: absolute;\n    top:50%;\n    width:100%;\n    margin-top: -230px;\n    text-align: center;\n    font-size:30px;\n    color: #fff;\n}\n.ms-login[data-v-7be8c370]{\n    position: absolute;\n    left:50%;\n    top:50%;\n    width:300px;\n    height:160px;\n    margin:-150px 0 0 -190px;\n    padding:40px;\n    border-radius: 5px;\n    background: #fff;\n}\n.login-btn[data-v-7be8c370]{\n    text-align: center;\n}\n.login-btn button[data-v-7be8c370]{\n    width:100%;\n    height:36px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=1.6d93cd7ccc3dbdce5973.js.map