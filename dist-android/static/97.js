webpackJsonp([97],{354:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(2),n=a(i),s=o(13),r=a(s),l=o(4),d=a(l),f=o(3),h=o(1);a(h);e.default={title:"附件",props:["blodid","isremark","isusetype","takeimg","defname","isupload","f_usetype","edit"],data:function(){return{isDelete:"1",fileInfoData:[],useType:"",fileRemark:"",row:{},showz:!0,showx:!0,shown:!0,showa:!0,showb:!0,showc:!0,showd:!0,showe:!0,showf:!0,showg:!0,showh:!0,showi:!0,showj:!0,showk:!0}},methods:{search:function(){function t(){return e.apply(this,arguments)}var e=(0,d.default)(n.default.mark(function t(){var e,o,a,i,s,l,d,h,p,c,w,m,v,y,u,b,g,_,x,U,k,R,L,z,O,I,j,M,F,P,$,T,q,A,D,S,B,C,E,H,J;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="f_process_id = '"+this.blodid+"'",o=new f.HttpResetClass,t.next=4,o.load("POST",this.$androidUtil.getProxyUrl()+"/rs/sql/getimage",{data:{condition:e}},{resolveMsg:null,rejectMsg:"获取图片路径失败"});case 4:return a=t.sent,t.next=7,o.load("POST",this.$androidUtil.getProxyUrl()+"/rs/sql/singleTable_OrderBy",{data:{items:"value,name",tablename:"t_singlevalue",orderitem:"name",condition:"name = '图片地址'"}},{resolveMsg:null,rejectMsg:"获取区县失败!"});case 7:if(i=t.sent,s="",console.log("查询到的图片：",i),i.data[0].value&&(s=i.data[0].value),!(a.data.length>0)){t.next=31;break}for(l=!0,d=!1,h=void 0,t.prev=15,p=(0,r.default)(a.data);!(l=(c=p.next()).done);l=!0)w=c.value,"身份证正面"===w.f_type&&(m=w.f_picture,v=m.substring(m.lastIndexOf(":\\")+2),this.row.f_downloadURL1=s+""+v,this.showa=!1),"身份证反面"===w.f_type&&(y=w.f_picture,u=y.substring(y.lastIndexOf(":\\")+2),this.row.f_downloadURL2=s+""+u,this.showb=!1),"房屋证明材料"===w.f_type&&(b=w.f_picture,g=b.substring(b.lastIndexOf(":\\")+2),this.row.f_downloadURL3=s+""+g,this.showc=!1),"营业执照"===w.f_type&&(_=w.f_picture,x=_.substring(_.lastIndexOf(":\\")+2),this.row.f_downloadURL4=s+""+x,this.showd=!1),"用户报装勘查业务申请表"===w.f_type&&(U=w.f_picture,k=U.substring(U.lastIndexOf(":\\")+2),this.row.f_downloadURL5=s+""+k,this.showe=!1),"燃气报装申请告知单"===w.f_type&&(R=w.f_picture,L=R.substring(R.lastIndexOf(":\\")+2),this.row.f_downloadURL6=s+""+L,this.showf=!1),"供气合同"===w.f_type&&(z=w.f_picture,O=z.substring(z.lastIndexOf(":\\")+2),this.row.f_downloadURL7=s+""+O,this.showg=!1),"工程安装验收及结算单"===w.f_type&&(I=w.f_picture,j=I.substring(I.lastIndexOf(":\\")+2),this.row.f_downloadURL8=s+""+j,this.showh=!1),"点火记录单"===w.f_type&&(M=w.f_picture,F=M.substring(M.lastIndexOf(":\\")+2),this.row.f_downloadURL9=s+""+F,this.showi=!1),"压力试验结果"===w.f_type&&(P=w.f_picture,$=P.substring(P.lastIndexOf(":\\")+2),this.row.f_downloadURL10=s+""+$,this.showj=!1),"用户确认"===w.f_type&&(T=w.f_picture,q=T.substring(T.lastIndexOf(":\\")+2),this.row.f_downloadURL11=s+""+q,this.showk=!1),"用户确认"===w.f_type&&(A=w.f_picture,D=A.substring(A.lastIndexOf(":\\")+2),this.row.f_downloadURL12=s+""+D,this.showk=!1),"现场勘察照片1"===w.f_type&&(S=w.f_picture,B=S.substring(S.lastIndexOf(":\\")+2),this.row.f_downloadURL20=s+""+B,this.showz=!1),"现场勘察照片2"===w.f_type&&(C=w.f_picture,E=C.substring(C.lastIndexOf(":\\")+2),this.row.f_downloadURL21=s+""+E,this.showx=!1),"现场勘察照片3"===w.f_type&&(H=w.f_picture,J=H.substring(H.lastIndexOf(":\\")+2),this.row.f_downloadURL22=s+""+J,this.shown=!1);t.next=23;break;case 19:t.prev=19,t.t0=t.catch(15),d=!0,h=t.t0;case 23:t.prev=23,t.prev=24,!l&&p.return&&p.return();case 26:if(t.prev=26,!d){t.next=29;break}throw h;case 29:return t.finish(26);case 30:return t.finish(23);case 31:case"end":return t.stop()}},t,this,[[15,19,23,31],[24,,26,30]])}));return t}(),confirm:function(t,e,o){var a=this;if(!e)return void this.$showAlert("请先选择图片","warning",1500);if(!o)return void this.$showAlert("请先选择图片","warning",1500);var i={f_type:t,f_content:e,f_filename:o,f_process_id:this.blodid};this.$resetpost(this.$androidUtil.getProxyUrl()+"/rs/logic/saveimage",i).then(function(){console.log("更新成功！"),a.search()})}},ready:function(){function t(){return e.apply(this,arguments)}var e=(0,d.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.search();case 1:case"end":return t.stop()}},t,this)}));return t}(),watch:{blodid:function(t){t&&(console.log("观察blodid",t),this.search(),this.row={},this.showa=!0,this.showb=!0,this.showc=!0,this.showd=!0,this.showe=!0,this.showf=!0,this.showg=!0,this.showh=!0,this.showi=!0,this.showj=!0,this.showk=!0,this.showz=!0,this.showx=!0,this.shown=!0)}},computed:{},events:{}}},800:function(t,e){t.exports=' <div style="background-color: #FFFFFF;min-height:480px"> <div class="form-group col-sm-12" style="height: auto"> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'民用开户申请\'||defname==\'工商开户申请\'||defname==\'资料归档\'"> <center> <div v-if=showa><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content1 :filename.sync=row.filename1></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'身份证正面\',row.content1,row.filename1)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showa> <img :src=row.f_downloadURL1 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL1>预览</a> </div> <p style="font-size: 20px">身份证正面</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'民用开户申请\'||defname==\'工商开户申请\'||defname==\'资料归档\'"> <center> <div v-if=showb><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content2 :filename.sync=row.filename2></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'身份证反面\',row.content2,row.filename2)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showb> <img :src=row.f_downloadURL2 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL2>预览</a> </div> <p style="font-size: 20px">身份证反面</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'民用开户申请\'||defname==\'工商开户申请\'||defname==\'资料归档\'"> <center> <div v-if=showc><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content3 :filename.sync=row.filename3></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'房屋证明材料\',row.content3,row.filename3)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showc> <img :src=row.f_downloadURL3 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL3>预览</a> </div> <p style="font-size: 20px">房屋证明材料</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'工商开户申请\'||(defname==\'资料归档\' && this.selectdata.f_customer_type == \'企业\')"> <center> <div v-if=showd><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content4 :filename.sync=row.filename4></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'营业执照\',row.content4,row.filename4)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showd> <img :src=row.f_downloadURL4 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL4>预览</a> </div> <p style="font-size: 20px">营业执照</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'民用现场勘查\'||defname==\'工商现场勘查\'||defname==\'资料归档\'"> <center> <div v-if=showe><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content5 :filename.sync=row.filename5></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'用户报装勘查业务申请表\',row.content5,row.filename5)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showe> <img :src=row.f_downloadURL5 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL5>预览</a> </div> <p style="font-size: 20px">用户报装勘查业务申请表</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'民用现场勘查\'||defname==\'工商现场勘查\'||defname==\'资料归档\'"> <center> <div v-if=showz><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content20 :filename.sync=row.filename20></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'现场勘察照片1\',row.content20,row.filename20)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showz> <img :src=row.f_downloadURL20 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL20>预览</a> </div> <p style="font-size: 20px">现场勘察照片1</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'民用现场勘查\'||defname==\'工商现场勘查\'||defname==\'资料归档\'"> <center> <div v-if=showx><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content21 :filename.sync=row.filename21></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'现场勘察照片2\',row.content21,row.filename21)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showx> <img :src=row.f_downloadURL21 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL21>预览</a> </div> <p style="font-size: 20px">现场勘察照片2</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'民用现场勘查\'||defname==\'工商现场勘查\'||defname==\'资料归档\'"> <center> <div v-if=shown><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content22 :filename.sync=row.filename22></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'现场勘察照片3\',row.content22,row.filename22)" class="btn btn-primary"> 上传 </button></div> <div v-if=!shown> <img :src=row.f_downloadURL22 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL22>预览</a> </div> <p style="font-size: 20px">现场勘察照片3</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'民用开户受理\'||defname==\'工商开户受理\'||defname==\'资料归档\'"> <center> <div v-if=showf><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content6 :filename.sync=row.filename6></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'燃气报装申请告知单\',row.content6,row.filename6)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showf> <img :src=row.f_downloadURL6 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL6>预览</a> </div> <p style="font-size: 20px">燃气报装申请告知单</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'民用开户受理\'||defname==\'工商开户受理\'||defname==\'资料归档\'"> <center> <div v-if=showg><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content7 :filename.sync=row.filename7></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'供气合同\',row.content7,row.filename7)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showg> <img :src=row.f_downloadURL7 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL7>预览</a> </div> <p style="font-size: 20px">供气合同</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'工程验收\'||defname==\'资料归档\'"> <center> <div v-if=showh><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content8 :filename.sync=row.filename8></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'工程安装验收及结算单\',row.content8,row.filename8)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showh> <img :src=row.f_downloadURL8 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL8>预览</a> </div> <p style="font-size: 20px">工程安装验收及结算单</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'点火\'||defname==\'资料归档\'"> <center> <div v-if=showi><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content9 :filename.sync=row.filename9></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'点火记录单\',row.content9,row.filename9)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showi> <img :src=row.f_downloadURL9 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL9>预览</a> </div> <p style="font-size: 20px">点火记录单</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'户内安装\'||defname==\'安装审核\'||defname==\'资料归档\'"> <center> <div v-if=showj><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content10 :filename.sync=row.filename10></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'压力试验结果\',row.content10,row.filename10)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showj> <img :src=row.f_downloadURL10 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL10>预览</a> </div> <p style="font-size: 20px">压力试验结果</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'户内安装\'||defname==\'安装审核\'||defname==\'资料归档\'"> <center> <div v-if=showk><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content11 :filename.sync=row.filename11></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'用户确认\',row.content11,row.filename11)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showk> <img :src=row.f_downloadURL11 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL11>预览</a> </div> <p style="font-size: 20px">用户确认</p></center> </div> <div class="form-group col-sm-6" style="height: 300px;width: 40%;float: left" v-if="defname==\'户内安装\'||defname==\'安装审核\'||defname==\'资料归档\'"> <center> <div v-if=showk><apply-avatar-upload style="height: 40%;width: 100%" :img-src.sync=row.content12 :filename.sync=row.filename12></apply-avatar-upload> <button v-show=edit type=button @click="confirm(\'用户确认\',row.content11,row.filename12)" class="btn btn-primary"> 上传 </button></div> <div v-if=!showk> <img :src=row.f_downloadURL12 alt=图片加载失败 style="height: 200px;width: 200px"/><hr> <a class="btn btn-primary" target=_blank :href=row.f_downloadURL12>预览</a> </div> <p style="font-size: 20px">用户确认</p></center> </div> </div> </div> '},986:function(t,e,o){var a,i,n={};a=o(354),i=o(800),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(n).forEach(function(t){var e=n[t];s.computed[t]=function(){return e}})}});
//# sourceMappingURL=97.js.map