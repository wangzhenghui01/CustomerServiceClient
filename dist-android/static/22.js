webpackJsonp([22],{13:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){if(e.f_state="",e.f_signin_time&&e.f_knockoff_time){var o=e.f_signin_time.substring(11,16),r=e.f_knockoff_time.substring(11,16);o>t&&(e.f_state="迟到"),r<n&&(e.f_state=e.f_state+"早退")}else e.f_state="缺勤";e.f_state||(e.f_state="正常")}function a(){var e=new Date,t=e.getMonth()+1;return e.getFullYear()+"-"+(t<10?"0"+t:t)}function s(){var e=new Date,t=e.getMonth()+1;return e.getFullYear()+(t<10?"0"+t:t)}function l(){var e=new Date,t=e.getMonth()+1,n=e.getDate();return e.getFullYear()+"-"+(t<10?"0"+t:t)+"-"+(n<10?"0"+n:n)}function i(){var e=new Date,t=e.getMonth()+1,n=e.getDate();return e.getFullYear()+""+(t<10?"0"+t:t)+(n<10?"0"+n:n)}function d(){var e=new Date,t=e.getMonth()+1;return[e.getFullYear()+"-"+(t<10?"0"+t:t)+"-01",e.getFullYear()+"-"+(t<10?"0"+t:t)+"-"+new Date(e.getFullYear(),t,0).getDate()]}function u(){var e=new Date,t=e.getMonth()+1,n=e.getDate(),o=e.getHours(),r=e.getMinutes(),a=e.getSeconds();return e.getFullYear()+"-"+(t<10?"0"+t:t)+"-"+(n<10?"0"+n:n)+" "+(o<10?"0"+o:o)+":"+(r<10?"0"+r:r)+":"+(a<10?"0"+a:a)}function c(){var e=new Date,t=e.getMonth()+1,n=e.getDate(),o=e.getHours(),r=e.getMinutes(),a=e.getSeconds();return e.getFullYear()+"-"+(t<10?"0"+t:t)+"-"+(n<10?"0"+n:n)+"T"+(o<10?"0"+o:o)+":"+(r<10?"0"+r:r)+":"+(a<10?"0"+a:a)}function f(e){return new Date(e.substr(0,4),e.substr(5,2)-1,e.substr(8,2),e.substr(11,2),e.substr(14,2),e.substr(17,2))}function m(e){var t=e.getMonth()+1,n=e.getDate(),o=e.getHours(),r=e.getMinutes(),a=e.getSeconds();return e.getFullYear()+"-"+(t<10?"0"+t:t)+"-"+(n<10?"0"+n:n)+"T"+(o<10?"0"+o:o)+":"+(r<10?"0"+r:r)+":"+(a<10?"0"+a:a)}function p(){var e=new Uint16Array(8);window.crypto.getRandomValues(e);var t=function(e){for(var t=e.toString(16);t.length<4;)t="0"+t;return t};return t(e[0])+t(e[1])+t(e[2])+t(e[3])+t(e[4])+t(e[5])+t(e[6])+t(e[7])}function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"请选择";if("view"!=e){var r=[];if(n&&r.push({label:o,value:null}),O.default.param&&O.default.param[t]){var a=O.default.param[t];a.forEach(function(e){r.push({label:e.name,value:e.name})})}else r.push({label:"请在系统设置里更新参数",value:"请在系统设置里更新参数"});return r}O.default.getParams(t,[null])}function v(e){return("number"!=typeof e||0!=e)&&(!e||(e+="",e=e.trim(),!e))}function h(e){return!window.isNaN(e)&&e%1===0}function g(e){return!window.isNaN(e)}function b(e){for(var t in e)e.hasOwnProperty(t)&&("object"==(0,F.default)(e[t])&&null!=e[t]?b(e[t]):"true"!==e[t]&&"false"!=e[t]||(e[t]="true"===e[t]))}function y(e){for(var t in e)t.endsWith("_path")?e[t]?e[t]="rs/db/file/"+e[t]:e[t]="rs/db/file/nopic.png":null!==e[t]&&"object"==(0,F.default)(e[t])&&y(e[t])}function x(e,t){return new H.default(function(n,o){var r=void 0;"css"==e?(r=document.createElement("link"),r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href",t)):"js"==e&&(r=document.createElement("script"),r.setAttribute("type","text/javascript"),r.setAttribute("src",t)),r&&(r.setAttribute("async",""),r.setAttribute("defer",""),r.addEventListener("load",function(){n(r)},!1),r.addEventListener("error",function(){o(r)},!1),document.body.appendChild(r))})}function w(e){return e.substring(10)}function M(e){var t="",n="",o=new Date;t=o.getDay();var r=o.getMonth()+1,a=o.getDate(),s=o.getYear();n=s>200?s:1900+s;var l=["星期日","星期一","星期二","星期三","星期四","星期五","星期日","星期六"];return n+"年"+r+"月"+a+"日  "+l[t]}function j(e,t){var n=new Date(e);n=n.valueOf(),n+=24*t*60*60*1e3,n=new Date(n);var o=n.getMonth()+1,r=n.getDate(),a=n.getHours(),s=n.getMinutes(),l=n.getSeconds();return n.getFullYear()+"-"+(o<10?"0"+o:o)+"-"+(r<10?"0"+r:r)+" "+(a<10?"0"+a:a)+":"+(s<10?"0"+s:s)+":"+(l<10?"0"+l:l)}function k(e){var t=window.location.search,n=e.length,o=t.indexOf(e);if(o===-1)return"";o+=n+1;var r=t.indexOf("&",o);return r===-1?t.substring(o):t.substring(o,r)}function A(e){var t=$(window.location.search.slice(1,window.location.search.length)),n=e.length,o=t.indexOf(e);if(o===-1)return"";o+=n+1;var r=t.indexOf("&",o);return r===-1?t.substring(o):t.substring(o,r)}function D(e){for(var t=String.fromCharCode(e.charCodeAt(0)+e.length),n=1;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)+e.charCodeAt(n-1));return escape(t)}function $(e){e=unescape(e);for(var t=String.fromCharCode(e.charCodeAt(0)-e.length),n=1;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)-t.charCodeAt(n-1));return t}function S(e){var t=(new Date).getTime(),n=new Date(e).getTime(),o=t-n,r=6e4,a=60*r,s=24*a,l=30*s,i=12*l,d="";return o<=2*r?d="刚刚":2*r<o&&o<a?d=Math.floor(o/r)+"分钟前":a<o&&o<=s?d=Math.floor(o/a)+"小时前":s<o&&o<=l?d=Math.floor(o/s)+"天前":l<o&&o<=i?d=Math.floor(o/l)+"个月前":i<o&&(d=Math.floor(o/i)+"年前"),d}function C(e){var t=e.split("-"),n=t[1]-0+1;return t[0]+"-"+(n<10?"0"+n:n)+"-20 00:00:00"}Object.defineProperty(t,"__esModule",{value:!0}),t.f=void 0;var q=n(10),H=o(q),Y=n(12),F=o(Y);t.getAttendanceState=r,t.toStandardYearMonth=a,t.toStandardYearMonth1=s,t.toStandardDateString=l,t.toStandardDateString2=i,t.toStartAndEndDateString=d,t.toStandardTimeString=u,t.to3339TimeString=c,t.parse3339String=f,t.format3339TimeString=m,t.guid=p,t.choices=_,t.required=v,t.isInt=h,t.isFloat=g,t.booleanFilter=b,t.ratifyPics=y,t.loadscript=x,t.orgName=w,t.getNowDate=M,t.addDate=j,t.getUrlParames=k,t.getUrlCompileParames=A,t.compileStr=D,t.uncompileStr=$,t.dateDescripte=S,t.nextMonth20=C;var P=n(1),O=o(P);t.f=void 0},335:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),s=r(a),l=n(6),i=r(l),d=n(1),u=r(d),c=n(13),f=o(c),m=n(8),p=r(m),_=s.default.mark(function e(t){var n,o,r;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={model:{f_processid:t.model.f_process_id},loginUser:{id:u.default.user.id,name:u.default.user.name,ename:u.default.user.ename},employeetemplate:t.employeetemplate,subdep:"提交"},o={tablename:"t_apply",parameters:t.model,param:n},e.next=4,t.$androidUtil.bzLogic("uploadapply",o);case 4:if(r=e.sent,console.log("上传返回json>>>>>>>>>>>> "+(0,i.default)(r)),r){e.next=9;break}return t.$showMessage("上传失败！"),e.abrupt("return");case 9:if(200==r.code){e.next=12;break}return t.$showMessage("上传失败，原因:"+r.msg),e.abrupt("return");case 12:t.$showMessage("上传成功！"),t.updateState(),t.$parent.$back();case 15:case"end":return e.stop()}},e,this)});t.default={title:"竣工验收",props:{model:{type:Object,f_completed_date:"",f_completed_department:"",f_completed_operator:""}},data:function(){return{signType:{type:Boolean,default:!0}}},methods:{validPageData:function(){return this.model.f_constructionunit_name&&""!=this.model.f_constructionunit_name.trim()?this.model.f_constructionunit_date&&""!=this.model.f_constructionunit_date.trim()?this.model.f_install_name&&""!=this.model.f_install_name.trim()?this.model.f_designunit_name&&""!=this.model.f_designunit_name.trim()?this.model.f_designunit_date&&""!=this.model.f_designunit_date.trim()?this.model.f_buildunit_name&&""!=this.model.f_buildunit_name.trim()?this.model.f_buildunit_date&&""!=this.model.f_buildunit_date.trim()?this.model.f_supervisionunit_name&&""!=this.model.f_supervisionunit_name.trim()?this.model.f_upervisionunit_date&&""!=this.model.f_upervisionunit_date.trim()?!(!this.model.f_project_enddate||""==this.model.f_project_enddate.trim())||(this.$showMessage("实际竣工日期不能为空"),!1):(this.$showMessage("监理部门签字日期不能为空"),!1):(this.$showMessage("监理部门签字人不能为空"),!1):(this.$showMessage("建设部门签字日期不能为空"),!1):(this.$showMessage("建设部门签字人不能为空"),!1):(this.$showMessage("设计部门签字日期不能为空"),!1):(this.$showMessage("设计部门签字人不能为空"),!1):(this.$showMessage("安装人员不能为空"),!1):(this.$showMessage("施工部门签字日期不能为空"),!1):(this.$showMessage("施工部门签字人不能为空"),!1)},upload:function(){if(this.validPageData()){this.model.f_app_upload="已完成",console.log("前台开始本地保存，传入数据json>>>>>>>"+(0,i.default)(this.model));var e=this.$androidUtil.bzLogic("saveapplyforapp",{parameters:this.model});if(200!=e.code)return void this.$showMessage("保存失败,上传终止！");var t=_(this);(0,p.default)(t)}},mute:function(){HostApp.mute()},updateState:function(){console.log("前台上传完成，开始回写本地上传状态"),this.model.f_app_upload="已上传",this.$androidUtil.bzLogic("saveapplyforapp",{parameters:this.model})},save:function(){if(this.validPageData()){this.model.f_app_upload="已完成",console.log("前台开始本地保存，传入数据json>>>>>>>"+(0,i.default)(this.model));var e=this.$androidUtil.bzLogic("saveapplyforapp",{parameters:this.model});console.log("前台保存结束，返回res>>>>>>>"+(0,i.default)(e)),200==e.code?(console.log("前台保存成功!"),this.$showMessage("保存成功！")):(console.log("前台保存失败"),this.$showMessage("保存失败！"))}}},ready:function(){this.model&&this.model.f_completed_date&&(this.model.f_completed_date=f.toStandardTimeString()),(navigator.userAgent.match("iPad")||navigator.userAgent.match("iPhone"))&&(this.signType=!1),this.model&&this.model.f_single_man&&(this.model.f_single_man=this.f_single_man),u.default.user&&(console.log("获取到Vue.user"),this.model.f_completed_department=u.default.user.f_parentname,this.model.f_completed_operator=u.default.user.name)},watch:{"model.f_check_outdoorsproject":function(e){e?this.model.f_check_outdoorsproject=1:this.model.f_check_outdoorsproject=0},"model.f_check_indoorproject":function(e){e?this.model.f_check_indoorproject=1:this.model.f_check_indoorproject=0}}}},487:function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".radius_btn{border-radius:5px;margin-top:.1rem}","",{version:3,sources:["/./src/components/app_apply/Acceptance.vue"],names:[],mappings:"AAoSA,YACE,kBAAoB,AACpB,gBAAmB,CACpB",file:"Acceptance.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.radius_btn{\n  border-radius:  5px;\n  margin-top: 0.1rem;\n}\n\n"],sourceRoot:"webpack://"}])},558:function(e,t,n){var o=n(487);"string"==typeof o&&(o=[[e.id,o,""]]);n(5)(o,{});o.locals&&(e.exports=o.locals)},729:function(e,t){e.exports=' <div class="select-overspread repair-bg auto"> <validator name=v> <div class="auto repair-info-content compatible"> <div class="row auto"> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group mg8" :class="[$v.f_constructionunit_name.required ? \'has-error\': \'\']"> <label class="text-justify lb-left" for=f_constructionunit_name>施工部门签字人：</label> <input type=text class=form-control id=f_constructionunit_name v-model=model.f_constructionunit_name v-validate:f_constructionunit_name="{required: true }"> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group" :class="[$v.f_constructionunit_date.required ? \'has-error\': \'\']"> <label class="text-justify lb-left" for=costmatter>施工部门签字日期：</label> <datepicker v-validate:f_constructionunit_name="{required: true }" :value.sync=model.f_constructionunit_date :disabled-days-of-week=[] :format="\'yyyy-MM-dd HH:mm:ss\'" v-model=model.f_constructionunit_date :show-reset-button=reset placeholder=请输入签字日期 style="margin-bottom: 8px"> </datepicker> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group" :class="[$v.f_install_name.required ? \'has-error\': \'\']"> <label class="text-justify lb-left">安装人员：</label> <input type=text class=form-control v-model=model.f_install_name v-validate:f_install_name="{required: true }"/> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group" :class="[$v.f_designunit_name.required ? \'has-error\': \'\']"> <label class="text-justify lb-left">设计部门签字人：</label> <input type=text class=form-control v-model=model.f_designunit_name v-validate:f_designunit_name="{required: true }"/> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group" :class="[$v.dunitdate.required ? \'has-error\' : \'\' ]"> <label class="text-justify lb-left">设计部门签字日期：</label> <datepicker :value.sync=model.f_designunit_date :disabled-days-of-week=[] :format="\'yyyy-MM-dd HH:mm:ss\'" v-model=model.f_designunit_date :show-reset-button=reset placeholder=请输入设计单位签字日期 style="margin-bottom: 8px"> </datepicker> </div> <div class="col-xs-12 col-sm-12 col-md-6 form-input-group"> <input type=checkbox class="" id=f_check_indoorproject v-model=model.f_check_indoorproject v-validate:f_check_indoorproject="{required: true }"/> <label for=f_check_indoorproject class="text-justify lb-left">户内工程是否验收通过</label> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group" :class="[$v.f_buildunit_name.required ? \'has-error\': \'\']"> <label class="text-justify lb-left">建设部门签字人：</label> <input type=text class=form-control v-model=model.f_buildunit_name v-validate:f_buildunit_name="{required: true }"/> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group"> <label class="text-justify lb-left">建设部门签字日期：</label> <datepicker :value.sync=model.f_buildunit_date :disabled-days-of-week=[] :format="\'yyyy-MM-dd HH:mm:ss\'" v-model=model.f_buildunit_date :show-reset-button=reset placeholder=请输入建设单位签字日期 style="margin-bottom: 8px"> </datepicker> </div> <div class="col-xs-12 col-sm-12 col-md-6 form-input-group"> <input type=checkbox class="" id=f_check_outdoorsproject v-model=model.f_check_outdoorsproject v-validate:f_check_outdoorsproject="{required: true }"/> <label for=f_check_outdoorsproject class="text-justify lb-left">庭院工程是否验收通过</label> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group" :class="[$v.f_supervisionunit_name.required ? \'has-error\': \'\']"> <label class="text-justify lb-left">监理部门签字人：</label> <input type=text class=form-control v-model=model.f_supervisionunit_name v-validate:f_supervisionunit_name="{required: true }"/> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group" :class="[$v.dunitdate.required ? \'has-error\' : \'\' ]"> <label class="text-justify lb-left">监理部门签字日期：</label> <datepicker :value.sync=model.f_upervisionunit_date :disabled-days-of-week=[] :format="\'yyyy-MM-dd HH:mm:ss\'" v-model=model.f_upervisionunit_date :show-reset-button=reset placeholder=请输入监理单位签字日期 style="margin-bottom: 8px"> </datepicker> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group" :class="[$v.dunitdate.required ? \'has-error\' : \'\' ]"> <label class="text-justify lb-left">实际竣工日期：</label> <datepicker :value.sync=model.f_project_enddate :disabled-days-of-week=[] :format="\'yyyy-MM-dd HH:mm:ss\'" v-model=model.f_project_enddate :show-reset-button=reset placeholder=请输入实际竣工日期 style="margin-bottom: 8px"> </datepicker> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group"> <label class="text-justify lb-left">验收备注:</label> <textarea class=form-control cols=30 rows=4 style="resize: vertical" v-model=model.f_completed_remarks></textarea> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group"> <label class="text-justify lb-left" for=costmatter>部门:</label> <input type=text class=form-control id=costmatter v-model=model.f_completed_department readonly=readonly /> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group"> <label class="text-justify lb-left" for=costmatter>操作人:</label> <input type=text class=form-control id=costmatter v-model=model.f_completed_operator readonly=readonly /> </div> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group"> <label class="lb-left text-justify">分公司:</label> <input type=text class=form-control v-model=model.f_filiale readonly=readonly /> </div> <div class="col-xs-12 col-sm-6 col-md-6 form-input-group"> <label class="lb-left text-justify">操作日期:</label> <input type=text class=form-control v-model=model.f_completed_date readonly=readonly /> </div> </div> <div style="text-align:center;margin-top: 5px" v-if=model.canedit> <button @click=save type=button class="btn btn-primary radius_btn">保存</button> <button @click=upload type=button class="btn btn-primary radius_btn">上传</button> </div> </validator> </div> '},886:function(e,t,n){var o,r,a={};n(558),o=n(335),r=n(729),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(s.template=r),s.computed||(s.computed={}),Object.keys(a).forEach(function(e){var t=a[e];s.computed[e]=function(){return t}})}});
//# sourceMappingURL=22.js.map