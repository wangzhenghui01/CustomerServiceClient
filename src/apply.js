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

}
