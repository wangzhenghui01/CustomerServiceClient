<template>
  <div class="flex-row">
    <div class="basic-main">
      <div :class="showData ? 'top' : 'auto'" v-show="showQuery">
        <exploration-select v-ref:query :show-data="showData"></exploration-select>
      </div>
      <div v-if="showtotal" style="height: 89%">
        <tabset v-ref:tabs :close="false">
          <tab :header='selectdata.defname'>
            <service-control  v-ref:service :selectdata="selectdata"></service-control>
          </tab>
          <tab header='附件'>
            <apply-upload :blodid="selectdata.f_process_id"
                          :isupload = "true"
                          :isdelete="true"
                          :isusetype="true"
                          :isremark = "true"
                          :takeimg="false"
                          :issearch="true"
                          :defname="selectdata.defname">
            </apply-upload>
          </tab>
        </tabset>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {HttpResetClass} from 'vue-client'
  export default {
    title: '报建流程',
    data () {
      return {
        showQuery: true,       // 控制查询页
        showData: true,     // 控制列表数据
        showtotal: false, // 详情显示
        selectdata: {},
        xmlname: ''        // 配置文件名
      }
    },
    created () {
    },
    methods: {
      // 获取页面配置json文件
      async loadName () {
        let http = new HttpResetClass()
        let xmldata = {
          data: this.$login.f,
          workname: this.selectdata.processname
        }
        console.log("=================",xmldata.workname)
        let res = await http.load('POST', 'rs/logic/ApplyGetConfigs', {data: xmldata}, {resolveMsg: null, rejectMsg: null})

        if (res.data.code && res.data.code === 200) {
          Vue.prototype.$workflow_vue = res.data.workflow_vue
        } else {
          this.$showMessage('获取报建配置失败,原因:' + res.data.msg)
          return
        }
      }
    },
    events: {
      'onMessage' (data) {
        console.log('接收消息')
        console.log(data)
        if (data.type === 'apply-task') {
          this.$refs.query.$refs.cp.$refs.cri.search()
        }
      },
      // 刷新控制层
      async 'breakControl' (servicedata) {

        if (servicedata.id) {
          let http = new HttpResetClass()
          let data = {
            condition: `u.id = ${servicedata.id}`,
            data: {
              id: this.$login.f.id,
              orgid: this.$login.f.orgid
            }
          }
          let res = await http.load('POST', 'rs/sql/checkuser', {data: data}, {resolveMsg: null, rejectMsg: '数据更新失败，请手查询更新！！！'})

          this.selectdata = res.data[0]
        } else {
          this.selectdata = servicedata
        }

        this.showtotal = false
        this.$nextTick(() => {
          this.showtotal = true
        })

      },
      // 初始化
      async 'apply' (val) {
        this.showtotal = false
        this.selectdata = val

        // if (this.selectdata.f_apply_type === '集体报建') {
        //   this.xmlname = '集体报建流程'
        // } else if (this.selectdata.f_apply_type === '散户报建') {
        //   this.xmlname = '散户报建流程'
        // } else {
        //   this.$showMessage('暂无此类报装')
        //   return
        // }

        // 次方法必须同步执行，否则后续会出问题
        // 获取页面json配置文件
        await this.loadName()

        // 显示详细
        this.showtotal = true
        // 关闭列表数据
        this.showData = false
        // 关闭分页
        this.$refs.query.$refs.cp.pager = false
      },
      'search' () {
        // 关闭详细
        this.showtotal = false
        // 显示列表数据
        this.showData = true
        // 显示分页
        this.$refs.query.$refs.cp.pager = true
        // 调用查询
        this.$refs.query.$refs.cp.$refs.cri.search()
      }
    },
    watch: {
    }
  }
</script>
