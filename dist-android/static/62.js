webpackJsonp([62],{374:function(e,l,s){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(l,"__esModule",{value:!0});var o=s(11),a=t(o),c=s(2),i=t(c),d=s(8),r=t(d),n=i.default.mark(function e(l,s,t){var o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o={tablename:"t_apply",parameters:t},e.next=3,l.$resetpost("rs/logic/save",{data:o});case 3:delete s.id,o={tablename:"t_record",parameters:s},l.$resetpost("rs/logic/save",{data:o}).then(function(){l.reset()});case 6:case"end":return e.stop()}},e,this)});l.default={title:"费用变更",data:function(){return{model:{f_apply_date:this.$login.toStandardDateString(),f_apply_department:this.$login.f.f_parentname,f_apply_operator:this.$login.f.name,f_filiale:this.$login.f.f_fengongsi},labor_cost:"",change_pipeline_cost:"",material_cost:"",construction_cost:"",sbaz_cost:""}},props:["upfee"],ready:function(){},methods:{confirm:function(){this.model=(0,a.default)({},this.upfee,this.model);var e=this.totalcost(),l=this.upfee.f_total_cost;this.model.totalcost=l,this.model.f_new_total_cost=e,this.model.id=this.upfee.id,this.upfee.f_change_pipeline_cost=this.model.f_new_change_pipeline_cost,this.upfee.f_material_cost=this.model.f_new_material_cost,this.upfee.f_labor_cost=this.model.f_new_labor_cost,this.upfee.f_sbaz_cost=this.model.f_new_sbaz_cost,this.upfee.f_construction_cost=this.model.f_new_construction_cost,this.upfee.f_account_cost=this.model.f_new_account_cost,this.upfee.f_total_cost=this.model.f_new_total_cost,this.model.applyid=this.upfee.id,this.model.f_operator=this.model.f_apply_operator,this.model.f_department=this.model.f_apply_department,this.model.f_operat_type="报建费用变更",this.model.f_state="有效",this.model.f_describe="对"+this.model.f_user_name+"进行了费用变更";var s=n(this,this.model,this.upfee);(0,r.default)(s),this.$dispatch("hiddenbtn"),this.$dispatch("searchcard")},reset:function(){this.$dispatch("hiddenbtn"),this.$parent.$refs.installselect.$refs.cp.$refs.cri.search()},totalcost:function(){var e=Number(this.model.f_new_construction_cost)+Number(this.model.f_new_material_cost)+Number(this.model.f_new_labor_cost)+Number(this.model.f_new_change_pipeline_cost)+Number(this.model.f_new_sbaz_cost)-Number(this.model.f_jmhj_cost);return e}}}},749:function(e,l){e.exports=' <div class="col-sm-12 auto select-overspread"> <div class="auto select-overspread"> <div class="panel panel-info"> <div class="panel-heading auto"> <h3 class=panel-title>费用变更</h3> </div> </div> </div> <validator name=v> <form class=horizontal style="padding-top: 50px"> <div class="form-group col-sm-12"> <div class=col-sm-4> <label class="control-label col-sm-6">原开户费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=upfee.f_account_cost disabled=disabled /> </div> </div> <div class=col-sm-4> <label class="control-label col-sm-6">原入户安装费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=upfee.f_construction_cost disabled=disabled /> </div> </div> <div class=col-sm-4> <label class="control-label col-sm-6">原材料费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=upfee.f_material_cost disabled=disabled> </div> </div> </div> <div class="form-group col-sm-12"> <div class=col-sm-4> <label class="control-label col-sm-6">原人工费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=upfee.f_labor_cost disabled=disabled /> </div> </div> <div class=col-sm-4> <label class="control-label col-sm-6">原改管费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=upfee.f_change_pipeline_cost disabled=disabled /> </div> </div> <div class=col-sm-4> <label class="control-label col-sm-6">原设备安装费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=upfee.f_sbaz_cost disabled=disabled /> </div> </div> </div> <div class="form-group col-sm-12"> <div class=col-sm-4 :class="[$v.f_new_construction_cost.required ? \'has-error\' : \'\']"> <label class="control-label col-sm-6">新开户费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=model.f_new_account_cost /> </div> </div> <div class=col-sm-4 :class="[$v.f_new_construction_cost.required ? \'has-error\' : \'\']"> <label class="control-label col-sm-6">新入户安装费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=model.f_new_construction_cost v-validate:f_new_construction_cost="{required: true}"/> </div> </div> <div class=col-sm-4 :class="[$v.f_new_material_cost.required ? \'has-error\' : \'\']"> <label class="control-label col-sm-6">新材料费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=model.f_new_material_cost v-validate:f_new_material_cost="{required: true}"> </div> </div> </div> <div class="form-group col-sm-12"> <div class=col-sm-4 :class="[$v.f_new_labor_cost.required ? \'has-error\' : \'\']"> <label class="control-label col-sm-6">新人工费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=model.f_new_labor_cost v-validate:f_new_labor_cost="{required: true}"/> </div> </div> <div class=col-sm-4 :class="[$v.f_new_change_pipeline_cost.required ? \'has-error\' : \'\']"> <label class="control-label col-sm-6">新改管费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=model.f_new_change_pipeline_cost v-validate:f_new_change_pipeline_cost="{required: true}"/> </div> </div> <div class=col-sm-4 :class="[$v.f_new_sbaz_cost.required ? \'has-error\' : \'\']"> <label class="control-label col-sm-6">新设备安装费：</label> <div class=col-sm-6> <input type=text class=form-control v-model=model.f_new_sbaz_cost v-validate:f_new_sbaz_cost="{required: true}"/> </div> </div> </div> <div class="form-group col-sm-12"> <div class=col-sm-2> <label class="control-label col-sm-12">费用变更备注：</label> </div> <div class=col-sm-10> <textarea class=form-control rows=3 v-model=model.f_changefee_remarks></textarea> </div> </div> <div class="form-group col-sm-12"> <div class=col-sm-6> <label class="control-label col-sm-4">分公司：</label> <div class=col-sm-8> <input class=form-control type=text v-model=model.f_filiale disabled=disabled> </div> </div> <div class=col-sm-6> <label class="control-label col-sm-4">操作日期：</label> <div class=col-sm-8> <input class=form-control type=text v-model=model.f_apply_date disabled=disabled> </div> </div> </div> <div class="form-group col-sm-12"> <div class=col-sm-6> <label class="control-label col-sm-4">部门：</label> <div class=col-sm-8> <input class=form-control type=text v-model=model.f_apply_department disabled=disabled> </div> </div> <div class=col-sm-6> <label class="control-label col-sm-4">操作人：</label> <div class=col-sm-8> <input class=form-control type=text v-model=model.f_apply_operator disabled=disabled> </div> </div> </div> </form> </validator> <div class="from-group col-sm-12"> <center> <button type=button @click=confirm() class="btn btn-primary" style="width:80px; margin-left:50px" :disabled=$v.invalid> 保存 </button> <button type=button @click=reset() class="btn btn-warning" style="width:80px; margin-left:50px"> 返回 </button> </center> </div> </div> '},925:function(e,l,s){var t,o,a={};t=s(374),o=s(749),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports.default);var c="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(c.template=o),c.computed||(c.computed={}),Object.keys(a).forEach(function(e){var l=a[e];c.computed[e]=function(){return l}})}});
//# sourceMappingURL=62.js.map