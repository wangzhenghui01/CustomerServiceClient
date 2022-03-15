<template>
  <div style="height: auto;text-align: center" class="col-sm-12" v-if="data != null">
      <span style="color: red;font-family: 微软雅黑;font-weight: bold;font-size: 18px">    请注意被退回原因为:{{data.f_back_reason}} 退回时间：{{data.f_date}}</span>
  </div>
</template>
<script>
  import {HttpResetClass} from 'vue-client'

  export default {
    title: '退回原因展示',
    props: ['selectdata'],
    data () {
      return {
        data: null
      }
    },
    async created () {
      if (this.selectdata) {
        let http = new HttpResetClass()
        let data = {
          tablename: 't_backcause',
          condition: `actid = '${this.selectdata.actid}' and f_process_id='${this.selectdata.f_process_id}'`
        }
        let res = await http.load('POST', 'rs/sql/singleTable', {data: data}, {
          resolveMsg: null,
          rejectMsg: null
        })
        this.data = res.data[0]
      }
    }
  }
</script>
