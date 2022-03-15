let ApplyGetSaleParam = {

  install (Vue, options) {
    // 给vue增添对话框显示方法
    Vue.ApplyGetSaleParam = Vue.prototype.$ApplyGetSaleParam = ApplyGetSaleParam
  },

  gasbrands: [],
  prices: [],
  adjustables: [],

  getGasstyle (key) {
    return ApplyGetSaleParam.gasbrands.key
  },
  getGasbrand () {
    return ApplyGetSaleParam.gasbrands
  },
  getAdjustable (val) {
    // 数组去重
    let arr = []
    if (val) {
      ApplyGetSaleParam.adjustables.forEach((item, next) => {
        if (item.value.f_filialeids === val) {
          arr.push(item)
        }
      })
    } else {
      ApplyGetSaleParam.adjustables.forEach((item, next) => {
        arr.push(item)
      })
    }
    let hash = {}
    let result = arr.reduce((item, next) => {
      hash[next.label] ? '' : hash[next.label] = true && item.push(next)
      return item
    }, [])
    return Array.from(new Set(result))
  },
  getOnlyPrice () {
    // 数组去重
    let arr = []
    ApplyGetSaleParam.prices.forEach((item, next) => {
      if (item.f_state === '有效') {
        let value = {
          label: item.f_price_name,
          value: item
        }
        arr.push(value)
      }
    })
    let hash = {}
    let result = arr.reduce((item, next) => {
      hash[next.label] ? '' : hash[next.label] = true && item.push(next)
      return item
    }, [])
    return Array.from(new Set(result))
  },
  getPrice (object) {
    console.log('参数。。。', object)
    // 目前支持三个字段并都有值 f_user_type,f_gasproperties,f_price_type
    if (!object.f_user_type || !object.f_gasproperties || !object.f_price_type) {
      return
    }
    let result = []

    console.log('获取价格。。。', object.filter, ApplyGetSaleParam.prices)

    // 做筛选
    if (object.filter) {
      ApplyGetSaleParam.prices.forEach((item) => {
        if (item.f_state === '有效' && object.f_user_type === item.f_user_type &&
          object.f_gasproperties === item.f_gasproperties &&
          object.f_price_type === item.f_price_type &&
          object.filter === item.f_filiale) {
          console.log('进来了')
          let value = {
            label: item.f_price_name,
            value: item
          }
          result.push(value)
        }
      })
    } else {
      ApplyGetSaleParam.prices.forEach((item) => {
        if (item.f_state === '有效' && object.f_user_type === item.f_user_type && object.f_gasproperties === item.f_gasproperties && object.f_price_type === item.f_price_type) {
          let value = {
            label: item.f_price_name,
            value: item
          }
          console.log('进来了1111')
          result.push(value)
        }
      })
    }
    // 数组去重
    let hash = {}
    result = result.reduce((item, next) => {
      hash[next.label] ? '' : hash[next.label] = true && item.push(next)
      return item
    }, [])
    return Array.from(new Set(result))
  }
}

export default ApplyGetSaleParam
