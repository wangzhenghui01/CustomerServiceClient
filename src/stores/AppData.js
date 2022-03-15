let DataStore = {
  params: {},
  singleValues: {},
  gasstyles: {},
  gasbrands: [],
  price: [],
  adjustables: [],

  getParam (key) {
    return this.params[key]
  },
  getSingleValue (key) {
    return this.singleValues[key]
  },
  getGasstyle (key) {
    return this.gasbrands.key
  },
  getGasbrand () {
    return this.gasbrands
  },
  getAdjustable (val) {
    // 数组去重
    let arr = []
    if (val) {
      this.adjustables.forEach((item, next) => {
        if (item.value.f_filiale === val) {
          arr.push(item)
        }
      })
    } else {
      this.adjustables.forEach((item, next) => {
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
    this.price.forEach((item, next) => {
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
    // 目前支持三个字段并都有值 f_user_type,f_gasproperties,f_price_type
    if (!object.f_user_type || !object.f_gasproperties || !object.f_price_type) {
      return
    }
    let result = []
    // 做筛选
    if (object.filter) {
      this.price.forEach((item) => {
        if (item.f_state === '有效' && object.f_user_type === item.f_user_type &&
        object.f_gasproperties === item.f_gasproperties &&
        object.f_price_type === item.f_price_type &&
        object.filter === item.f_filiale) {
          let value = {
            label: item.f_price_name,
            value: item
          }
          result.push(value)
        }
      })
    } else {
      this.price.forEach((item) => {
        if (item.f_state === '有效' && object.f_user_type === item.f_user_type && object.f_gasproperties === item.f_gasproperties && object.f_price_type === item.f_price_type) {
          let value = {
            label: item.f_price_name,
            value: item
          }
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

export default DataStore
