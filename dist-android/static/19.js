webpackJsonp([19],{13:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){if(t.f_state="",t.f_signin_time&&t.f_knockoff_time){var i=t.f_signin_time.substring(11,16),o=t.f_knockoff_time.substring(11,16);i>e&&(t.f_state="迟到"),o<n&&(t.f_state=t.f_state+"早退")}else t.f_state="缺勤";t.f_state||(t.f_state="正常")}function r(){var t=new Date,e=t.getMonth()+1;return t.getFullYear()+"-"+(e<10?"0"+e:e)}function s(){var t=new Date,e=t.getMonth()+1;return t.getFullYear()+(e<10?"0"+e:e)}function a(){var t=new Date,e=t.getMonth()+1,n=t.getDate();return t.getFullYear()+"-"+(e<10?"0"+e:e)+"-"+(n<10?"0"+n:n)}function l(){var t=new Date,e=t.getMonth()+1,n=t.getDate();return t.getFullYear()+""+(e<10?"0"+e:e)+(n<10?"0"+n:n)}function c(){var t=new Date,e=t.getMonth()+1;return[t.getFullYear()+"-"+(e<10?"0"+e:e)+"-01",t.getFullYear()+"-"+(e<10?"0"+e:e)+"-"+new Date(t.getFullYear(),e,0).getDate()]}function f(){var t=new Date,e=t.getMonth()+1,n=t.getDate(),i=t.getHours(),o=t.getMinutes(),r=t.getSeconds();return t.getFullYear()+"-"+(e<10?"0"+e:e)+"-"+(n<10?"0"+n:n)+" "+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)+":"+(r<10?"0"+r:r)}function u(){var t=new Date,e=t.getMonth()+1,n=t.getDate(),i=t.getHours(),o=t.getMinutes(),r=t.getSeconds();return t.getFullYear()+"-"+(e<10?"0"+e:e)+"-"+(n<10?"0"+n:n)+"T"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)+":"+(r<10?"0"+r:r)}function d(t){return new Date(t.substr(0,4),t.substr(5,2)-1,t.substr(8,2),t.substr(11,2),t.substr(14,2),t.substr(17,2))}function m(t){var e=t.getMonth()+1,n=t.getDate(),i=t.getHours(),o=t.getMinutes(),r=t.getSeconds();return t.getFullYear()+"-"+(e<10?"0"+e:e)+"-"+(n<10?"0"+n:n)+"T"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)+":"+(r<10?"0"+r:r)}function v(){var t=new Uint16Array(8);window.crypto.getRandomValues(t);var e=function(t){for(var e=t.toString(16);e.length<4;)e="0"+e;return e};return e(t[0])+e(t[1])+e(t[2])+e(t[3])+e(t[4])+e(t[5])+e(t[6])+e(t[7])}function _(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"请选择";if("view"!=t){var o=[];if(n&&o.push({label:i,value:null}),T.default.param&&T.default.param[e]){var r=T.default.param[e];r.forEach(function(t){o.push({label:t.name,value:t.name})})}else o.push({label:"请在系统设置里更新参数",value:"请在系统设置里更新参数"});return o}T.default.getParams(e,[null])}function h(t){return("number"!=typeof t||0!=t)&&(!t||(t+="",t=t.trim(),!t))}function p(t){return!window.isNaN(t)&&t%1===0}function g(t){return!window.isNaN(t)}function b(t){for(var e in t)t.hasOwnProperty(e)&&("object"==(0,j.default)(t[e])&&null!=t[e]?b(t[e]):"true"!==t[e]&&"false"!=t[e]||(t[e]="true"===t[e]))}function y(t){for(var e in t)e.endsWith("_path")?t[e]?t[e]="rs/db/file/"+t[e]:t[e]="rs/db/file/nopic.png":null!==t[e]&&"object"==(0,j.default)(t[e])&&y(t[e])}function w(t,e){return new F.default(function(n,i){var o=void 0;"css"==t?(o=document.createElement("link"),o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href",e)):"js"==t&&(o=document.createElement("script"),o.setAttribute("type","text/javascript"),o.setAttribute("src",e)),o&&(o.setAttribute("async",""),o.setAttribute("defer",""),o.addEventListener("load",function(){n(o)},!1),o.addEventListener("error",function(){i(o)},!1),document.body.appendChild(o))})}function x(t){return t.substring(10)}function M(t){var e="",n="",i=new Date;e=i.getDay();var o=i.getMonth()+1,r=i.getDate(),s=i.getYear();n=s>200?s:1900+s;var a=["星期日","星期一","星期二","星期三","星期四","星期五","星期日","星期六"];return n+"年"+o+"月"+r+"日  "+a[e]}function S(t,e){var n=new Date(t);n=n.valueOf(),n+=24*e*60*60*1e3,n=new Date(n);var i=n.getMonth()+1,o=n.getDate(),r=n.getHours(),s=n.getMinutes(),a=n.getSeconds();return n.getFullYear()+"-"+(i<10?"0"+i:i)+"-"+(o<10?"0"+o:o)+" "+(r<10?"0"+r:r)+":"+(s<10?"0"+s:s)+":"+(a<10?"0"+a:a)}function D(t){var e=window.location.search,n=t.length,i=e.indexOf(t);if(i===-1)return"";i+=n+1;var o=e.indexOf("&",i);return o===-1?e.substring(i):e.substring(i,o)}function C(t){var e=k(window.location.search.slice(1,window.location.search.length)),n=t.length,i=e.indexOf(t);if(i===-1)return"";i+=n+1;var o=e.indexOf("&",i);return o===-1?e.substring(i):e.substring(i,o)}function A(t){for(var e=String.fromCharCode(t.charCodeAt(0)+t.length),n=1;n<t.length;n++)e+=String.fromCharCode(t.charCodeAt(n)+t.charCodeAt(n-1));return escape(e)}function k(t){t=unescape(t);for(var e=String.fromCharCode(t.charCodeAt(0)-t.length),n=1;n<t.length;n++)e+=String.fromCharCode(t.charCodeAt(n)-e.charCodeAt(n-1));return e}function O(t){var e=(new Date).getTime(),n=new Date(t).getTime(),i=e-n,o=6e4,r=60*o,s=24*r,a=30*s,l=12*a,c="";return i<=2*o?c="刚刚":2*o<i&&i<r?c=Math.floor(i/o)+"分钟前":r<i&&i<=s?c=Math.floor(i/r)+"小时前":s<i&&i<=a?c=Math.floor(i/s)+"天前":a<i&&i<=l?c=Math.floor(i/a)+"个月前":l<i&&(c=Math.floor(i/l)+"年前"),c}function q(t){var e=t.split("-"),n=e[1]-0+1;return e[0]+"-"+(n<10?"0"+n:n)+"-20 00:00:00"}Object.defineProperty(e,"__esModule",{value:!0}),e.f=void 0;var Y=n(10),F=i(Y),N=n(12),j=i(N);e.getAttendanceState=o,e.toStandardYearMonth=r,e.toStandardYearMonth1=s,e.toStandardDateString=a,e.toStandardDateString2=l,e.toStartAndEndDateString=c,e.toStandardTimeString=f,e.to3339TimeString=u,e.parse3339String=d,e.format3339TimeString=m,e.guid=v,e.choices=_,e.required=h,e.isInt=p,e.isFloat=g,e.booleanFilter=b,e.ratifyPics=y,e.loadscript=w,e.orgName=x,e.getNowDate=M,e.addDate=S,e.getUrlParames=D,e.getUrlCompileParames=C,e.compileStr=A,e.uncompileStr=k,e.dateDescripte=O,e.nextMonth20=q;var P=n(1),T=i(P);e.f=void 0},359:function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),s=o(r),a=n(2),l=o(a),c=n(7),f=o(c),u=n(3),d=n(13),m=i(d);e.default={title:"售单销信息",props:["billselect","selectone"],data:function(){return{fcommodityname:[],showbill:!1,number:null,billinfo:{},info:[{f_commodity_name:"",f_quantity:"",f_price:"",f_sale_money:"",f_money:""}]}},ready:function(){function t(){return e.apply(this,arguments)}var e=(0,f.default)(l.default.mark(function t(){var e,n,i,o,r,s,a=this;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=new u.HttpResetClass,n={columnname:"f_commodity_name",tablename:"t_billrecord_commodity",condition:"1=1"},t.next=4,e.load("POST","rs/sql/getdistinct",{data:n},{resolveMsg:null,rejectMsg:"获取商品名称失败"},{silent:!0});case 4:return i=t.sent,i.data.forEach(function(t){var e={label:t.f_commodity_name,value:t.f_commodity_name};a.fcommodityname.push(e)}),o=new u.HttpResetClass,r={tablename:"t_singlevalue",condition:"name = '销售单编号'"},t.next=10,o.load("POST","rs/sql/singleTable",{data:r},{resolveMsg:null,rejectMsg:"获取销售单编号失败"},{silent:!0});case 10:s=t.sent,this.number=s.data[0],this.handle(),this.billinfo.f_billnumber="XS-"+m.toStandardDateString2()+"-"+this.number.value;case 14:case"end":return t.stop()}},t,this)}));return t}(),methods:{change:function(t){"入户安装费"===this.info[t].f_commodity_name&&(this.info[t].f_price=this.billselect.f_construction_cost,this.info[t].f_quantity=this.billselect.f_payfee_num,this.temp(t)),"材料费"===this.info[t].f_commodity_name&&(this.info[t].f_price=this.billselect.f_material_cost,this.info[t].f_quantity=this.billselect.f_payfee_num,this.temp(t)),"人工费"===this.info[t].f_commodity_name&&(this.info[t].f_price=this.billselect.f_labor_cost,this.info[t].f_quantity=this.billselect.f_payfee_num,this.temp(t)),"改管费"===this.info[t].f_commodity_name&&(this.info[t].f_price=this.billselect.f_change_pipeline_cost,this.info[t].f_quantity=this.billselect.f_payfee_num,this.temp(t)),"设备安装费"===this.info[t].f_commodity_name&&(this.info[t].f_price=this.billselect.f_sbaz_cost,this.info[t].f_quantity=this.billselect.f_payfee_num,this.temp(t))},handle:function(){for(;this.number.value.length<3;)this.number.value="0"+this.number.value},add:function(){var t={f_commodity_name:"",f_quantity:"",f_price:"",f_sale_money:"",f_money:""};this.info.push(t)},confirm:function(){this.info.forEach(function(t){1!=t.f_commodity_name[0].length&&(t.f_commodity_name=t.f_commodity_name[0]?t.f_commodity_name[0]:"")}),this.billinfo.f_username=this.$login.f.name,this.billinfo.f_date=m.toStandardDateString(),this.$refs.billxsdx.load()},temp:function(t){var e=this.info[t].f_quantity,n=this.info[t].f_price;return this.info[t].f_money=Number(e)*Number(n)?Number(e)*Number(n):0,this.info[t].f_money=this.info[t].f_money,this.info[t].f_money},updateNumber:function(){function t(){return e.apply(this,arguments)}var e=(0,f.default)(l.default.mark(function t(){var e,n,i,o;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=new u.HttpResetClass,this.number.value=String(Number(this.number.value)+1),t.next=4,e.load("POST","rs/logic/updatesinglevalue",{data:this.number},{resolveMsg:null,rejectMsg:"存储销售单编号失败"});case 4:for(e=new u.HttpResetClass,n=(0,s.default)({},this.billselect,this.billinfo),delete n.id,n.f_bill_type=this.selectone,i=0;i<this.info.length;i++)this.info[i].f_quantity=Number(this.info[i].f_quantity);return o={billinfo:n,array:this.info},t.next=12,e.load("POST","rs/logic/makebillrecord",{data:o},{resolveMsg:null,rejectMsg:"票据记录存储失败"});case 12:case"end":return t.stop()}},t,this)}));return t}()}}},523:function(t,e,n){e=t.exports=n(4)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"BillXSDMakeInfo.vue",sourceRoot:"webpack://"}])},616:function(t,e,n){var i=n(523);"string"==typeof i&&(i=[[t.id,i,""]]);n(5)(i,{});i.locals&&(t.exports=i.locals)},812:function(t,e){t.exports=' <div class=col-sm-12 _v-f9c54d7e=""> <div class=col-sm-12 style="height: auto;margin-top: 10px" _v-f9c54d7e=""> <div class="form-group col-sm-4" _v-f9c54d7e=""> <label class=col-sm-4 _v-f9c54d7e="">摘要：</label> <div class=col-sm-8 _v-f9c54d7e=""> <input class=form-control type=text v-model=billinfo.f_remark _v-f9c54d7e=""> </div> </div> <div class=col-sm-12 v-for="row in info" _v-f9c54d7e=""> <div class="form-group col-sm-2" _v-f9c54d7e=""> <label class=col-sm-6 _v-f9c54d7e="">商品名称：</label> <div class=col-sm-6 _v-f9c54d7e=""> <input-select :value.sync=row.f_commodity_name v-model=row.f_commodity_name v-ref:customertype="" :options=fcommodityname close-on-select="" @change=change($index) _v-f9c54d7e=""></input-select> </div> </div> <div class="form-group col-sm-2" _v-f9c54d7e=""> <label class=col-sm-6 _v-f9c54d7e="">单价：</label> <div class=col-sm-6 _v-f9c54d7e=""> <input class="form-control col-sm-6" type=text v-model=row.f_price @change=temp($index) _v-f9c54d7e=""> </div> </div> <div class="form-group col-sm-2" _v-f9c54d7e=""> <label class=col-sm-6 _v-f9c54d7e="">数量：</label> <div class=col-sm-6 _v-f9c54d7e=""> <input class="form-control col-sm-6" type=text v-model=row.f_quantity @change=temp($index) _v-f9c54d7e=""> </div> </div> <div class="form-group col-sm-2" _v-f9c54d7e=""> <label class=col-sm-6 _v-f9c54d7e="">金额：</label> <div class=col-sm-6 _v-f9c54d7e=""> <input class="form-control col-sm-6" type=text v-model=row.f_money disabled="" _v-f9c54d7e=""> </div> </div> <div class="form-group col-sm-2" _v-f9c54d7e=""> <label class=col-sm-6 _v-f9c54d7e="">折后金额：</label> <div class=col-sm-6 _v-f9c54d7e=""> <input class="form-control col-sm-6" type=text v-model=row.f_sale_money _v-f9c54d7e=""> </div> </div> </div> <div class=col-sm-12 _v-f9c54d7e=""> <div class="form-group col-sm-2 form-input-group" _v-f9c54d7e=""> <button type=button @click=add() class="btn btn-primary" style="width:80px; margin-left:50px" _v-f9c54d7e=""> 增加 </button> </div> <div class=col-sm-6 _v-f9c54d7e=""></div> <div class="form-group col-sm-2 form-input-group" _v-f9c54d7e=""> <button type=button @click=confirm() class="btn btn-primary" style="width:80px; margin-left:50px" _v-f9c54d7e=""> 确定 </button> </div> </div> </div> <div class=col-sm-12 _v-f9c54d7e=""> <billxsd v-if=billinfo v-ref:billxsdx="" :billinfo=billinfo :billselect=billselect :info=info _v-f9c54d7e=""></billxsd> </div> </div> '},910:function(t,e,n){var i,o,r={};n(616),i=n(359),o=n(812),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(r).forEach(function(t){var e=r[t];s.computed[t]=function(){return e}})}});
//# sourceMappingURL=19.js.map