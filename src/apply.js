import Vue from 'vue'
Vue.config.silent = true
import ApplyGetSaleParam from './stores/ApplyGetSaleParams'
import ApplyLoadParams from './stores/ApplyLoadParams'
/** ****************服务插件*********************/

export default function () {
  Vue.use(ApplyGetSaleParam)
  Vue.use(ApplyLoadParams)
/** ***************************报建模块*********************************/
  /**  报建流程业务 **/
  // 报建流程业务总入口
  Vue.component('exploration-user', (resolve) => { require(['./components/product/process/ExplorationUser'], resolve) })
  // 报建流程业务总入口页面list布局
  Vue.component('exploration-select', (resolve) => { require(['./components/product/process/ExplorationSelect'], resolve) })
  // 业务tab(control层)页
  Vue.component('service-control', (resolve) => { require(['./components/product/process/service/ServiceControl'], resolve) })
  // 显示退回理由tab页
  Vue.component('show-back-reason', (resolve) => { require(['./components/product/process/ShowBackReason'], resolve) })
  // 公共业务显示(view层)页
  Vue.component('service-view', (resolve) => { require(['./components/product/ServiceView'], resolve) })

}
