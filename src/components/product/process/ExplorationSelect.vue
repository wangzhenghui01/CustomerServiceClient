<template>
  <div>
    <criteria-paged :model="model" v-ref:cp>
      <criteria partial='criteria' @condition-changed='search' v-ref:cri>
        <div novalidate class="form-horizontal select-overspread container-fluid auto" partial>
            <div class="row">
              <div class="form-group col-sm-3">
                <label class="font_normal_body">项目名称1：</label>
                <input type="text" class="input_search" v-model="model.f_entry_name"
                       v-on:keyup.enter="$parent.$parent.search()" condition="f_entry_name like '%{}%'" placeholder='项目名称'>
              </div>
              <div class="form-group col-sm-3">
                <label class="font_normal_body">客户名称：</label>
                <input type="text" class="input_search" v-model="model.f_user_name"
                       v-on:keyup.enter="$parent.$parent.search()" condition="f_user_name like '%{}%'" placeholder='客户名称'>
              </div>
              <div class="form-group col-sm-3">
                <label class="font_normal_body">联&ensp;系&ensp;人：</label>
                <input type="text" class="input_search" v-model="model.f_contact" style="width: 60%"
                       v-on:keyup.enter="$parent.$parent.search()" condition="f_contact like '%{}%'" placeholder='联系人'>
              </div>
              <div class="form-group col-sm-5 button-range">
                <button class="button_new button_spacing" style="width: max-content"
                        @click="$parent.$parent.showModal = !$parent.$parent.showModal">工程发起</button>
                <button class="button_search button_spacing" @click="$parent.$parent.search()" v-el:cx>查询</button>
                <button class="button_clear button_spacing"  @click="$parent.$parent.clear()">清空</button>
                <div
                  :class="{'button_shrink_top':$parent.$parent.criteriaShow,'button_shrink_bottom':!$parent.$parent.criteriaShow}"
                  @click="$parent.$parent.criteriaShow = !$parent.$parent.criteriaShow"
                  class="button_spacing"
                  style="float: right">
                </div>
              </div>
            </div>
            <div class="row" v-show="$parent.$parent.criteriaShow">
              <div class="form-group col-sm-3">
                <label class="font_normal_body">报建编号：</label>
                <input type="text" class="input_search" placeholder='报建编号' v-model="model.f_apply_num"
                       v-on:keyup.enter="$parent.$parent.search()"
                       condition="f_apply_num = '{}'">
              </div>
              <div class="form-group col-sm-3">
                <label class="font_normal_body">合同编号：</label>
                <input type="text" class="input_search" placeholder='合同编号' v-model="model.f_contract_number"
                       v-on:keyup.enter="$parent.$parent.search()"
                       condition="f_contract_number = '{}'">
              </div>
              <div class="form-group col-sm-3">
                <label class="font_normal_body">报建类型：</label>
                <v-select
                  v-model="model.f_apply_type"
                  placeholder='报建类型'
                  condition="f_apply_type like '%{}%'"
                  :value.sync="model.f_apply_type"
                  :options='$parent.$parent.applytype'
                  class="select select_list"
                  :value-single="true"
                  @change="$parent.$parent.applyTypeChange()"
                  close-on-select ></v-select>
              </div>
              <div class="form-group col-sm-3">
                <label class="font_normal_body">办理环节：</label>
                <v-select
                  v-model="model.defname"
                  placeholder='办理环节'
                  condition="defname = '{}'"
                  :value.sync="model.defname"
                  :options='$parent.$parent.defnames'
                  class="select select_list"
                  :value-single="true"
                  close-on-select ></v-select>
              </div>
              <div class="form-group col-sm-3">
                <label class="font_normal_body">联系电话：</label>
                <input type="text" class="input_search" placeholder='联系电话' v-model="model.f_phone"
                       v-on:keyup.enter="$parent.$parent.search()"
                       condition="f_phone like '%{}%'">
              </div>
              <div class="form-group col-sm-3">
                <label class="font_normal_body">用户地址：</label>
                <input type="text" class="input_search" placeholder='用户地址' v-model="model.f_address"
                       v-on:keyup.enter="$parent.$parent.search()"
                       condition="f_address like '%{}%'">
              </div>
              <div class="form-group col-sm-3">
                <label  for="startDate" class="font_normal_body">开始时间：</label>
                <datepicker id="startDate" placeholder="开始日期"
                            style="width: 60%!important;"
                            v-model="model.startDate"
                            :value.sync="model.startDate"
                            :format="'yyyy-MM-dd 00:00:00'"
                            :show-reset-button="true"
                            condition="f_apply_date >= '{}'">
                </datepicker>
              </div>
              <div class="form-group col-sm-3">
                <label for="endDate" class="font_normal_body">结束时间：</label>
                <datepicker id="endDate" placeholder="结束日期"
                            style="width: 60%!important;"
                            v-model="model.endDate"
                            :value.sync="model.endDate"
                            :format="'yyyy-MM-dd 23:59:59'"
                            :show-reset-button="true"
                            condition="f_apply_date <= '{}'">
                </datepicker>
              </div>
            </div>
          </div>
      </criteria>
      <data-grid v-if="$parent.showData" :model="model" partial='list' v-ref:grid class="list_area table_sy" style="height: 100%">
        <template partial='head'>
          <tr>
            <th style="white-space: nowrap;">序号</th>
            <th style="white-space: nowrap;">报建编号</th>
            <th style="white-space: nowrap;">项目名称/客户名称/联系人</th>
            <th style="white-space: nowrap;">合同编号</th>
            <th style="white-space: nowrap;">电话</th>
            <th style="white-space: nowrap;">地址</th>
            <th style="white-space: nowrap;">报建类型</th>
            <th style="white-space: nowrap;">办理环节</th>
            <th style="white-space: nowrap;">流程状态</th>
            <th style="white-space: nowrap;">报建日期</th>
            <th style="white-space: nowrap;">操作</th>
          </tr>
        </template>
        <template partial='body'>
          <tr >
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <nobr><font>{{$index+1}}</font></nobr>
            </td>
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <nobr><font>{{row.f_apply_num}}</font></nobr>
            </td>
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <nobr><font>{{row.f_entry_name}}/{{row.f_user_name}}/{{row.f_contact}}</font></nobr>
            </td>
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <nobr><font>{{row.f_contract_number}}</font></nobr>
            </td>
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <nobr><font>{{row.f_phone}}</font></nobr>
            </td>
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <nobr><font>{{row.f_address}}</font></nobr>
            </td>
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <nobr><font>{{row.f_apply_type}}</font></nobr>
            </td>
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <nobr><font>{{row.defname}}</font></nobr>
            </td>
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <nobr><font>{{row.f_sub_state}}</font></nobr>
            </td>
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <nobr><font>{{row.f_apply_date}}</font></nobr>
            </td>
            <td :class="[ row.isover ==='过期' ? 'p1' : row.isbeforeover === '预期提醒'? 'p':''  ]" style="text-align: center;">
              <dropdown>
                <button type="button" data-toggle="dropdown" style="border: 0px;background: none;">
                  <span class="glyphicon glyphicon-th-list" style="position: inherit;"></span>
                </button>
                <ul slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                  <li>
                    <a href="#" @click="$parent.$parent.$parent.click(row)">{{row.defname}}</a>
                  </li>
                </ul>
              </dropdown>
            </td>
          </tr>
        </template>
      </data-grid>
    </criteria-paged>

    <modal
      v-if="showModal"
      :show.sync="showModal"
      backdrop="false"
      title="工程类型"
      cancel-text="取消"
      ok-text="确认"
      :callback="apply"
    >
      <div class="form-horizontal" slot="modal-body">
        <div class="form-group" style="margin: 10px auto">
          <label class="col-sm-3 control-label">报建类型：</label>
          <div class="col-sm-9">
            <v-select
              v-model="f_apply_type"
              placeholder='请选择需要发起的工程类型'
              :value.sync="f_apply_type"
              :options='$appdata.getParam("报建类型")'
              :value-single="true"
              class="select select_list"
              :search="false"
              close-on-select ></v-select>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
  import {PagedList} from 'vue-client'
  import {HttpResetClass} from 'vue-client'
  import {isEmpty} from '../../Util'
  export default {
    title: '工程列表',
    props: ['showData'],
    data () {
      return {
        applytype: [{label: '全部', value: ''}, ...this.$appdata.getParam('报建类型')], // 所有报建类型
        defnames: [{label: '全部', value: ''}], // 流程节点
        model: new PagedList('rs/sql/checkuser', 20, {
          data: {
            id: this.$login.f.id,
            orgid: this.$login.f.orgid
          }
        }),
        f_apply_type: '',  // 报建类型
        // startname: null, // 启动节点
        criteriaShow: false, // 控制查询条件显示
        showModal: false // 控制发起类型选择
      }
    },
    ready () {
      // 调用查询
      this.search()
    },
    methods: {
      clear () {
        Object.keys(this.$refs.cp.$refs.cri.model).forEach((key) => {
          this.$refs.cp.$refs.cri.model[key] = []
        })
      },
      // 查询
      search () {
        this.$dispatch('search')
      },
      // 根据保健类型获取对应的流程节点
      applyTypeChange () {
        if (!isEmpty(this.$refs.cp.$refs.cri.model.f_apply_type)) {
          let http = new HttpResetClass()
          http.load('POST', 'rs/logic/getDefnameByType', {
            f_apply_type: this.$refs.cp.$refs.cri.model.f_apply_type
          }, {resolveMsg: null, rejectMsg: null}).then((res) => {
            this.defnames = [{label: '全部', value: ''}, ...res.data]
          })
        } else {
          this.defnames = [{label: '全部', value: ''}]
        }
      },
      // 获取流程id
      async getProcessId(processname) {
        let http = new HttpResetClass()
        let data = {
          workname: processname
        }
        let res = await http.load('POST', 'rs/logic/getProcessId', {data: data}, {resolveMsg: null, rejectMsg: null})

        return res.data
      },
      // 报装申请
      async apply () {
        if (this.f_apply_type === '' || this.f_apply_type === null) {
          this.$showAlert('请选择需要发起的类型', 'warning', 3000)
          return
        }
        let val = {
          f_apply_type: this.f_apply_type
        }
        if (this.f_apply_type === '散户报建') {
          val.defname = '用户受理'
          val.processname = '散户报建流程'
        } else if (this.f_apply_type === '工业户报建') {
          val.defname = '用户受理'
          val.processname = '工商户报建流程'
        } else if (this.f_apply_type === '商业户报建') {
          val.defname = '用户受理'
          val.processname = '工商户报建流程'
        } else if (this.f_apply_type === '散户集体报建') {
          val.defname = '用户受理'
          val.processname = '散户集体报建流程'
        } else if (this.f_apply_type === '开发商集体报建') {
          val.defname = '用户受理'
          val.processname = '开发商集体报建流程'
        } else if (this.f_apply_type === '煤改气报建') {
          val.defname = '用户受理'
          val.processname = '散户集体报建流程'
        } else {
          this.$showMessage('暂无此类报装')
          return
        }

        val.f_sub_state = "新增"
        val.f_process_id = await this.getProcessId(val.processname)

        // 调用ExplorationUser事件
        this.$dispatch('apply', val)

        this.f_apply_type = null
        this.showModal = false
      },
      // 点击操作
      click (val) {
        this.$dispatch('apply', val)
      }
    },
    computed: {
    },
    watch: {
      'model.rows': {
        handler: function () {
          let isover = []           // 过期(超时)数据
          let isbeforeover = []     // 未过期 提前提醒
          for (let i = 0; i < this.model.rows.length; i++) {
            let item = this.model.rows[i]
            if (item.isover === '过期') {
              isover.push(i + 1)
            }
            if (item.isbeforeover === '预期提醒') {
              isbeforeover.push(i + 1)
            }
          }
          let msg = null
          if (isover.length > 0) {
            msg = `第${isover.toString()}条数据已过期`
            this.$showAlert(msg, 'warning', 3000)
          }

          if (isbeforeover.length > 0) {
            msg = `第${isbeforeover.toString()}条数据即将过期`
            if (isover.length > 0) {
              setTimeout(() => {
                this.$showAlert(msg, 'warning', 3000)
              }, 4000)
            } else {
              this.$showAlert(msg, 'warning', 3000)
            }
          }
        }
      }
    }
  }
</script>
<style scoped>

  .p1 {
    color: #dc0b12;
    font-weight:bold
  }
  .p {
    color: #ffaf4f;
  }
</style>
