webpackJsonp([32],{358:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(3);e.default={title:"销售单",props:["billselect","info","billinfo"],data:function(){return{model1:new o.DataModel("rs/report/xiaoshoudan",{data:{billinfo:this.billinfo,processid:this.billselect.f_process_id,temp:this.info}})}},methods:{load:function(){this.model1=null,this.model1=new o.DataModel("rs/report/xiaoshoudan",{data:{billinfo:this.billinfo,processid:this.billselect.f_process_id,temp:this.info}})},billprint:function(){this.$refs.page1.$refs.xiaoshoudan.$refs.reportprint.print()}},watch:{model1:function(){this.model1&&this.$refs.page1.$refs.xiaoshoudan.search()}}}},498:function(t,e,i){e=t.exports=i(4)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"BillXSD.vue",sourceRoot:"webpack://"}])},571:function(t,e,i){var o=i(498);"string"==typeof o&&(o=[[t.id,o,""]]);i(5)(o,{});o.locals&&(t.exports=o.locals)},768:function(t,e){t.exports=' <div style="width:800px;height: auto" _v-067f2865=""> <criteria-paged v-ref:page1="" :model=model1 :pager=false _v-067f2865=""> <criteria v-ref:xiaoshoudan="" partial=criteria @condition-changed=search _v-067f2865=""> <div novalidate="" class="form-inline auto" partial="" _v-067f2865=""> <div class=form-group _v-067f2865=""> <div class=col-sm-12 _v-067f2865=""> <div class=col-sm-10 _v-067f2865=""></div> <div class=col-sm-2 _v-067f2865=""> <report-print v-ref:reportprint="" @click=$parent.$parent.$parent.updateNumber() id=shexianss1 top=1cm left=1cm width=100% height=100% _v-067f2865=""></report-print> </div> </div> </div> </div> </criteria> <div partial=list id=shexianss1 _v-067f2865=""> <table class=tablesty style="margin: 0px auto" border=1 _v-067f2865=""> <tbody _v-067f2865=""><tr _v-067f2865=""> <th colspan=4 style="font-weight: normal" _v-067f2865=""> {{{ model.data.substring(26,model.data.length-8) }}} </th> </tr> </tbody></table> </div> </criteria-paged> </div> '},909:function(t,e,i){var o,s,r={};i(571),o=i(358),s=i(768),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(r).forEach(function(t){var e=r[t];a.computed[t]=function(){return e}})}});
//# sourceMappingURL=32.js.map