webpackJsonp([51],{34:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:{f_userinfo_id:"用户编号",version:"版本号",f_user_state:"用户状态",f_balance:"账户结余",f_cost_type:"缴费类型",f_user_name:"用户姓名",f_address:"地址",f_area:"区",f_street:"街道",f_residential_area:"小区",f_unit:"单元号",f_building:"楼号",f_floor:"楼层",f_room:"门牌号",f_credentials:"证件类型",f_idnumber:"证件号码",f_user_phone:"电话",f_user_type:"用户类型",f_gasproperties:"用气性质",f_operator:"操作人",f_filiale:"分公司",f_outlets:"营业网点",f_open_id:"微信绑定标识",f_createfile_date:"建档日期",f_contract_id:"合同编号",f_comments:"备注信息",f_user_id:"用户表编号",f_position:"表安装位置",f_meter_base:"气表底数",f_initial_base:"初始气表底数",f_meternumber:"表号",f_metertitles:"表封号",f_card_id:"卡号",f_aroundmeter:"左右表",f_card_password:"卡密码",f_times:"写卡次数",f_whether_hairpin:"是否发卡",f_meter_classify:"气表分类",f_gasbrand_id:"气表品牌关联",f_gasmodel_id:"气表型号关联",f_price_id:"气价编号",f_inputtor:"抄表员",f_meterid:"用户号",f_remanent_gas:"剩余补气量",f_table_state:"表状态",f_valve_state:"阀门状态",f_install_person:"安装人",f_install_date:"安装日期",f_gas_date:"通气日期",f_input_date:"录入日期",f_gas_person:"通气人",f_gas_person_2:"通气人2",f_gas_date_2:"通气日期2",f_fire_state:"点火状态",f_picture:"表具图片",f_changetube_date:"改管日期",f_changetube_person:"改管人",f_bank_accopen:"银行开户名",f_bank_name:"银行名",f_bank_account:"银行开户账号",f_bank_idnumber:"银行身份证号"}}},395:function(e,t,a){"use strict";function _(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),f=_(r),d=a(34),o=_(d);t.default={title:"终止报建详情",props:["data"],data:function(){return{model:{}}},ready:function(){var e=this,t="singleTable_OrderBy",a={items:"*",tablename:"t_stopapply",condition:"id = "+this.data.id,orderitem:"id"};this.$info("加载数据中..., sql:"+t),this.$refs.pv.load("rs/logic/getOneData",{data:{sql:t,params:a}}).then(function(t){e.$info("成功获取到数据！, data:"+(0,f.default)(t.data)),e.model=t.data}).catch(function(t){if(t.status)return void e.$warn("加载数据出错, "+(0,f.default)(t));throw t})},methods:{getValue:function(e){return o.default.data[e]}}}},765:function(e,t){e.exports=' <div class=auto> <partial-view v-ref:pv> <table class="table table-bordered table-condensed self-table" id=table> <tr> <td><b>终止原因</b></td> <td>{{model.f_stop_remarks}}</td> </tr> <tr> <td><b>操作人</b></td> <td>{{model.f_operator}}</td> </tr> <tr> <td><b>操作部门</b></td> <td>{{model.f_department}}</td> </tr> <tr> <td><b>操作日期</b></td> <td>{{model.f_date}}</td> </tr> </table> </partial-view> </div> '},946:function(e,t,a){var _,r,f={};_=a(395),r=a(765),e.exports=_||{},e.exports.__esModule&&(e.exports=e.exports.default);var d="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(d.template=r),d.computed||(d.computed={}),Object.keys(f).forEach(function(e){var t=f[e];d.computed[e]=function(){return t}})}});
//# sourceMappingURL=51.js.map