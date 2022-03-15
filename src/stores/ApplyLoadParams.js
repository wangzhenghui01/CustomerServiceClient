import Vue from 'vue'
import ApplyGetSaleParam from './ApplyGetSaleParams'
import  {HttpResetClass} from 'vue-client'

let loadParamGen = async function () {
  console.log('开始加载参数，。。', ApplyGetSaleParam.gasbrands)
  if (ApplyGetSaleParam.gasbrands.length === 0 && ApplyGetSaleParam.prices.length === 0 && ApplyGetSaleParam.adjustables.length === 0 ) {
    let http = new HttpResetClass()
    let getParams = await http.load('POST','rs/logic/getSaleInitData', {data:{f_filialeids:Vue.$login.f.f_orgid}}, {resolveMsg: null, rejectMsg: null})
    console.log('获取营收参数', getParams)
    if (getParams.data) {
      ApplyLoadParams.organizeData(getParams.data)
    }
  }
}

let ApplyLoadParams = {

  install (Vue, options) {
    // 给vue增添对话框显示方法
    Vue.ApplyLoadParams = Vue.prototype.$ApplyLoadParams = ApplyLoadParams
  },

  async loadParam () {
    await loadParamGen()
  },

  // 开启卡监听
  organizeData (fromSystem) {
    console.log('接受System中返回的参数进行组织', fromSystem)
    fromSystem.gasbrands.forEach((item, index) => {
      ApplyGetSaleParam.gasbrands[index] = {}
      ApplyGetSaleParam.gasbrands[index].label = item.f_meter_brand
      let gasmodel = []
      item.gasmodel.forEach((item, index) => {
        gasmodel[index] = {}
        gasmodel[index].label = item.f_meter_style + item.f_type
        gasmodel[index].value = item
      })
      item.gasmodel = gasmodel
      ApplyGetSaleParam.gasbrands[index].value = item
    })

    fromSystem.adjustable.forEach((item, index) => {
      ApplyGetSaleParam.adjustables[index] = {}
      ApplyGetSaleParam.adjustables[index].label = item.f_adjustable_name
      ApplyGetSaleParam.adjustables[index].value = item
    })
    ApplyGetSaleParam.prices = [...ApplyGetSaleParam.prices, ...fromSystem.price]
    console.log('参数组织完毕', ApplyGetSaleParam)
  }

}

export default ApplyLoadParams
