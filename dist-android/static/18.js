webpackJsonp([18],{13:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){if(e.f_state="",e.f_signin_time&&e.f_knockoff_time){var a=e.f_signin_time.substring(11,16),r=e.f_knockoff_time.substring(11,16);a>t&&(e.f_state="迟到"),r<n&&(e.f_state=e.f_state+"早退")}else e.f_state="缺勤";e.f_state||(e.f_state="正常")}function o(){var e=new Date,t=e.getMonth()+1;return e.getFullYear()+"-"+(t<10?"0"+t:t)}function s(){var e=new Date,t=e.getMonth()+1;return e.getFullYear()+(t<10?"0"+t:t)}function f(){var e=new Date,t=e.getMonth()+1,n=e.getDate();return e.getFullYear()+"-"+(t<10?"0"+t:t)+"-"+(n<10?"0"+n:n)}function l(){var e=new Date,t=e.getMonth()+1,n=e.getDate();return e.getFullYear()+""+(t<10?"0"+t:t)+(n<10?"0"+n:n)}function i(){var e=new Date,t=e.getMonth()+1;return[e.getFullYear()+"-"+(t<10?"0"+t:t)+"-01",e.getFullYear()+"-"+(t<10?"0"+t:t)+"-"+new Date(e.getFullYear(),t,0).getDate()]}function c(){var e=new Date,t=e.getMonth()+1,n=e.getDate(),a=e.getHours(),r=e.getMinutes(),o=e.getSeconds();return e.getFullYear()+"-"+(t<10?"0"+t:t)+"-"+(n<10?"0"+n:n)+" "+(a<10?"0"+a:a)+":"+(r<10?"0"+r:r)+":"+(o<10?"0"+o:o)}function d(){var e=new Date,t=e.getMonth()+1,n=e.getDate(),a=e.getHours(),r=e.getMinutes(),o=e.getSeconds();return e.getFullYear()+"-"+(t<10?"0"+t:t)+"-"+(n<10?"0"+n:n)+"T"+(a<10?"0"+a:a)+":"+(r<10?"0"+r:r)+":"+(o<10?"0"+o:o)}function u(e){return new Date(e.substr(0,4),e.substr(5,2)-1,e.substr(8,2),e.substr(11,2),e.substr(14,2),e.substr(17,2))}function p(e){var t=e.getMonth()+1,n=e.getDate(),a=e.getHours(),r=e.getMinutes(),o=e.getSeconds();return e.getFullYear()+"-"+(t<10?"0"+t:t)+"-"+(n<10?"0"+n:n)+"T"+(a<10?"0"+a:a)+":"+(r<10?"0"+r:r)+":"+(o<10?"0"+o:o)}function v(){var e=new Uint16Array(8);window.crypto.getRandomValues(e);var t=function(e){for(var t=e.toString(16);t.length<4;)t="0"+t;return t};return t(e[0])+t(e[1])+t(e[2])+t(e[3])+t(e[4])+t(e[5])+t(e[6])+t(e[7])}function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"请选择";if("view"!=e){var r=[];if(n&&r.push({label:a,value:null}),N.default.param&&N.default.param[t]){var o=N.default.param[t];o.forEach(function(e){r.push({label:e.name,value:e.name})})}else r.push({label:"请在系统设置里更新参数",value:"请在系统设置里更新参数"});return r}N.default.getParams(t,[null])}function m(e){return("number"!=typeof e||0!=e)&&(!e||(e+="",e=e.trim(),!e))}function h(e){return!window.isNaN(e)&&e%1===0}function g(e){return!window.isNaN(e)}function b(e){for(var t in e)e.hasOwnProperty(t)&&("object"==(0,P.default)(e[t])&&null!=e[t]?b(e[t]):"true"!==e[t]&&"false"!=e[t]||(e[t]="true"===e[t]))}function w(e){for(var t in e)t.endsWith("_path")?e[t]?e[t]="rs/db/file/"+e[t]:e[t]="rs/db/file/nopic.png":null!==e[t]&&"object"==(0,P.default)(e[t])&&w(e[t])}function y(e,t){return new j.default(function(n,a){var r=void 0;"css"==e?(r=document.createElement("link"),r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href",t)):"js"==e&&(r=document.createElement("script"),r.setAttribute("type","text/javascript"),r.setAttribute("src",t)),r&&(r.setAttribute("async",""),r.setAttribute("defer",""),r.addEventListener("load",function(){n(r)},!1),r.addEventListener("error",function(){a(r)},!1),document.body.appendChild(r))})}function x(e){return e.substring(10)}function M(e){var t="",n="",a=new Date;t=a.getDay();var r=a.getMonth()+1,o=a.getDate(),s=a.getYear();n=s>200?s:1900+s;var f=["星期日","星期一","星期二","星期三","星期四","星期五","星期日","星期六"];return n+"年"+r+"月"+o+"日  "+f[t]}function D(e,t){var n=new Date(e);n=n.valueOf(),n+=24*t*60*60*1e3,n=new Date(n);var a=n.getMonth()+1,r=n.getDate(),o=n.getHours(),s=n.getMinutes(),f=n.getSeconds();return n.getFullYear()+"-"+(a<10?"0"+a:a)+"-"+(r<10?"0"+r:r)+" "+(o<10?"0"+o:o)+":"+(s<10?"0"+s:s)+":"+(f<10?"0"+f:f)}function S(e){var t=window.location.search,n=e.length,a=t.indexOf(e);if(a===-1)return"";a+=n+1;var r=t.indexOf("&",a);return r===-1?t.substring(a):t.substring(a,r)}function I(e){var t=A(window.location.search.slice(1,window.location.search.length)),n=e.length,a=t.indexOf(e);if(a===-1)return"";a+=n+1;var r=t.indexOf("&",a);return r===-1?t.substring(a):t.substring(a,r)}function C(e){for(var t=String.fromCharCode(e.charCodeAt(0)+e.length),n=1;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)+e.charCodeAt(n-1));return escape(t)}function A(e){e=unescape(e);for(var t=String.fromCharCode(e.charCodeAt(0)-e.length),n=1;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)-t.charCodeAt(n-1));return t}function k(e){var t=(new Date).getTime(),n=new Date(e).getTime(),a=t-n,r=6e4,o=60*r,s=24*o,f=30*s,l=12*f,i="";return a<=2*r?i="刚刚":2*r<a&&a<o?i=Math.floor(a/r)+"分钟前":o<a&&a<=s?i=Math.floor(a/o)+"小时前":s<a&&a<=f?i=Math.floor(a/s)+"天前":f<a&&a<=l?i=Math.floor(a/f)+"个月前":l<a&&(i=Math.floor(a/l)+"年前"),i}function F(e){var t=e.split("-"),n=t[1]-0+1;return t[0]+"-"+(n<10?"0"+n:n)+"-20 00:00:00"}Object.defineProperty(t,"__esModule",{value:!0}),t.f=void 0;var Y=n(10),j=a(Y),O=n(12),P=a(O);t.getAttendanceState=r,t.toStandardYearMonth=o,t.toStandardYearMonth1=s,t.toStandardDateString=f,t.toStandardDateString2=l,t.toStartAndEndDateString=i,t.toStandardTimeString=c,t.to3339TimeString=d,t.parse3339String=u,t.format3339TimeString=p,t.guid=v,t.choices=_,t.required=m,t.isInt=h,t.isFloat=g,t.booleanFilter=b,t.ratifyPics=w,t.loadscript=y,t.orgName=x,t.getNowDate=M,t.addDate=D,t.getUrlParames=S,t.getUrlCompileParames=I,t.compileStr=C,t.uncompileStr=A,t.dateDescripte=k,t.nextMonth20=F;var T=n(1),N=a(T);t.f=void 0},370:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),s=r(o),f=n(2),l=r(f),i=n(7),c=r(i),d=n(3),u=n(13),p=a(u);t.default={title:"预交费",props:["selectdata"],data:function(){return{preparationfee_datas:[],show:!1,addItem:{f_preparation_fee:0,f_payfee_way:{},f_payfee_remarks:""}}},ready:function(){this.load()},methods:{check:function(){var e=/^[+]?\d+(\.\d+)?$/;return!!e.test(this.addItem.f_preparation_fee)||(this.$showMessage("请输入数字"),this.addItem.f_preparation_fee="",!1)},smalltoBIG:function(e){var t=["角","分"],n=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],a=[["元","万","亿"],["","拾","佰","仟"]],r=e<0?"欠":"";e=Math.abs(e);for(var o="",s=0;s<t.length;s++)o+=(n[Math.floor(10*e*Math.pow(10,s))%10]+t[s]).replace(/零./,"");o=o||"整",e=Math.floor(e);for(var s=0;s<a[0].length&&e>0;s++){for(var f="",l=0;l<a[1].length&&e>0;l++)f=n[e%10]+a[1][l]+f,e=Math.floor(e/10);o=f.replace(/(零.)*零$/,"").replace(/^$/,"零")+a[0][s]+o}return r+o.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},load:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(l.default.mark(function e(){var t,n,a;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.HttpResetClass,n={tablename:"t_preparationfee",condition:"processid = '"+this.selectdata.f_process_id+"'"},e.next=4,t.load("POST","rs/sql/singleTable",{data:n},{resolveMsg:null,rejectMsg:"获取材料信息失败"});case 4:a=e.sent,this.preparationfee_datas=[],this.preparationfee_datas=a.data;case 7:case"end":return e.stop()}},e,this)}));return e}(),add:function(){this.show=!0},confirm:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(l.default.mark(function e(){var t,n=this;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.check()!==!1){e.next=2;break}return e.abrupt("return");case 2:return this.addItem.f_date=p.toStandardTimeString(),this.addItem.f_payfee_way="object"===(0,s.default)(this.addItem.f_payfee_way)?this.addItem.f_payfee_way[0]:"",this.addItem.processid=this.selectdata.f_process_id,this.addItem.applyid=this.selectdata.f_apply_num,this.addItem.f_operator=this.$login.f.name,this.addItem.f_department=this.$login.f.f_parentname,this.addItem.f_filiale=this.$login.f.f_fengongsi,this.preparationfee_datas.push(this.addItem),t=new d.HttpResetClass,e.next=13,t.load("POST","rs/logic/saveentity",{data:{tablename:"t_preparationfee",parameters:this.addItem}},{resolveMsg:null,rejectMsg:"添加失败"}).then(function(e){n.close()});case 13:case"end":return e.stop()}},e,this)}));return e}(),close:function(){this.show=!1,this.addItem={f_preparation_fee:0,f_payfee_way:{},f_payfee_remarks:""}}},computed:{getCapital:function(){return this.addItem.f_preparation_fee&&(this.addItem.f_capital=this.smalltoBIG(Number(this.addItem.f_preparation_fee))),this.addItem.f_capital},sum:function(){for(var e=0,t=0;t<this.preparationfee_datas.length;t++)e+=Number(this.preparationfee_datas[t].f_preparation_fee);return e},jiaofei:function(){return this.$appdata.getParam("缴费类型")}}}},503:function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"textarea[_v-354f9fe8]{width:74.5%}","",{version:3,sources:["/./src/components/product/Function/functions/PreparationFee.vue"],names:[],mappings:"AA2NA,sBACE,WAAa,CACd",file:"PreparationFee.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ntextarea[_v-354f9fe8] {\n  width: 74.5%;\n}\n"],sourceRoot:"webpack://"}])},583:function(e,t,n){var a=n(503);"string"==typeof a&&(a=[[e.id,a,""]]);n(5)(a,{});a.locals&&(e.exports=a.locals)},779:function(e,t){e.exports=' <div class=col-sm-12 style="height: auto" _v-354f9fe8=""> <div class="auto select-overspread" _v-354f9fe8=""> <div class="panel panel-info" _v-354f9fe8=""> <div class="panel-heading auto" _v-354f9fe8=""> <h3 class=panel-title _v-354f9fe8="">预付款</h3> </div> </div> </div> <div class=col-sm-12 style="height: auto" _v-354f9fe8=""> <span class=col-sm-1 _v-354f9fe8=""></span> <span class=col-sm-3 _v-354f9fe8="">预缴款总金额:{{sum}}元</span> <button type=button class="btn btn-warning col-sm-offset-3" @click=add() _v-354f9fe8="">添加预缴款</button> </div> <div class=col-sm-12 style="height: auto;border:1px solid #000;padding-top: 10px" v-for="row in preparationfee_datas" _v-354f9fe8=""> <div class=col-sm-12 _v-354f9fe8=""> <div class="form-group col-sm-3 form-input-group" _v-354f9fe8=""> <label class=control-label _v-354f9fe8="">预缴款金额(元)：</label> <div class=col-sm-6 _v-354f9fe8=""> <input class=form-control type=text v-model=row.f_preparation_fee readonly="" _v-354f9fe8=""> </div> </div> <div class="form-group col-sm-3 form-input-group" _v-354f9fe8=""> <label class=control-label _v-354f9fe8="">金额大写：</label> <div class=col-sm-6 _v-354f9fe8=""> <input class=form-control type=text v-model=row.f_capital readonly="" _v-354f9fe8=""> </div> </div> <div class="form-group col-sm-3 form-input-group" _v-354f9fe8=""> <label class=control-label _v-354f9fe8="">缴费类型：</label> <div class=col-sm-6 _v-354f9fe8=""> <input class=form-control type=text v-model=row.f_payfee_way readonly="" _v-354f9fe8=""> </div> </div> </div> <div class=col-sm-12 _v-354f9fe8=""> <div class="form-group col-sm-3 form-input-group" _v-354f9fe8=""> <label class=control-label _v-354f9fe8="">日期：</label> <div class=col-sm-6 _v-354f9fe8=""> <input class=form-control type=text v-model=row.f_date readonly="" _v-354f9fe8=""> </div> </div> <div class="form-group col-sm-3 form-input-group" _v-354f9fe8=""> <label class=control-label _v-354f9fe8="">操作人：</label> <div class=col-sm-6 _v-354f9fe8=""> <input class=form-control type=text v-model=row.f_operator readonly="" _v-354f9fe8=""> </div> </div> </div> <div class="form-group col-sm-12 form-input-group" _v-354f9fe8=""> <label class=control-label _v-354f9fe8="">备注：</label> <div class=col-sm-5 _v-354f9fe8=""> <textarea class=form-control v-model=row.f_payfee_remarks rows=2 readonly="" _v-354f9fe8=""></textarea> </div> </div> </div> <modal :show.sync=show v-ref:modal="" backdrop=false _v-354f9fe8=""> <header slot=modal-header class=modal-header _v-354f9fe8=""> <button type=button class=close @click=close _v-354f9fe8=""><span _v-354f9fe8="">×</span></button> <h4 class=modal-title _v-354f9fe8="">新增预交费</h4> </header> <article slot=modal-body class=modal-body _v-354f9fe8=""> <div class=from-group _v-354f9fe8=""> <label _v-354f9fe8="">预缴款金额(元)</label> <input type=text class=form-control v-model=addItem.f_preparation_fee _v-354f9fe8=""> </div> <div class=form-group _v-354f9fe8=""> <label class=control-label _v-354f9fe8="">金额大写：</label> <input class=form-control type=text v-model=getCapital readonly="" _v-354f9fe8=""> </div> <div class=from-group _v-354f9fe8=""> <label _v-354f9fe8="">缴费类型</label> <v-select :options=jiaofei v-model=addItem.f_payfee_way :value.sync=addItem.f_payfee_way close-on-select="" _v-354f9fe8=""> </v-select> </div> <div class=from-group _v-354f9fe8=""> <label _v-354f9fe8="">备注</label> <textarea class=form-control v-model=addItem.f_payfee_remarks rows=3 _v-354f9fe8=""></textarea> </div> </article> <footer slot=modal-footer class=modal-footer _v-354f9fe8=""> <button v-show=show type=button class="btn btn-default" @click=close _v-354f9fe8="">取消</button> <button v-show=show type=button class="btn btn-success" @click=confirm _v-354f9fe8="">确认</button> </footer> </modal> </div> '},921:function(e,t,n){var a,r,o={};n(583),a=n(370),r=n(779),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(s.template=r),s.computed||(s.computed={}),Object.keys(o).forEach(function(e){var t=o[e];s.computed[e]=function(){return t}})}});
//# sourceMappingURL=18.js.map