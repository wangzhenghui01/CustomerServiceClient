<template>

  <div class="auto clearfix">
    <show-back-reason :selectdata="show_data"></show-back-reason>
  </div>

  <service-view v-ref:serviceview :data="show_data" v-if="showview"></service-view>

</template>
<script>
  import Vue from 'vue'
  import {HttpResetClass} from 'vue-client'
  import {getNowDate,isEmpty} from '../../../Util'
  // Date格式化
  Date.prototype.Format = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "H+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

  export default {
    title: '报建流程业务控制层',
    props: ['selectdata'],
    data() {
      return {
        data: null, // 数据库数据，json配置文件数据的数据集合
        json_datas: null, // Json配置文件集合
        showview: false, // 控制显示service-view组件
        show_data: null // 给view层显示的数据
      }
    },
    created () {
      this.refurbish()
    },
    methods: {
      // 组件初始化操作
      refurbish() {
        this.json_datas = this.$workflow_vue
        let sum = 0
        let jsonData = {}
        if (!this.json_datas || !this.json_datas.activitys || this.json_datas.activitys.length == 0) {
          this.$showMessage("网络故障，请刷新页面")
          return
        }
        for (let i = 0; i < this.json_datas.activitys.length; i++) {
          if (this.selectdata.defname == this.json_datas.activitys[i].title) {
            jsonData = this.json_datas.activitys[i]  // 拿到当前节点的json配置信息
            sum++   // 节点名一样的个数
          }
        }
        if (sum == 1) {
          this.data = null
          this.data = jsonData
          // selectdata 填充 data
          this.data = Object.assign({}, this.data, this.selectdata)
          this.initializeJSON()
        } else if (sum == 0) {
          this.$showMessage(`没有在JSON配置文件中找到活动名为:(${this.selectdata.defname})的节点配置`)
        } else {
          this.$showMessage(`在JSON配置文件中找到活动名为:(${this.selectdata.defname})的节点配置:${sum}个`)
        }
      },
      // json配置数据处理
      async initializeJSON() {
        // 有默认值，value就给默认值，没有就是null
        this.data.fields.forEach(item => {
          if (!item.value) {
            if (item.value === 0) {
              item.value = 0
            } else {
              item.value = null
            }
          }
          if (item.default || item.default == 0) {
            item.value = item.default
          }
          if (this.selectdata[item.field]) {
            // 将json字符串格式化赋值给value
            if (String(this.selectdata[item.field]).startsWith("{")) {
              item.value = JSON.parse(this.selectdata[item.field])
              this.selectdata[item.field] = JSON.parse(this.selectdata[item.field])
            } else {
              item.value = this.selectdata[item.field]
            }
          } else {
            if (this.selectdata[item.field] === 0) {
              item.value = 0
            }
          }

          // datepicker 没有值给当时值
          if (item.type === 'datepicker' && !item.value && item.default) {
            item.value = new Date().Format('yyyy-MM-dd HH:mm:ss')
          }

          // 如果配置类型为select,优先从参数列表获取options
          if (item.type === 'select') {
            let temp = null

            temp = this.$appdata.getParam(item.label)

            if (temp && temp.length > 0 && item.label) {
              item.options = temp
            } else {
              if (item.paramLabel) {
                temp = this.$appdata.getParam(item.paramLabel)
                if (temp && temp.length > 0) {
                  item.options = temp
                }
              }
            }
          }
        })

        // 控制组件
        if (this.data.components) {
          this.data.components.forEach(item => {
            item.mark = 0
          })
        }

        // 初始化 fields 可对数据进行特殊处理
        this.initializeFields()

        // 初始化 buttons_fields
        for (let i = 0; i < this.data.buttons.length; i++) {
          // 下发按钮相关配置
          if (this.data.buttons[i].button_name === '下发') {
            if (this.data.buttons[i].button_fields && this.data.buttons[i].button_fields.length === 1) {
              if (this.data.buttons[i].source){
                let http = new HttpResetClass()
                let res = await http.load('POST', 'rs/search', {
                  source: this.data.buttons[i].source,
                  userid: this.$login.f.id
                }, {resolveMsg: null, rejectMsg: null})

                let options = []
                for (let i = 0; i < res.data.length; i++) {
                  options.push(
                    {
                      "label": res.data[i].name,
                      "value": res.data[i].id
                    }
                  )
                }
                this.data.buttons[i].button_fields[0]['options'] = options
              } else {
                this.$showMessage("请配置获取人员表达式")
              }
            } else {
              this.$showMessage("下发按钮必须满足 当且仅当一个字段")
            }
          }
          if (this.data.buttons[i].button_fields) {
            this.data.buttons[i].button_fields.forEach(x => {
              // 如果配置类型为select,优先从参数列表获取options
              if (x.type === 'select' && this.$appdata.getParam(x.label)) {
                x.options = this.$appdata.getParam(x.label).trim()
              }
            })
          }
        }

        // onetomany 数据获取
        if (this.data.onetomany) {
          for (let index = 0; index < this.data.onetomany.length; index++) {
            let res = null
            if (!this.data.onetomany[index].queryEvent || this.data.onetomany[index].queryEvent === 'default'){
              let http = new HttpResetClass()
              let data = {
                tablename: this.data.onetomany[index].tables[0],
                condition: `f_process_id='${this.selectdata.f_process_id}'`
              }
              res = await http.load('POST', 'rs/sql/singleTable', {data: data}, {
                resolveMsg: null,
                rejectMsg: 'onetomany查询失败'
              })
            } else {
              res = this[this.data.onetomany[index].queryEvent]()
            }

            // 初始化 onetomany
            this.data.onetomany[index].rows = res.data

            // 初始化onetomany中的fields
            for (let j = 0; j < this.data.onetomany[index].fields.length; j++) {
              if (!this.data.onetomany[index].fields[j].value) {
                if (this.data.onetomany[index].fields[j].value === 0) {
                  this.data.onetomany[index].fields[j].value = 0
                } else {
                  this.data.onetomany[index].fields[j].value = null
                }
              }
              if (this.data.onetomany[index].fields[j].default || this.data.onetomany[index].fields[j].default == 0) {
                this.data.onetomany[index].fields[j].value = this.data.onetomany[index].fields[j].default
              }
              // 如果配置类型为select,优先从参数列表获取options
              if (this.data.onetomany[index].fields[j].type === 'select') {
                let temp = Vue.$appdata.getParam(this.data.onetomany[index].fields[j].label)
                if (temp && temp.length > 0) {
                  this.data.onetomany[index].fields[j].options = temp
                }
              }
            }
          }
        }

        // 消除双向绑定，避免子组件（显示层）数据更改，父组件（控制层）也更改
        let temp = JSON.parse(JSON.stringify(this.data))

        this.show_data = temp
        this.$nextTick(() => {
          this.showview = true
        })
      },
      // 初始化fields值
      initializeFields() {

      },
      // 金额转大写
      smalltoBIG(n) {
        let fraction = ['角', '分'];
        let digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        let unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
        let head = n < 0 ? '欠' : '';
        n = Math.abs(n);

        let s = '';

        for (var i = 0; i < fraction.length; i++) {
          s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);

        for (var i = 0; i < unit[0].length && n > 0; i++) {
          let p = '';
          for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
          }
          s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
      },
      getLableValue(label) {
        for (const item of this.show_data.fields) {
          if (item.label === label && item.type !== 'number') {
            return item.value || ''
          }
          if (item.label === label && item.type === 'number') {
            return item.value || 0
          }
        }
      },
      setLabelValue(label, value) {
        for (const item of this.show_data.fields) {
          if (item.label === label) {
            item.value = value
          }
        }
      },
      async buttonBefore(model) {
        if (
          model.button.button_name === '提交' &&
          model.defname === '收费' &&
          (
            model.f_apply_type === '散户报建' ||
            model.f_apply_type === '工业户报建' ||
            model.f_apply_type === '商业户报建'
          ) &&
          model.f_surplus_money > 0
        ) {
          throw '未结金额大于0，无法提交！！！'
        }
        if (model.defname === '施工' && model.button.button_name === '提交') {
          if (model.f_apply_type === '开发商集体报建' && this.getLableValue('未安装户数') > 0) {
            throw `还有${this.getLableValue('未安装户数')}户未安装，无法提交`
          }
          let http = new HttpResetClass()
          let data = {
            condition: `ui.f_process_id = '${model.f_process_id}' and uf.f_table_state = '待开通'`
          }
          let res = await http.load('POST', 'rs/sql/notInstalled', {data: data}, {resolveMsg: null, rejectMsg: null})
          if (res.data[0].num > 0) {
            throw `还有${res.data[0].num}户未安装，无法提交`
          }
        }
        return model
      },
      // 地址类型变化
      addressType() {
        for (const item of this.show_data.fields) {
          if (item.label === '小区' && this.show_data.f_address_type === '民用地址') {
            item.required = true
          }
          if (item.label === '小区' && this.show_data.f_address_type === '特殊地址') {
            item.required = false
          }
          if (
            (
              item.label === '楼号' ||
              item.label === '单元' ||
              item.label === '楼层' ||
              item.label === '门牌号'
            ) && this.show_data.f_address_type === '民用地址'
          ) {
            item.required = true
            item.hidden = false
            item.value = null
          }
          if (
            (
              item.label === '楼号' ||
              item.label === '单元' ||
              item.label === '楼层' ||
              item.label === '门牌号'
            ) && this.show_data.f_address_type === '特殊地址'
          ) {
            item.required = false
            item.hidden = true
            item.value = null
          }
        }
      },
      async getStreetList () {
        let data = {
          tablename: 't_street',
          condition: `f_filialeid = ${this.$login.f.orgid} and f_street is not null`
        }

        let res = await this.$resetpost(
          `rs/sql/singleTable`,
          {data: data},
          {resolveMsg: null, rejectMsg: '街道查询失败，请重新进入！！！'}
        )

        let streetList = []

        res.data.forEach(item => {
          streetList.push({
            label: item.f_street,
            value: item.f_street
          })
        })

        for (const item of this.show_data.fields) {
          if (item.label === '街道') {
            item.options = streetList
          }
        }
      },
      async getAreaList () {
        let data = {
          tablename: 't_area',
          condition: `f_filialeid = ${this.$login.f.orgid} and f_street = '${this.getLableValue('街道')}'`
        }

        let res = await this.$resetpost(
          `rs/sql/singleTable`,
          {data: data},
          {resolveMsg: null, rejectMsg: '小区查询失败，请重新进入！！！'}
        )

        let areaList = []

        res.data.forEach(item => {
          areaList.push({
            label: item.f_residential_area,
            value: item.f_residential_area
          })
        })

        for (const item of this.show_data.fields) {
          if (item.label === '小区') {
            item.options = areaList
          }
        }
      }
    },
    events: {
      'openAddModel'(index) {
      },
      // 获取view层button事件/
      async 'button'(model) {
        // 修改提交数据
        model = Object.assign({}, this.selectdata, model)
        // 点击重置按钮就重置数据
        if (model.button.button_name === '重置') {
          this.$dispatch('breakControl', this.data)
          return
        }

        // 提交前置
        try {
          model = await this.buttonBefore(model)
        } catch (e) {
          this.$showAlert(e, 'warning', 3000)
          return
        }

        let http = new HttpResetClass()
        let requestData = {
          tables: this.data.tables,
          start_activity: this.$workflow_vue.start_activity,
          model: model,
          loginUser: this.$login.f,
          workflow_xmlfilename: this.$workflow_vue.workflow_xmlfilename
        }
        // 下发，提交，保存，退回通用业务后台处理logic
        let url = 'rs/logic/ApplyProductService'
        let res = await http.load('POST', url, {data: requestData}, {resolveMsg: null, rejectMsg: '数据保存失败'})

        if (res.data.code == 200) {
          this.$dispatch('search')
        } else {
          if (res.data.msg) {
            this.$showMessage(res.data.msg)
          }
        }
      },
      async 'initializtionView'() {
        this.addressType()

        if (this.show_data.defname === '用户受理') {
          await this.getStreetList()
        }
      },
      // 失去焦点出触发事件
      async 'onchange'(index) {
        console.log('失去焦点')
        // ========================= 武安 =================================
        if (this.show_data.defname === '用户受理'){
          if (this.show_data.fields[index].label === '地址类型'){
            this.addressType()
          }
          if (this.show_data.fields[index].label === '街道') {
            this.setLabelValue('小区', '')
            await this.getAreaList()
          }
          // 地址拼接
          if (
            this.show_data.fields[index].label === '街道' ||
            this.show_data.fields[index].label === '小区' ||
            this.show_data.fields[index].label === '楼号' ||
            this.show_data.fields[index].label === '单元' ||
            this.show_data.fields[index].label === '楼层' ||
            this.show_data.fields[index].label === '门牌号'
          ) {
            let f_address = null
            if (this.show_data.f_address_type !== '民用地址') {
              f_address = this.getLableValue('街道') + this.getLableValue('小区')
            } else {
              f_address = this.getLableValue('街道') +
                this.getLableValue('小区') +
                this.getLableValue('楼号') +
                (isEmpty(this.getLableValue('楼号')) ? '' : '号楼') +
                this.getLableValue('单元') +
                (isEmpty(this.getLableValue('单元')) ? '' : '单元') +
                this.getLableValue('楼层') +
                (isEmpty(this.getLableValue('楼层')) ? '' : '层') +
                this.getLableValue('门牌号') +
                (isEmpty(this.getLableValue('门牌号')) ? '' : '室')
            }
            this.setLabelValue('地址',f_address)
          }
        }
        if (this.show_data.defname === '竣工验收') {
          if (this.show_data.fields[index].label === '验收是否合格'){
            for (const button of this.show_data.buttons) {
              if (this.show_data.fields[index].value === '否' && button.button_name === '退回') {
                button.hidden = false
              } else {
                button.hidden = true
              }
            }
          }
        }
        if (this.show_data.defname === '合同签订') {
          if (this.show_data.fields[index].label === '合同编号') {
            if (!isEmpty(this.show_data.fields[index].value)) {
              let http = new HttpResetClass()
              let data = {
                tablename: 't_apply',
                condition: `f_contract_number='${this.show_data.fields[index].value}'`
              }
              let res = await http.load('POST', 'rs/sql/singleTable', {data: data}, {
                resolveMsg: null,
                rejectMsg: '合同编号查重失败'
              })
              if (res.data.length > 0) {
                this.show_data.fields[index].value = null
                this.$showAlert('合同编号已存在！！！', 'warning', 3000)
              }
            }
          }
          if (this.show_data.fields[index].label === '单价（户）') {
            let http = new HttpResetClass()
            let data = {
              num1: this.getLableValue(this.show_data.fields[index].label),
              num2: this.getLableValue('户数'),
              operator: '*'
            }
            try {
              let res = await http.load('POST', 'rs/logic/compute', {data: data}, {
                resolveMsg: null,
                rejectMsg: null
              })
              data = {
                num1: res.data,
                num2: this.getLableValue('其他费用'),
                operator: '+'
              }
              res = await http.load('POST', 'rs/logic/compute', {data: data}, {
                resolveMsg: null,
                rejectMsg: null
              })
              this.setLabelValue('合同金额',res.data)
            } catch (e) {
              this.$showAlert(e.data.msg, 'warning', 3000)
            }
          }
          if (this.show_data.fields[index].label === '其他费用') {
            let http = new HttpResetClass()
            let data = {
              num1: this.getLableValue(this.show_data.fields[index].label),
              num2: this.getLableValue('合同金额'),
              operator: '+'
            }
            try {
              let res = await http.load('POST', 'rs/logic/compute', {data: data}, {
                resolveMsg: null,
                rejectMsg: null
              })
              this.setLabelValue('合同金额',res.data)
            } catch (e) {
              this.$showAlert(e.data.msg, 'warning', 3000)
            }
          }
        }
        // ========================= 武安 =================================
        // 号码检测
        if (this.show_data.fields[index].label === '电话号码') {
          let phone = this.show_data.fields[index].value
          // 电话号码效验
          if (!(/^1[3456789]\d{9}$/.test(phone))) {
            this.show_data.fields[index].value = ""
            this.$showAlert('电话号码格式不正确，请重新输入。', 'info', 2000)
          }
        }
        //时间提醒
        if (this.show_data.fields[index].label.includes("时间") || this.show_data.fields[index].type === 'datepicker') {
          let setTime = this.show_data.fields[index].value
          let nowTime = new Date().Format("yyyy-MM-dd HH:mm:ss")
          if (nowTime >= setTime) {
            this.$showMessage("请注意，当前节点时间/工期已过期！")
          }
        }
      },
      // input值发生变化
      async 'oninput'(index) {

      },
      // 错误事件
      error_check(index) {
        // 时间格式检测
        if (this.show_data.fields[index].type == 'datepicker') {
          let dateRe = new RegExp(/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/)
          let datetimeRe = new RegExp(/((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29))\s([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/)
          if (datetimeRe.test(this.show_data.fields[index].value) && this.show_data.fields[index].value.trim().length == 19 && this.show_data.fields[index].fullsize) {
            this.show_data.fields[index].error.flag = false
          } else if (dateRe.test(this.show_data.fields[index].value) && this.show_data.fields[index].value.trim().length == 10) {
            this.show_data.fields[index].error.flag = false
          } else {
            if (this.show_data.fields[index].fullsize) {
              this.show_data.fields[index].error = Object.assign({}, this.show_data.fields[index].error)
              this.show_data.fields[index].error.msg = this.show_data.fields[index].error.msg ? this.show_data.fields[index].error.msg : '时间格式如：2019-05-02 09:23:21'
              this.$showAlert(this.show_data.fields[index].label + '格式错误' + this.show_data.fields[index].error.msg, 'warning', 3000)
              this.show_data.fields[index].error.flag = true
              this.show_data.fields[index].value = ''
            } else {
              this.show_data.fields[index].error = Object.assign({}, this.show_data.fields[index].error)
              this.show_data.fields[index].error.msg = this.show_data.fields[index].error.msg ? this.show_data.fields[index].error.msg : '时间格式如：2019-05-02'
              this.$showAlert(this.show_data.fields[index].label + '格式错误' + this.show_data.fields[index].error.msg, 'warning', 3000)
              this.show_data.fields[index].error.flag = true
              this.show_data.fields[index].value = ''
            }

          }
        }
      },
      // onetomany模态框默认监听监听事件
      async 'onetomanydelete'(i, j) {
        console.log('默认删除')
        let http = new HttpResetClass()
        let data = {
          table: this.show_data.onetomany[i].tables[0],
          row: this.show_data.onetomany[i].rows[j]
        }
        let res = await http.load('POST', 'rs/logic/onetomanyDefaultDeleteEvent', {data: data}, {
          resolveMsg: null,
          rejectMsg: '删除失败'
        })

        if (res.data <= 0){
          this.$showMessage('删除失败')
          return
        }

        this.$dispatch('breakControl', this.show_data)
      },
      async 'onetomanyadd'(index) {

        let data = {
          f_process_id : this.show_data.f_process_id
        }
        this.show_data.onetomany[index].fields.forEach(item => {
          data[item.field] = item.value
        })
        let res = await this.$resetpost(
          `rs/entity/${this.show_data.onetomany[index].tables[0]}`,
          data
        )
        this.$dispatch('breakControl', this.show_data)
      },
      async 'onetomanyupdate'(i, j) {
        let onetomany = this.show_data.onetomany[i]
        let data = onetomany.rows[j]

        onetomany.fields.forEach(item => {
          data[item.field] = item.value
        })
        let res = await this.$resetpost(
          `rs/entity/${this.show_data.onetomany[i].tables[0]}`,
          data
        )

        this.$dispatch('breakControl', this.show_data)
      },
      // onetomany模态框监听事件
      async 'onchange_modal'(index, i) {
      },
      async 'oninput_modal'(index, i) {
      }
    },
    watch: {
    }
  }
</script>
<style scoped>
  /*清除model中的浮动*/
  .clearfix:after,.clearfix:before{
    display: table;
  }
  .clearfix:after{
    clear: both;
  }
</style>
