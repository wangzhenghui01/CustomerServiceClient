import Vue from 'vue'
import { all } from 'vue-client'
Vue.config.silent = true
import ApplyGetSaleParam from './stores/ApplyGetSaleParams'
import ApplyLoadParams from './stores/ApplyLoadParams'
/** ****************服务插件*********************/

export default function () {  V
  Vue.use(ApplyGetSaleParam)
  Vue.use(ApplyLoadParams)
  /** ***************************报建模块*********************************/
  // 报建 总入口

}
