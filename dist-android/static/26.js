webpackJsonp([26],{380:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(3);t.default={title:"设备信息",data:function(){return{devicetypes:this.$appdata.getParam("设备类型"),flagg:!0,devicesinfo:[],userinfoid:"",imgdelete:"images/mainicon/deletedevice.png",imgadd:"images/mainicon/adddevice.png"}},props:["selectdata","edit"],ready:function(){this.load()},methods:{load:function(){var e=this;if(this.selectdata){var t={tablename:"t_devices",condition:"f_process_id='"+String(this.selectdata.f_process_id)+"'"};this.$resetpost("rs/sql/singleTable",{data:t},{resolveMsg:null,rejectMsg:"查询失败"}).then(function(t){e.devicesinfo=[],e.devicesinfo=t.data})}},confirm:function(e,t){var s=this;this.$resetpost("rs/sql/findUserInfo",{data:{f_userinfo_id:e.f_userinfo_id,process_id:this.selectdata.f_process_id}}).then(function(t){if(t.data.length>0){e.f_process_id=s.selectdata.f_process_id,e.f_devices_state="正常","[]"==e.f_devices_type?delete e.f_devices_type:e.f_devices_type=e.f_devices_type[0];var i={tablename:"t_devices",parameters:e};e.f_brand&&e.f_devices_model&&e.f_devices_num?s.$resetpost("rs/logic/saveentity",{data:i},{resolveMsg:null,rejectMsg:"添加失败！"}).then(function(e){s.flagg=!1,s.load(),s.$showMessage("添加成功！")}):s.$showMessage("请检查设备品牌,设备型号,设备数量是否填写")}else s.$showMessage("不存在的户档案编号！")})},deleteDevice:function(e,t){var s=this;t.id?this.$showMessage("删除后不可恢复，确认删除吗？",["confirm","cancel"]).then(function(e){if("confirm"===e){var o=new i.HttpResetClass;o.load("DELETE","rs/entity/t_devices/"+t.id).then(function(e){s.load()})}}):this.devicesinfo.splice(e,1)},addDevice:function(){this.devicesinfo.push({f_devices_type:"",f_userinfo_id:this.userinfoid})}}}},482:function(e,t,s){t=e.exports=s(4)(),t.push([e.id,".flex-deviceinfo{padding:0 20px;-ms-flex-pack:justify;justify-content:space-between;height:auto;-ms-flex-wrap:wrap;flex-wrap:wrap}.flex-two-info{margin-bottom:10px;-ms-flex-align:center;align-items:center;width:48%}","",{version:3,sources:["/./src/components/product/Process/Processes/CustomerEquipmentMessage.vue"],names:[],mappings:"AAAA,iBAAiB,eAAe,sBAAsB,8BAA8B,YAAY,mBAAmB,cAAc,CAAC,eAAe,mBAAmB,sBAAsB,mBAAmB,SAAS,CAAC",file:"CustomerEquipmentMessage.vue",sourcesContent:[".flex-deviceinfo{padding:0 20px;-ms-flex-pack:justify;justify-content:space-between;height:auto;-ms-flex-wrap:wrap;flex-wrap:wrap}.flex-two-info{margin-bottom:10px;-ms-flex-align:center;align-items:center;width:48%}"],sourceRoot:"webpack://"}])},529:function(e,t,s){var i=s(482);"string"==typeof i&&(i=[[e.id,i,""]]);s(5)(i,{});i.locals&&(e.exports=i.locals)},753:function(e,t){e.exports=' <div class="flex-row flex-deviceinfo"> <div class="flex-row flex-two-info panel panel-default" v-for="row in devicesinfo"> <avatar-upload :img-src.sync=row.img.content :filename.sync="row.img.filename "></avatar-upload> <form class=form-horizontal style="flex: 1"> <div class="form-group auto" style="margin-top: 10px;margin-left: 10px"> <div class=col-sm-6 style="padding-right: 5px" id=userfiles-useDevInf-设备类型> <v-select :value.sync=row.f_devices_type v-model=row.f_devices_type :options=devicetypes placeholder=设备类型 close-on-select></v-select> </div> <div class=col-sm-6 style="padding-right: 5px"> <input type=text class=form-control v-else v-model=row.f_devices_no placeholder=设备编号 v-next-el="{id: $index+\'brand\'}"> </div> </div> <div class="form-group auto" style="margin-left: 10px"> <div class=col-sm-6 style="padding-right: 5px"> <input type=text class=form-control v-model=row.f_brand placeholder=设备品牌 v-next-el="{id: $index+\'devicesmodel\'}" :id="$index+\'brand\'"> </div> <div class=col-sm-6 style="padding-right: 5px"> <input type=text class=form-control v-model=row.f_devices_model placeholder=设备型号 :id="$index+\'devicesmodel\'"> </div> </div> <div class="form-group auto" style="margin-left: 10px"> <div class=col-sm-6 style="padding-right: 5px"> <input type=number class=form-control v-model=row.f_devices_num placeholder=设备数量 :id="$index+\'devicesnum\'"> </div> <div class=col-sm-6 style="padding-right: 5px"> <input type=text class=form-control v-model=row.f_userinfo_id placeholder=户档案编号> </div> <div class=col-sm-6 style="padding-right: 5px"> </div> </div> <div class="form-group auto" style="margin-left: 10px"> <div class=col-sm-6 style="padding-right: 5px"> <button type=button @click="deleteDevice($index, row)" class="btn btn-primary" v-show=edit> 删除 </button> </div> <div class=col-sm-6 style="padding-right: 5px" v-if=!row.id> <button type=button @click=confirm(row,$index) class="btn btn-primary" v-show=edit> 提交 </button> </div> </div> </form> </div> <div class="panel panel-default flex-two-info text-center" style="line-height: 164px"> <img :src=imgadd alt=图片加载失败 class=img-rounded style="width: 60px;padding: 10px;cursor: pointer" @click=addDevice()> </div> </div> '},931:function(e,t,s){var i,o,d={};s(529),i=s(380),o=s(753),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(n.template=o),n.computed||(n.computed={}),Object.keys(d).forEach(function(e){var t=d[e];n.computed[e]=function(){return t}})}});
//# sourceMappingURL=26.js.map