webpackJsonp([86],{388:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(4),n=s(o),i=a(2),l=s(i),c=a(3),r=a(76),d=s(r);l.default.mark(function e(t,a){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.f_actualfee_type=a.f_actualfee_type[0],a.f_bill_type=a.f_bill_type[0],e.next=4,t.$resetpost("rs/logic/saveentity",{data:{tablename:"t_apply",parameters:a}});case 4:delete a.id,t.$resetpost("rs/logic/saveentity",{data:{tablename:"t_record",parameters:a}}).then(function(){t.reset()});case 6:case"end":return e.stop()}},e,this)});t.default={components:{InputAndSelect:d.default},title:"报装收费",data:function(){return{showpay:!1,addItem:null,model:{subcost:0,f_total_cost:0,f_payfee_operator:"",f_payfee_department:"",f_filiale:"",f_payfee_date:"",f_cumulative_money:0,f_unaccounts_money:"",f_cumulative_invoicing:"",f_residual_invoicing:"",f_main_contract_num:0,rows:[]},f_payment_type:[{label:"分期",value:"分期"},{label:"一次付清",value:"一次付清"}],chargemoney:0}},props:["infee"],ready:function(){this.load(),this.model.f_payfee_operator=this.$login.f.name,this.model.f_payfee_department=this.$login.f.f_parentname,this.model.f_filiale=this.$login.f.f_fengongsi,this.model.f_payfee_date=this.$login.toStandardDateString()},methods:{check:function(){console.log("check");var e=/^[+-]?\d+(\.\d+)?$/;if(this.addItem.f_charge_money){if(!e.test(this.addItem.f_charge_money))return this.$showMessage("请输入数字"),this.addItem.f_charge_money="",!1}else console.log("check1"),this.addItem.f_charge_money=this.model.f_unaccounts_money;return!0},change:function(){"开户费"===this.addItem.f_charge_remarks&&(this.addItem.f_charge_money=this.infee.f_account_cost?this.infee.f_account_cost:0),"入户安装费"===this.addItem.f_charge_remarks&&(this.addItem.f_charge_money=this.infee.f_construction_cost?this.infee.f_construction_cost:0),"材料费"===this.addItem.f_charge_remarks&&(this.addItem.f_charge_money=this.infee.f_material_cost?this.infee.f_material_cost:0),"人工费"===this.addItem.f_charge_remarks&&(this.addItem.f_charge_money=this.infee.f_labor_cost?this.infee.f_labor_cost:0),"改管费"===this.addItem.f_charge_remarks&&(this.addItem.f_charge_money=this.infee.f_change_pipeline_cost?this.infee.f_change_pipeline_cost:0),"设备安装费"===this.addItem.f_charge_remarks&&(this.addItem.f_charge_money=this.infee.f_sbaz_cost?this.infee.f_sbaz_cost:0)},smalltoBIG:function(e){var t=["角","分"],a=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],s=[["元","万","亿"],["","拾","佰","仟"]],o=e<0?"欠":"";e=Math.abs(e);for(var n="",i=0;i<t.length;i++)n+=(a[Math.floor(10*e*Math.pow(10,i))%10]+t[i]).replace(/零./,"");n=n||"整",e=Math.floor(e);for(var i=0;i<s[0].length&&e>0;i++){for(var l="",c=0;c<s[1].length&&e>0;c++)l=a[e%10]+s[1][c]+l,e=Math.floor(e/10);n=l.replace(/(零.)*零$/,"").replace(/^$/,"零")+s[0][i]+n}return o+n.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},add:function(){this.addItem=null,this.showpay=!0},close:function(){this.showpay=!1,this.addItem=null},confirm:function(){function e(){return t.apply(this,arguments)}var t=(0,n.default)(l.default.mark(function e(){var t,a,s,o,n,i,r=this;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.check()){e.next=3;break}return e.abrupt("return");case 3:if(console.log("f_charge_money"+Number(this.addItem.f_charge_money)),console.log("f_unaccounts_money"+Number(this.model.f_unaccounts_money)),!(Number(this.addItem.f_charge_money)>Number(this.model.f_unaccounts_money))){e.next=9;break}this.$showMessage("缴费金额不能大于剩余金额"),e.next=39;break;case 9:if(0!=this.addItem.f_charge_money){e.next=13;break}this.$showMessage("不能缴费0元"),e.next=39;break;case 13:return a=this.accAdd(Number(this.addItem.f_charge_money),Number(this.model.f_cumulative_money)),s=this.accSub(Number(this.model.f_unaccounts_money),Number(this.addItem.f_charge_money)),""==this.addItem.f_payment_typed&&(this.addItem.f_payment_typed="分期",console.log("为空")),o=new c.HttpResetClass,this.addItem.f_charge_money=this.addItem.f_charge_money,this.addItem.f_amount_words=this.addItem.f_amount_words,this.addItem.f_charge_collectors=this.$login.f.name,this.addItem.f_charge_date=this.addItem.f_charge_date,this.addItem.f_charge_remarks=this.addItem.f_charge_remarks,this.addItem.f_filiale=this.$login.f.f_fengongsi,this.addItem.f_process_id=this.infee.f_process_id,this.model.rows.push(this.addItem),this.addItem.f_charging_status="有效",n=this.addItem.f_charge_money,this.chargemoney=this.addItem.f_charge_money,i={tablename:"t_charge_record",parameters:this.addItem},e.next=31,o.load("POST","rs/logic/saveentity",{data:i},{resolveMsg:null,rejectMsg:"添加失败"}).then(function(e){r.close()});case 31:return i={f_cumulative_money:a,f_unaccounts_money:s,f_apply_num:this.infee.f_apply_num},e.next=34,o.load("POST","rs/logic/updatechargemoney",{data:i},{resolveMsg:null,rejectMsg:"添加累计金额失败"}).then(function(e){r.close(),r.load()});case 34:console.log(this.model.f_cumulative_invoicing),console.log(n),console.log(this.model.f_cumulative_invoicing),console.log(this.model.f_residual_invoicing),this.$showMessage("是否打票据",["confirm","cancel"]).then(function(e){if("confirm"===e){console.log("打印票据");var t=!0,a=r.accAdd(Number(n),Number(r.model.f_cumulative_invoicing)),s=r.accSub(Number(r.model.f_residual_invoicing),Number(n));if(t){var i={f_cumulative_invoicing:a,f_residual_invoicing:s,f_apply_num:r.infee.f_apply_num,f_invoice_num:"123"};o.load("POST","rs/logic/updateinvoicemoney",{data:i},{resolveMsg:null,rejectMsg:"修改开票金额失败"}).then(function(e){r.close(),r.load()})}else r.$showMessage("开发票失败")}else r.goback()});case 39:case"end":return e.stop()}},e,this)}));return e}(),invoice:function(){function e(){return t.apply(this,arguments)}var t=(0,n.default)(l.default.mark(function e(){var t,a,s,o,n,i=this;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("打印票据"),t=new c.HttpResetClass,a=!0,s=this.accAdd(Number(this.chargemoney),Number(this.model.f_cumulative_invoicing)),o=this.accSub(Number(this.model.f_residual_invoicing),Number(this.chargemoney)),!a){e.next=11;break}return n={f_cumulative_invoicing:s,f_residual_invoicing:o,f_apply_num:this.infee.f_apply_num,f_invoice_num:"123"},e.next=9,t.load("POST","rs/logic/updateinvoicemoney",{data:n},{resolveMsg:null,rejectMsg:"修改开票金额失败"}).then(function(e){i.close(),i.load()});case 9:e.next=12;break;case 11:this.$showMessage("开发票失败");case 12:case"end":return e.stop()}},e,this)}));return e}(),goback:function(){this.$dispatch("hiddenbtn"),this.showview=!1},tovoid:function(){function e(e){return t.apply(this,arguments)}var t=(0,n.default)(l.default.mark(function e(t){var a,s,o,n,i,r,d,m,f=this;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("是"!==t.f_is_correct){e.next=4;break}this.$showMessage("已冲正过，不能操作！"),e.next=21;break;case 4:if(a=!0,!a){e.next=20;break}return s=new c.HttpResetClass,o={tablename:"t_charge_record",condition:"id = '"+t.id+"'"},e.next=10,s.load("POST","rs/sql/singleTable",{data:o},{resolveMsg:null,rejectMsg:"获取付款数据失败"});case 10:n=e.sent,i=this.accSub(Number(this.model.f_cumulative_money),Number(t.f_charge_money)),r=this.accAdd(Number(this.model.f_unaccounts_money),Number(t.f_charge_money)),d=Number(this.model.f_cumulative_invoicing),m=Number(this.model.f_residual_invoicing),n.data[0].f_invoice_num&&(d=this.accSub(Number(this.model.f_cumulative_invoicing),Number(t.f_charge_money)),m=this.accAdd(Number(this.model.f_residual_invoicing),Number(t.f_charge_money))),o={f_cumulative_money:i,f_unaccounts_money:r,f_cumulative_invoicing:d,f_residual_invoicing:m,f_apply_num:this.infee.f_apply_num,id:t.id},this.$resetpost("rs/logic/tovoidcharge",o,{resolveMsg:"冲正成功",rejectMsg:"冲正失败"}).then(function(e){f.load()}),e.next=21;break;case 20:this.$showMessage("冲正接口调用失败！");case 21:case"end":return e.stop()}},e,this)}));return e}(),tomakeup:function(e){e.f_invoice_num?this.$showMessage("此记录有票据,不能操作！"):this.invoice()},accSub:function(e,t){var a,s,o,n;try{a=e.toString().split(".")[1].length}catch(e){a=0}try{s=t.toString().split(".")[1].length}catch(e){s=0}return o=Math.pow(10,Math.max(a,s)),n=a>=s?a:s,((e*o-t*o)/o).toFixed(n)},reset:function(){this.$dispatch("close"),this.$dispatch("selfsearch")},accAdd:function(e,t){var a,s,o;try{a=e.toString().split(".")[1].length}catch(e){a=0}try{s=t.toString().split(".")[1].length}catch(e){s=0}return o=Math.pow(10,Math.max(a,s)),(e*o+t*o)/o},load:function(){function e(){return t.apply(this,arguments)}var t=(0,n.default)(l.default.mark(function e(){var t,a,s,o;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new c.HttpResetClass,a={columnname:"f_contract_money",tablename:"t_contract",condition:"processid = '"+this.infee.f_process_id+"'"},e.next=4,t.load("POST","rs/sql/getSum",{data:a},{resolveMsg:null,rejectMsg:"获取总金额失败"});case 4:return s=e.sent,this.model.f_total_cost=s.data[0].f_contract_money,a={tablename:"t_charge_record",condition:"f_process_id = '"+this.infee.f_process_id+"'"},e.next=9,t.load("POST","rs/sql/singleTable",{data:a},{resolveMsg:null,rejectMsg:"获取付款数据失败"});case 9:for(s=e.sent,o=0;o<s.data.length;o++)s.data[o].f_charge_date=s.data[o].f_charge_date.substring(0,11);return this.model.rows=s.data,a={tablename:"t_contract",condition:"processid = '"+this.infee.f_process_id+"'"},e.next=15,t.load("POST","rs/sql/singleTable",{data:a},{resolveMsg:null,rejectMsg:"获取主合同编号失败"});case 15:for(s=e.sent,o=0;o<s.data.length;o++)s.data[o].f_contract_number&&(this.model.f_main_contract_num=s.data[o].f_contract_number);return a={tablename:"t_apply",condition:"f_apply_num = '"+this.infee.f_apply_num+"'"},e.next=20,t.load("POST","rs/sql/singleTable",{data:a},{resolveMsg:null,rejectMsg:"获取累计数据失败"});case 20:s=e.sent,this.model.f_cumulative_money=Number(s.data[0].f_cumulative_money),this.model.chargemoney=Number(s.data[0].f_cumulative_money),this.model.f_unaccounts_money=Number(s.data[0].f_unaccounts_money),this.model.f_cumulative_invoicing=Number(s.data[0].f_cumulative_invoicing),this.model.f_residual_invoicing=Number(s.data[0].f_residual_invoicing);case 26:case"end":return e.stop()}},e,this)}));return e}()},computed:{getCapital:function(){return this.addItem.f_charge_money&&(this.addItem.f_amount_words=this.smalltoBIG(Number(this.addItem.f_charge_money))),this.addItem.f_amount_words},feeoptions:function(){return this.$appdata.getParam("费用类型")},dayin:function(){return this.$appdata.getParam("打印格式")},jiaofei:function(){return this.$appdata.getParam("缴费类型")}}}},816:function(e,t){e.exports=' <div class="col-sm-12 auto select-overspread"> <div class="auto select-overspread"> <div class="panel panel-info"> <div class="panel-heading auto"> <h3 class=panel-title>报装收费</h3> </div> </div> </div> <div class=col-sm-12> <span class=col-sm-3 v-show="!($login.f.f_fengongsi.includes(\'彩虹\'))">合同编号:{{model.f_main_contract_num}}</span> <span class=col-sm-3 v-show="!($login.f.f_fengongsi.includes(\'彩虹\'))">合同总金额:{{model.f_total_cost}}元</span> <span class=col-sm-3 v-show="!($login.f.f_fengongsi.includes(\'彩虹\'))">累计缴费金额:{{model.f_cumulative_money}}元</span> <span class=col-sm-3 v-show="!($login.f.f_fengongsi.includes(\'彩虹\'))">未结总金额:{{model.f_unaccounts_money}}元</span> <span class=col-sm-3 v-show="!($login.f.f_fengongsi.includes(\'彩虹\'))">累计开票金额:{{model.f_cumulative_invoicing}}元</span> <span class=col-sm-3 v-show="!($login.f.f_fengongsi.includes(\'彩虹\'))">未开票金额:{{model.f_residual_invoicing}}元</span> <button type=button class="btn btn-warning col-sm-2" @click=add()>新增收费</button> </div> <div class=col-sm-12 style="height: auto"> <div class="form-inline auto" style="margin-bottom: 5px"> </div> <div class="col-sm-12 span recordTable" style="margin-top: 10px;min-height: 350px"> <partial-view v-ref:single-load> <data-grid :model=model v-ref:grid> <template partial=head> <tr> <th>序号</th> <th>收费金额(元)</th> <th>金额大写</th> <th>缴费类型</th> <th>收费人员</th> <th>状态</th> <th>日期</th> <th>备注</th> <th>操作</th> </tr> </template> <template partial=body> <td style="text-align: center">{{$index+1}}</td> <td style="text-align: center">{{row.f_charge_money}}</td> <td style="text-align: center">{{row.f_amount_words}}</td> <td style="text-align: center">{{row.f_payment_type}}</td> <td style="text-align: center">{{row.f_charge_collectors}}</td> <td style="text-align: center">{{row.f_charging_status}}</td> <td style="text-align: center">{{row.f_charge_date}}</td> <td style="text-align: center">{{row.f_charge_remarks}}</td> <td class=flex-around> <button type=button name=button class="btn btn-link" @click.stop=$parent.$parent.$parent.tomakeup(row)>补开票据 </button> <button type=button name=button class="btn btn-link" @click.stop=$parent.$parent.$parent.tovoid(row)>冲正 </button> </td> </template> </data-grid> </partial-view> </div> </div> <div class="form-group col-sm-12"> <div class=col-sm-6> <label class="control-label col-sm-4">分公司：</label> <div class=col-sm-8> <input class=form-control type=text v-model=model.f_filiale disabled=disabled> </div> </div> <div class=col-sm-6> <label class="control-label col-sm-4">操作日期：</label> <div class=col-sm-8> <input class=form-control type=text v-model=model.f_payfee_date disabled=disabled> </div> </div> </div> <div class="form-group col-sm-12"> <div class=col-sm-6> <label class="control-label col-sm-4">部门：</label> <div class=col-sm-8> <input class=form-control type=text v-model=model.f_payfee_department disabled=disabled> </div> </div> <div class=col-sm-6> <label class="control-label col-sm-4">操作人：</label> <div class=col-sm-8> <input class=form-control type=text v-model=model.f_payfee_operator disabled=disabled> </div> </div> </div> <modal :show.sync=showpay v-ref:modal backdrop=false> <header slot=modal-header class=modal-header> <button type=button class=close @click=close><span>&times;</span></button> <h4 class=modal-title>新增收费</h4> </header> <article slot=modal-body class=modal-body> <div v-if=showpay> <div class=from-group> <label>合同总金额(元)</label> <input type=text class=form-control v-model=model.f_total_cost readonly=readonly> </div> <div class=from-group> <label>累计缴费金额(元)</label> <input type=text class=form-control v-model=model.f_cumulative_money readonly=readonly> </div> <div class=from-group> <label>未结总金额(元)</label> <input type=text class=form-control v-model=model.f_unaccounts_money readonly=readonly> </div> <div class=from-group> <label>金额(元)</label> <input type=text :placeholder=model.f_unaccounts_money class=form-control v-model=addItem.f_charge_money @blur=check()> </div> <div class=from-group> <label>金额大写</label> <input type=text class=form-control v-model=getCapital readonly=readonly> </div> <div class=from-group> <label>交费日期</label> <div> <datepicker width=600.76px; :value.sync=addItem.f_charge_date :format="\'yyyy-MM-dd\'" v-model=addItem.f_charge_date readonly=readonly :show-reset-button=reset> </datepicker> </div> </div> <div class=from-group> <label>备注</label> <input type=text class=form-control v-model=addItem.f_charge_remarks> </div> </div> </article> <footer slot=modal-footer class=modal-footer> <button v-show=showpay type=button class="btn btn-default" @click=close>取消</button> <button v-show=showpay type=button class="btn btn-success" @click=confirm>确认</button> </footer> </modal> </div> '},1020:function(e,t,a){var s,o,n={};s=a(388),o=a(816),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(i.template=o),i.computed||(i.computed={}),Object.keys(n).forEach(function(e){var t=n[e];i.computed[e]=function(){return t}})}});
//# sourceMappingURL=86.js.map