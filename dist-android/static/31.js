webpackJsonp([31],{360:function(a,b,t){"use strict";function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var o=t(2),r=e(o),s=t(7),i=e(s),l=t(3);b.default={title:"销售记录单表历史记录",props:["billselect","selectone"],data:function(){return{show:!1,model:new l.PagedList("rs/sql/billrecord",20,{data:{f_process_id:this.billselect.f_process_id,fengongsi:this.$login.f.f_fengongsi,f_bill_type:this.selectone}}),model1:new l.DataModel("rs/report/xiaoshoudanlishi",{data:{selectid:this.selectid}}),selectid:null,selectdata:null}},ready:function(){this.$refs.cp.$refs.cri.search()},methods:{details:function(a){console.log("选中的id:"+a),this.selectid=a.id,this.selectdata=a,this.show=!0,this.model1.paramSource.data.selectid=this.selectid,this.$refs.page1.$refs.xiaoshoudan.search()},close:function(){this.show=!1},updateNumber:function(){function a(){return b.apply(this,arguments)}var b=(0,i.default)(r.default.mark(function a(){var b,t,e;return r.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=new l.HttpResetClass,t=this.selectdata,delete t.id,t.f_bill_type=this.selectone,t.f_status="补打",e={billinfo:t},a.next=8,b.load("POST","rs/logic/makebillrecord",{data:e},{resolveMsg:null,rejectMsg:"开通卡记录存储失败"});case 8:case"end":return a.stop()}},a,this)}));return a}()}}},518:function(a,b,t){b=a.exports=t(4)(),b.push([a.id,"","",{version:3,sources:[],names:[],mappings:"",file:"BillXSDRecordInfo.vue",sourceRoot:"webpack://"}])},609:function(a,b,t){var e=t(518);"string"==typeof e&&(e=[[a.id,e,""]]);t(5)(e,{});e.locals&&(a.exports=e.locals)},805:function(a,b){a.exports=' <div class="d1 flex" _v-baabb538=""> <div class="left col-sm-12" _v-baabb538=""> <criteria-paged :model=model v-ref:cp="" _v-baabb538=""> <criteria partial=criteria @condition-changed=search v-ref:cri="" _v-baabb538=""> <form novalidate="" class="" partial="" _v-baabb538=""> <div class=col-sm-2 _v-baabb538=""> <div class=col-sm-6 _v-baabb538=""> <input type=hidden class=form-control v-model=model.id v-on:keyup.enter=search condition="id like \'{}%\'" _v-baabb538=""> </div> </div> <div class=col-sm-1 _v-baabb538=""> <button type=hidden @click=search(),$parent.$parent.close() _v-baabb538=""> </button> </div> </form> </criteria> <data-grid :model=model partial=list v-ref:grid="" class=data-grid is-fixed=false style=overflow-x:auto _v-baabb538=""> <template partial=head> <tr class=title _v-baabb538=""> <th _v-baabb538=""> <nobr _v-baabb538="">序号</nobr> </th> <th _v-baabb538=""> <nobr _v-baabb538="">状态</nobr> </th> <th _v-baabb538=""> <nobr _v-baabb538="">录单日期</nobr> </th> <th _v-baabb538=""> <nobr _v-baabb538="">单据编号</nobr> </th> <th _v-baabb538=""> <nobr _v-baabb538="">联系电话</nobr> </th> <th _v-baabb538=""> <nobr _v-baabb538="">地址</nobr> </th> <th _v-baabb538=""> <nobr _v-baabb538="">合计(元)</nobr> </th> <th _v-baabb538=""> <nobr _v-baabb538="">制单人</nobr> </th> <th _v-baabb538=""> <nobr _v-baabb538="">操作</nobr> </th> </tr> </template> <template partial=body> <tr _v-baabb538=""> <td _v-baabb538=""> <nobr _v-baabb538="">{{$index+1}}</nobr> </td> <td _v-baabb538=""> <nobr _v-baabb538="">{{row.f_status}}</nobr> </td> <td _v-baabb538=""> <nobr _v-baabb538="">{{row.f_date}}</nobr> </td> <td _v-baabb538=""> <nobr _v-baabb538="">{{row.f_billnumber}}</nobr> </td> <td _v-baabb538=""> <nobr _v-baabb538="">{{row.f_phone}}</nobr> </td> <td _v-baabb538=""> <nobr _v-baabb538="">{{row.f_address}}</nobr> </td> <td _v-baabb538=""> <nobr _v-baabb538="">{{row.f_sum}}</nobr> </td> <td _v-baabb538=""> <nobr _v-baabb538="">{{row.f_username}}</nobr> </td> <td _v-baabb538=""> <a href=# @click=$parent.$parent.$parent.details(row) _v-baabb538="">查看详情</a> </td> </tr> </template> </data-grid> </criteria-paged> </div> <modal :show.sync=show v-ref:modal="" backdrop=false _v-baabb538=""> <header slot=modal-header class=modal-header _v-baabb538=""> <button type=button class=close @click=close _v-baabb538=""><span _v-baabb538="">×</span></button> </header> <article slot=modal-body class=modal-body _v-baabb538=""> <div style="width:auto;height: auto" _v-baabb538=""> <criteria-paged v-ref:page1="" :model=model1 :pager=false _v-baabb538=""> <criteria v-ref:xiaoshoudan="" partial=criteria @condition-changed=search _v-baabb538=""> <div novalidate="" class="form-inline auto" partial="" _v-baabb538=""> <div class=form-group _v-baabb538=""> </div> </div> </criteria> <div partial=list id=shexianss1 _v-baabb538=""> <table class=tablesty style="margin: 0px auto" border=1 _v-baabb538=""> <tbody _v-baabb538=""><tr _v-baabb538=""> <th colspan=4 style="font-weight: normal" _v-baabb538=""> {{{ model.data.substring(26,model.data.length-8) }}} </th> </tr> </tbody></table> <div class=col-sm-12 style="margin-top: 2px" _v-baabb538=""> <div class=col-sm-2 _v-baabb538=""> <label _v-baabb538=""> <nobr _v-baabb538=""> 补打原因：</nobr> </label> </div> <div class=col-sm-6 _v-baabb538=""> <input style="width: 100%" v-model=model.f_again_reason :value.sync=model.f_again_reason _v-baabb538=""> </div> <div class=col-sm-2 _v-baabb538=""> <report-print v-if=model.f_again_reason @click=$parent.$parent.updateNumber() id=shexianss1 top=1cm left=1cm width=100% height=100% _v-baabb538=""></report-print> </div> </div> </div> </criteria-paged> </div> </article> <footer slot=modal-footer class=modal-footer _v-baabb538=""> </footer> </modal> </div> '},911:function(a,b,t){var e,o,r={};t(609),e=t(360),o=t(805),a.exports=e||{},a.exports.__esModule&&(a.exports=a.exports.default);var s="function"==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(r).forEach(function(a){var b=r[a];s.computed[a]=function(){return b}})}});
//# sourceMappingURL=31.js.map