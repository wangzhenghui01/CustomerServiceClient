webpackJsonp([68],{362:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(3);e.default={title:"报建业务信息1",data:function(){return{showbtn:!1,model:new o.PagedList("rs/sql/checkuser",9,{data:{id:this.$login.f.id,fengongsi:this.$login.f.f_fengongsi,uid:"3"}})}},ready:function(){this.$refs.cp.$refs.cri.search(),this.$refs.cp.pager=!1},methods:{clifun:function(t){this.$dispatch("showline",t)}}}},739:function(t,e){t.exports=' <div class="d1 flex"> <div class="left col-sm-12"> <criteria-paged :model=model v-ref:cp> <criteria partial=criteria @condition-changed=search v-ref:cri> <form novalidate class="" partial> </form> </criteria> <data-grid :model=model partial=list v-ref:grid class=data-grid is-fixed=false style=overflow-x:auto> <template partial=body> <tr> <td> <nobr>{{$index+1}}</nobr> </td> <td><nobr>{{row.defname}}</nobr></td> <td><nobr>{{row.f_user_name}}</nobr></td> <td><nobr>{{row.f_residential_area}}</nobr></td> <td><nobr>{{row.f_address}}</nobr></td> <td><nobr>{{row.f_apply_date}}</nobr></td> <td><nobr>{{row.f_apply_count}}</nobr> </td> </tr> </template> </data-grid> </criteria-paged> </div> </div> '},913:function(t,e,r){var o,i,a={};o=r(362),i=r(739),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var d="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(d.template=i),d.computed||(d.computed={}),Object.keys(a).forEach(function(t){var e=a[t];d.computed[t]=function(){return e}})}});
//# sourceMappingURL=68.js.map