import Vue from 'vue'
import co from 'co'
import {HttpResetClass} from 'vue-client'

let postGen = function * (self, pageNo) {
  self.seaching=true
  yield self.http.load('POST',
    `${self.url}?pageNo=${pageNo}&pageSize=${self.pageSize}`,
    {data: self.params},
    {aoteEncrypt: self.aoteEncrypt, encryKey: self.encryKey,resolveMsg: null, rejectMsg: null}
  ).then(
    (response) => {
      self.seaching=false
      self.state = '正确'
      self.rows = response.data
      if(self.isBlank == true){
        let size = response.data.length % self.pageSize
        if(pageNo == self.totalPage) {
          for (let i = 1; i <= self.pageSize - size; i++) {
            self.rows.push({isNuN: 'true'})
          }
        }
      }
      self.pageIndex = pageNo
    }
  ).catch(
    (error) => {
      self.seaching=false
      self.state = '错误'
      self.error = JSON.stringify(error)
      throw error
    }
  )
}

export default class PagedListLogic {
  //正查询标志位
  seaching=false
  // 用url及pageSize构造
  // url - 加载数据的url
  // pageSize - 每页数据个数
  // params - 除正常查询条件外，附加到后台sql中的参数，可以为空。格式为:{参数名:参数值}
  // sums - 需要求和的字段。格式为:{参数名:参数值}
  // isBlank - 是否使用空行填充表格，值为true或者 false
  // comp - 调用时的组件名，方便调试
  constructor (url, pageSize, params, sums, isBlank, comp, aoteEncrypt, encryKey) {
    this.url = url
    this.pageSize = pageSize
    this.pageIndex = 0
    this.isBlank = isBlank
    this.aoteEncrypt = aoteEncrypt
    this.encryKey = encryKey

    // 登记组件名
    if (comp) {
      this.comp = comp
    }

    // 登记参数源码，查询前，执行参数源码，获得实际参数值
    if (params) {
      this.paramSource = params
    }
    // 查询时，提交后台的参数值
    this.params = {}

    // 求和的字段
    this.sums = sums
    // 符合条件的数据总数
    this.count = 0
    // 符合条件的数据总页数
    this.totalPage = 0
    // 加载过来的数据
    this.rows = []
    // 状态，字符串型，包括：初始(默认)，查询，错误，正确
    this.state = '初始'
    // 出现错误时的错误内容，没找到符合条件的数据当错误处理
    this.error = '请输入条件, 进行查询'

    // 每次加载所需要的条件
    this.condition = null
    this.model = null
    this.condValue = null
    this.http = new HttpResetClass()

    //初始填充数据空行
    //isNuN标记本行是否为空行
    if(isBlank == true) {
      for (let i = 1; i <= pageSize; i++) {
        this.rows.push({isNuN: 'true'})
      }
    }
  }

  // 执行查询过程，加载数据汇总信息
  // condition - 查询组件产生的查询条件
  // model - 查询组件收集到的输入数据
  // condValue - 交给后台的查询条件，可以为空
  search (condition, model, condValue) {
    // 保存条件，以便加载某页时可以直接调用
    this.condition = condition
    this.model = model
    this.condValue = condValue
    this.state = '查询'
    this.procParams()
    this.seaching=true
    if (this.sums) {
      let totals = []
      for (let key in this.sums) {
        totals.push(key)
        var param = {data: this.params, sums: totals}
      }
    } else {
      param = {data: this.params}
    }
    // 发生请求时，不进行任何提醒
    return this.http.load('POST', `${this.url}`, param, {resolveMsg: null, rejectMsg: null, aoteEncrypt: this.aoteEncrypt, encryKey: this.encryKey}).then(
      (response) => {
        this.seaching=false
        this.seaching=false
        this.state = '正确'
        this.rows = response.data
        this.count = response.data.length
      }
    ).catch(
      (error) => {
        this.seaching=false
        if (error.status !== 603) {
          this.state = '错误'
          this.error = `提取数据出错，错误码: ${error.status}, 错误信息：${error.data}，组件：${this.comp}`
        }
      }
    )
  }

  // 重新进行查询
  refresh () {
    this.search(this.condition, this.model, this.condValue)
  }

  // 加载一页数据
  loadPage (pageNo) {
    this.state = '查询'
    let gen = postGen(this, pageNo)
    let redata=co(gen)
    return redata
  }

  // 处理查询参数，把condition以及condValue附加到参数列表中，condValue指后台查询条件
  procParams () {
    this.params.condition = this.condition
    if (this.condValue) {
      this.params.condValue = this.condValue
    }
    if (!this.paramSource) {
      return
    }
    // 对附加参数进行计算
    for (let name in this.paramSource) {
      /*eslint-disable */
      this.params[name] = eval(this.paramSource[name])
      /*eslint-enable */
    }
  }

  // 从后台删除数据，删除后，刷新界面
  remove (url, data) {
    Vue.delete(url, data).then(
      () => {
        this.refresh()
      }
    )
  }
}
