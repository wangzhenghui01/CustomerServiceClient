<template>
  <div class="select-overspread" style="background-color: #ffffff;padding: 20px;overflow: scroll">
    <validator name="v">
      <form class="form-horizontal">
        <div class="form-group">
          <div v-for="(index,item) in data.fields" style="">
            <!--input-->
            <div :style="item.style ? item.style+';height: 40px;margin-bottom: 20px':'height: 40px;margin-bottom: 20px'"
                 v-if="(item.type==='input' || item.type==='number'||item.type === 'tel'||item.type === 'email') && !item.hidden && (item.device === 'pc' || !item.device)"
                 :class="[item.required && !(item.value) ? 'has-error' : '',item.bootstraped ? item.bootstraped + ' form-group':'col-sm-4 form-group']">
              <label :style="item.label_style ? item.label_style : ''"
                     :class="item.label_bootstraped ? item.label_bootstraped+' control-label-justify control-label' : 'control-label-justify control-label col-sm-6'">{{item.label}}</label>
              <div :style="item.value_style ? item.value_style:''"
                   :class="item.value_bootstraped ? item.value_bootstraped : 'col-sm-6'">
                <input class="form-control input_view" style=""
                       :type="item.type"
                       v-model="data.fields[index].value"
                       :placeholder="item.placeholder"
                       :value="data.fields[index].value"
                       :readonly="item.readonly"
                       :disabled="item.disabled"
                       @change="onchange(index)"
                       @blur="onblur(index)"
                       @input="oninput(index)"
                />
                <span
                  v-if="item.error&&item.error.msg&&item.error.flag"
                  style="color: red">{{item.error.msg}}</span>
              </div>
            </div>
            <!--时间datepicker-->
            <div :style="item.style ? item.style+';height: 40px;margin-bottom: 20px':'height: 40px;margin-bottom: 20px'"
                 v-if="item.type==='datepicker' && !item.hidden && (item.device === 'pc' || !item.device)"
                 :class="[item.required && !(item.value) ? 'has-error' : '',item.bootstraped ? item.bootstraped+' form-group':'col-sm-4 form-group']">
              <label
                :class="item.label_bootstraped ? item.label_bootstraped+' control-label-justify control-label' : 'control-label control-label-justify col-sm-6'">{{item.label}}</label>
              <div :style="item.value_style ? item.value_style:''"
                   :class="item.value_bootstraped ? item.value_bootstraped : 'col-sm-6'">
                <datepicker
                  @change="onchange(index)"
                  @blur="onblur(index)"
                  :placeholder="item.placeholder"
                  :value.sync="data.fields[index].value"
                  :format="item.format ? item.format : 'yyyy-MM-dd'"
                  v-model="data.fields[index].value"
                  :readonly="item.readonly"
                  :disabled="item.disabled"
                  :show-reset-button="reset">
                </datepicker>
              </div>
              <span
                v-if="item.error&&item.error.msg&&item.error.flag"
                style="color: red">{{item.error.msg}}</span>
            </div>

            <!--textarea-->
            <div :style="item.style ? item.style+';height: 40px;margin-bottom: 20px':'height: 40px;margin-bottom: 20px'"
                 v-if="item.type==='textarea' && !item.hidden && (item.device === 'pc' || !item.device)"
                 :class="[item.required && !(item.value) ? 'has-error' : '',item.bootstraped?item.bootstraped+' form-group':'col-sm-12 form-group']">
              <label :style="item.label_style ? item.label_style : ''"
                     :class="item.label_bootstraped ? item.label_bootstraped + ' control-label-justify control-label' : 'control-label-justify control-label col-sm-3'">{{item.label}}</label>
              <div :style="item.value_style ? item.value_style:''"
                   :class="item.value_bootstraped ? item.value_bootstraped : 'col-sm-10'">
                <textarea
                  :readonly="item.readonly"
                  :disabled="item.disabled"
                  class="form-control input_view"
                  style="width: 100%;height: 100%"
                  :rows="item.rows"
                  v-model="data.fields[index].value"
                  :value="data.fields[index].value"
                  @change="onchange(index)"
                  @blur="onblur(index)"
                  @input="oninput(index)"
                >
                </textarea>
              </div>
              <span
                v-if="item.error&&item.error.msg&&item.error.flag"
                style="color: red">{{item.error.msg}}</span>
            </div>

            <!--radio-->
            <div :style="item.style ? item.style+';height: 40px;margin-bottom: 20px':'height: 40px;margin-bottom: 20px'"
                 v-if="item.type==='radio' && !item.hidden && (item.device === 'pc' || !item.device)"
                 :class="[item.required && !(item.value) ? 'has-error' : '',item.bootstraped?item.bootstraped+' form-group':'col-sm-12 form-group']">
              <label v-if="item.label"
                     :class="item.label_bootstraped?item.label_bootstraped+' control-label-justify control-label':'control-label-justify control-label col-sm-2'">{{item.label}}</label>
              <div
                :style="item.value_style ? item.value_style:''"
                :class="item.value_bootstraped?item.value_bootstraped:item.items.length%2 == 0?'col-sm-5': 'col-sm-3'"
                v-for="(index2,row) in item.items">
                <label :for="row.label"
                       :class="item.items.length%2 == 0?'col-sm-3 control-label': 'col-sm-2 control-label'">{{row.label}}</label>
                <input @blur="onblur(index)"
                       :class="item.items.length%2 == 0?'col-sm-3 control-label': 'col-sm-2 control-label'"
                       :readonly="item.readonly" :disabled="item.disabled" style="margin-top: 10px" type="radio"
                       :name="index" :id="row.label" v-bind:value="data.fields[index].items[index2].value"
                       v-model="data.fields[index].value">
              </div>
              <span
                v-if="item.error&&item.error.msg&&item.error.flag"
                style="color: red">{{item.error.msg}}</span>
            </div>

            <!--select-->
            <div :style="item.style ? item.style+';height: 40px;margin-bottom: 20px':'height: 40px;margin-bottom: 20px'"
                 v-if="item.type==='select' && !item.hidden && (item.device === 'pc' || !item.device)"
                 :class="[item.required && !(item.value) ? 'has-error' : '',item.bootstraped?item.bootstraped+' form-group':'col-sm-4 form-group']">
              <label
                :class="item.label_bootstraped ? item.label_bootstraped+' control-label control-label-justify':'control-label-justify control-label col-sm-6'">{{item.label}}</label>
              <div :style="item.value_style ? item.value_style:''"
                   :class="item.value_bootstraped ? item.value_bootstraped : 'col-sm-6'">
                <input-select
                  class="select select_list"
                  @blur="onblur(index)"
                  @change="onchange(index)"
                  :readonly="item.readonly"
                  :disable="item.disabled"
                  :value.sync="data.fields[index].value"
                  v-model="data.fields[index].value"
                  :options='data.fields[index].options'
                  :valueSingle="true"></input-select>
              </div>
              <span
                v-if="item.error&&item.error.msg&&item.error.flag"
                style="color: red">{{item.error.msg}}</span>
            </div>

            <!--checkbox-->
            <div :style="item.style ? item.style+';height: 40px;margin-bottom: 20px':'height: 40px;margin-bottom: 20px'"
                 v-if="item.type==='checkbox' && !item.hidden && (item.device === 'pc' || !item.device)"
                 :class="[item.required&&!(item.value) ? 'has-error' : '',item.bootstraped?item.bootstraped+' form-group':'col-sm-12 form-group']">
              <label v-if="item.label"
                     :class="item.label_bootstraped?item.label_bootstraped+' control-label ':'control-label col-sm-2'">{{item.label}}</label>
              <div style="margin-top: 6px"
                   :class="item.value_bootstraped?item.value_bootstraped:'control-label  col-sm-2'"
                   v-for="(index2,row) in item.items">
                <label class="font-size form-group col-sm-6">{{row.label}}</label>
                <input :readonly="item.readonly" :disabled="item.disabled" type="checkbox" class="col-sm-6"
                       :id="row.label" v-model="data.fields[index].items[index2].value" @blur="onblur(index)" >
              </div>
            </div>
          </div>
        </div>
        <!-- onetomany -->
        <div class="" v-for="(i,item) in data.onetomany" style="overflow:auto;width:100%">
          <table v-show="!item.hidden" class="table table-bordered table-striped table-hover" style="white-space:nowrap">
            <tr>
              <th>序号</th>
              <th v-for="field in item.fields" v-if="!field.displayPosition || field.displayPosition === '*' || field.displayPosition === 'list'">
                <nobr>{{field.label}}</nobr>
              </th>
              <th v-if="!item.hiddenOperate">
                <button type="button" @click="add(i)" class="btn btn-info"
                        v-if="showprint && !item.addHidden">
                  <span v-if="item.addText === 'default' || !item.addText" class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  <span v-else :style="item.addStyle">{{item.addText}}</span>
                </button>
              </th>
            </tr>
            <tr v-for="(j,row) in item.rows" style="">
              <td style="text-align: center">{{$index+1}}</td>
              <td v-for="key in item.fields"  v-if="!key.displayPosition || key.displayPosition === '*' || key.displayPosition === 'list'" style="text-align: center">
                {{row[key.field]}}
              </td>
              <td style="text-align: center" v-if="!item.hiddenOperate">
                <span @click="update(i,j)" v-if="showprint && !item.updateHidden">
                  <span v-if="item.updateText === 'default' || !item.updateText" class="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                  <span v-else :style="item.updateStyle">{{item.updateText}}</span>
                </span>
                <span @click="delete(i,j)" v-if="showprint && !item.deleteHidden" style="margin-left: 10px">
                  <span v-if="item.deleteText === 'default' || !item.deleteText" class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                  <span v-else :style="item.deleteStyle">{{item.deleteText}}</span>
                </span>
              </td>
            </tr>
          </table>
        </div>

        <div v-for="(i,item) in data.components">
          <component v-if="item.device === 'pc' || !item.device" :is="item.name" :selectdata="data" :mark="item.mark"></component>
        </div>

        <!--自定义组件-->
        <slot></slot>
        <!--公司等属性-->
        <div class="col-sm-12 form-group text-center" style="padding-top:8px">
          <div class="col-sm-3 form-group center-block">
            <label class="col-sm-5">所属公司：</label>
            <div class="col-sm-6" style="text-align: left">
              {{model.f_filiale}}
            </div>
          </div>
          <div class="col-sm-3 form-group center-block">
            <label class="col-sm-5">部门：</label>
            <div class="col-sm-6" style="text-align: left">
              {{model.f_parentname}}
            </div>
          </div>
          <div class="col-sm-3 form-group center-block">
            <label class="col-sm-5">操作人：</label>
            <div class="col-sm-6 " style="text-align: left">
              {{model.f_operator}}
            </div>
          </div>
          <div class="col-sm-3 form-group center-block">
            <label class="col-sm-5">操作日期：</label>
            <div class="col-sm-6" style="text-align: left">
              {{model.f_operate_date}}
            </div>
          </div>
        </div>

      </form>
    </validator>

    <!-- 按钮组 -->
    <div class="from-group col-sm-12" style="margin-top: 20px;height: 100px">
      <center>
        <!-- 按钮组 -->
        <button v-for="(index,button) in data.buttons"
                :disabled="(button.button_name==='提交'||button.button_name==='下发')&&disable_button" type="button"
                @click="clicked(index,button)"
                :class="(button.button_name==='提交'||button.button_name==='下发')&&disable_button?'btn btn-default':'btn btn-primary'"
                v-if="!button.hidden"
                style="min-width:100px; margin-right:50px;">
          {{button.button_name}}
        </button>
      </center>
    </div>

    <!-- onetomany模态框 -->
    <modal v-if="show" :show.sync="show" backdrop="false" :large="modalSize === 'large' ? true : false" :small="modalSize === 'small' ? true : false">
      <header slot="modal-header" class="modal-header">
        <button type="button" class="close" @click="closemodal(modeltitle)"><span>&times;</span></button>
        <span class="modal-title"><font
          size="3">{{modeltitle}}</font></span>
      </header>
      <article slot="modal-body" class="modal-body clearfix">
        <div
          :class="[item.required&&!(item.value) ? 'has-error' : '',item.bootstraped?item.bootstraped:'col-sm-12']"
          v-for="(index,item) in data.onetomany[onetomany_index].fields" v-if="!item.displayPosition || item.displayPosition === '*' || item.displayPosition === 'from'">
          <label v-show="!item.hidden" :class="item.label_bootstraped ? item.label_bootstraped + ' control-label' : 'control-label col-sm-3'" style="margin-top: 10px">{{item.label}}：</label>
          <div :class="item.value_bootstraped ? item.value_bootstraped : 'col-sm-7'" v-show="!item.hidden">
            <!--时间datepicker-->
            <datepicker
              v-if="item.type=='datepicker'"
              @change="onchange_modal(index)"
              @blur="onblur_modal(index)"
              :placeholder="item.placeholder"
              :value.sync="data.onetomany[onetomany_index].fields[index].value"
              :format="'yyyy-MM-dd'"
              v-model="data.onetomany[onetomany_index].fields[index].value"
              :readonly="item.readonly"
              :disabled="item.disabled"
              :show-reset-button="reset">
            </datepicker>
            <!--select-->
            <input-select
              @change="onchange_modal(index)"
              v-if="item.type=='select'"
              @blur="onblur_modal(index)"
              :value.sync="data.onetomany[onetomany_index].fields[index].value"
              v-model="data.onetomany[onetomany_index].fields[index].value"
              :options='data.onetomany[onetomany_index].fields[index].options'>
            </input-select>
            <!-- input -->
            <input v-if="item.type==='input' || item.type==='number'||item.type === 'tel'||item.type === 'email'"
                   class="form-control"
                   :type="item.type"
                   v-model="data.onetomany[onetomany_index].fields[index].value"
                   :placeholder="item.placeholder"
                   :value="data.onetomany[onetomany_index].fields[index].value"
                   :readonly="item.readonly"
                   :disabled="item.disabled"
                   @change="onchange_modal(index)"
                   @blur="onblur_modal(index)"
                   @input="oninput_modal(index)"
            />

            <textarea
              v-if="item.type==='textarea'"
              :readonly="item.readonly"
              :disabled="item.disabled"
              class="form-control input_view"
              style="width: 100%;height: 100%"
              :rows="item.rows"
              v-model="data.onetomany[onetomany_index].fields[index].value"
              :value="data.onetomany[onetomany_index].fields[index].value"
              @change="onchange_modal(index)"
              @blur="onblur_modal(index)"
              @input="oninput_modal(index)"
            >
            </textarea>
          </div>
        </div>
      </article>
      <footer slot="modal-footer" class="modal-footer">
        <button :class="disable_button_onetomany?'btn btn-default':'btn btn-primary'"
                :disabled="disable_button_onetomany" type="button" @click="confirm_modal(modeltitle)">
          确认
        </button>
      </footer>
    </modal>

    <!-- 按钮模态框 -->
    <modal v-if="showbutmodal" :show.sync="showbutmodal" v-ref:modal backdrop="false">
      <header slot="modal-header" class="modal-header">
        <button type="button" class="close" @click="closemodal('but')"><span>&times;</span></button>
        <h4 class="modal-title">{{model.button.button_name}}</h4>
      </header>
      <article slot="modal-body" class="modal-body">
        <div class="col-sm-12" v-for="(index,button) in data.buttons[model.button.button_index].button_fields">
          <label class="control-label col-sm-3" style="margin-top: 10px">{{button.label}}：</label>
          <div class="col-sm-7">
            <!--select-->
            <input-select v-if="button.type=='select'"
                          :value.sync="data.buttons[model.button.button_index].button_fields[index].value"
                          v-model="data.buttons[model.button.button_index].button_fields[index].value"
                          :options='button.options'></input-select>
            <!-- input -->
            <input v-else type="text" class="form-control"
                   v-model="data.buttons[model.button.button_index].button_fields[index].value"/>
          </div>
        </div>
      </article>
      <footer slot="modal-footer" style="border-top:none" class="modal-footer">
        <button type="button" class="btn btn-primary" :disabled="disable_button_but" @click='confirm_but_modal()'>确认</button>
      </footer>
    </modal>
  </div>
</template>
<script>
import Vue from 'vue'
// Date格式化
Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'H+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

export default {
  title: '报建业务通用组件',
  props: {
    data: {
      type: Object
    },
    showprint: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      model: {}, // 公司等属性
      disable_button: true, // 控制按钮禁用
      show: false, // 控制onetomany模态框
      disable_button_onetomany: true, // 控制onetomany模态框按钮
      onetomany_index: null, // 当前选择的下标
      update_onetomany_index: null, // 当前需要修改的下标
      modeltitle: null, // 模态框标题
      modalSize: null, // 模态框大小
      showbutmodal: false,
    }
  },
  watch: {
    deep: true
  },
  computed: {

  },
  created () {
    // 初始化数据
    this.initializtion()
    this.$dispatch('initializtionView')
  },
  methods: {
    // 按钮模态框确定
    confirm_but_modal() {
      for (const item of this.data.buttons[this.model.button.button_index].button_fields) {
        this.model.button.button_fields[item.field] = item.value
      }
      this.showbutmodal = false
      this.disable_button_but = true
      this.$dispatch('button', this.model)
    },
    // 点击按钮组按钮
    async clicked(index, button) {
      this.disable_button = true
      // 组织model.fields数据
      for (const item of this.data.fields) {
        // checkbox特殊处理
        if (item.type === 'checkbox') {
          for (let j = 0; j < item.items.length; j++) {
            this.model[item.items[j].field] = item.items[j].value
          }
        } else {
          this.model[item.field] = item.value
        }
      }
      this.model.f_process_id = this.data.f_process_id

      // 初始化model.button数据
      let buttondatas = {
        button_fields: {}
      }
      buttondatas.button_name = button.button_name
      buttondatas.button_index = index
      if (button.button_fields) {
        for (const item of button.button_fields) {
          buttondatas.button_fields[item.field] = item.value
        }
      }
      this.model.button = buttondatas
      this.model.title = this.data.title
      this.model.fields = this.data.fields
      this.model.onetomany = this.data.onetomany


      if (button.button_name === '退回') {
        this.showbutmodal = true
      } else if (button.button_name === '下发') {
        this.showbutmodal = true
      } else {
        this.$dispatch('button', this.model)
      }
    },
    // 初始化数据
    initializtion () {
      // 是否禁用按钮
      this.disableButton()

      // 公司等属性初始化
      if (this.data.filiale) {
        this.model.f_filiale = this.data.filiale
      } else {
        this.model.f_filiale = this.$login.f.orgs
      }
      if (this.data.f_parentname) {
        this.model.f_parentname = this.data.f_parentname
      } else {
        this.model.f_parentname = this.$login.f.f_department_name
      }
      if (this.data.operate_date) {
        this.model.f_operate_date = this.data.operate_date
      } else {
        this.model.f_operate_date = new Date().Format('yyyy-MM-dd')
      }
      if (this.data.operator) {
        this.model.f_operator = this.data.operator
      } else {
        this.model.f_operator = this.$login.f.name
      }
    },
    // 是否禁用按钮
    disableButton () {
      let fields = this.data.fields

      let flag = false
      for (const item of fields) {
        if (item.type !== 'checkbox' && item.required && !item.value) {
          if (item.value === 0) {
            flag = false
          } else {
            flag = true
          }
        }
        // 任何选择框只要是否都不能提交
        if (item.type === 'select' && item.value === '否' && item.disabledButton) {
          flag = true
        }
      }

      let count = 0
      for (const item of fields) {
        if (item.type !== 'checkbox' && item.required) {
          count++
        }
      }
      if (count === 0) {
        flag = false
      }

      this.disable_button = flag
    },
    // 失去焦点触发，无论值是否发生变化
    onblur (index) {
      // 是否禁用按钮
      this.disableButton()

      this.$dispatch('onblur', index)
      // 如果有错误信息提示走错误信息判断处理

      if (this.data.fields[index].error || this.data.fields[index].type === 'datepicker') {
        this.$dispatch('error_check', index)
      }
    },
    // 失去焦点且值最终发生变化触发
    async onchange (index) {
      // 是否禁用按钮
      this.disableButton()

      this.data.fields[index].value = this.data.fields[index].value.trim()

      if (this.data.fields[index].prefix && this.data.fields[index].value !== '') {
        this.data.fields[index].value = this.data.fields[index].prefix + this.data.fields[index].value
      }

      this.data[this.data.fields[index].field] = this.data.fields[index].value

      await this.$dispatch('onchange', index)

      // 如果有错误信息提示走错误信息判断处理
      if (this.data.fields[index].error || this.data.fields[index].type === 'datepicker') {
        this.$dispatch('error_check', index)
      }
    },
    oninput (index) {
      // 是否禁用按钮
      this.disableButton()

      this.$dispatch('oninput', index)

      // 如果有错误信息提示走错误信息判断处理
      if (this.data.fields[index].error || this.data.fields[index].type === 'datepicker') {
        this.$dispatch('error_check', index)
      }
    },
    // 模态框确认按钮
    confirm_modal (title) {
      if (title === '新增') {
        if (this.data.onetomany[this.onetomany_index].addEvent === 'default' || !this.data.onetomany[this.onetomany_index].addEvent) {
          this.$dispatch('onetomanyadd', this.onetomany_index)
        } else {
          this.$dispatch(this.data.onetomany[this.onetomany_index].addEvent, this.onetomany_index)
        }
      } else {
        if (this.data.onetomany[this.onetomany_index].updateEvent === 'default' || !this.data.onetomany[this.onetomany_index].updateEvent) {
          this.$dispatch('onetomanyupdate', this.onetomany_index, this.update_onetomany_index)
        } else {
          this.$dispatch(this.data.onetomany[this.onetomany_index].updateEvent, this.onetomany_index, this.update_onetomany_index)
        }
      }

      this.closemodal()
    },
    // 删除
    delete (i, j) {
      this.$showMessage((this.data.onetomany[i].deleteMessage === 'default' || !this.data.onetomany[i].deleteMessage) ? '您确定要删除这条记录吗？' : this.data.onetomany[i].deleteMessage, ['confirm']).then((res) => {
        if (res === 'confirm') {
          if (this.data.onetomany[i].deleteEvent === 'default' || !this.data.onetomany[i].deleteEvent) {
            this.$dispatch('onetomanydelete', i, j)
          } else {
            this.$dispatch(this.data.onetomany[i].deleteEvent, i, j)
          }
        }
      })
    },
    // 修改
    update (i, j) {
      let onetomany = this.data.onetomany[i]
      let item = this.data.onetomany[i].rows[j]
      let count = 0
      for (let k = 0; k < onetomany.fields.length; k++) {
        // 防止初始化的时候没有value
        Vue.set(this.data.onetomany[i].fields[k], 'value', item[this.data.onetomany[i].fields[k].field])

        if (onetomany.fields[j].required) {
          count++
        }
      }
      if (count === 0) {
        this.disable_button_onetomany = false
      }
      this.modeltitle = '修改'
      this.modalSize = this.data.onetomany[i].modalSize
      this.onetomany_index = i
      this.update_onetomany_index = j

      this.$dispatch('openUpdateModel',i,j)

      this.show = true
    },
    // 添加
    add (index) {
      let count = 0
      for (const item of this.data.onetomany[index].fields) {
        if (item.type === 'datepicker' && !item.value && item.default) {
          item.value = new Date().Format('yyyy-MM-dd')
        }
        if (item.required) {
          count++
        }
      }

      if (count === 0) {
        this.disable_button_onetomany = false
      }
      this.modeltitle = '新增'
      this.modalSize = this.data.onetomany[index].modalSize
      this.onetomany_index = index

      this.$dispatch('openAddModel',index)

      this.show = true
    },
    // 关闭模态框
    closemodal (val) {
      if (val === 'but'){
        this.disableButton()
        this.showbutmodal = false
        return
      }
      for (const item of this.data.onetomany[this.onetomany_index].fields) {
        item.value = ''
      }
      this.show = false
      this.disable_button_onetomany = true
      this.onetomany_index = null
      this.update_onetomany_index = null
      this.modeltitle = null
      this.modalSize = null
    },
    // 是否禁用模态框按钮
    disableModalButton () {
      let fields = this.data.onetomany[this.onetomany_index].fields

      let flag = false
      for (const item of fields) {
        if (item.type !== 'checkbox' && item.required && !item.value) {
          if (item.value === 0) {
            flag = false
          } else {
            flag = true
          }
        }
      }

      let count = 0
      for (const item of fields) {
        if (item.type !== 'checkbox' && item.required) {
          count++
        }
      }
      if (count === 0) {
        flag = false
      }
      this.disable_button_onetomany = flag
    },
    // 监听模态框属性失去焦点
    onchange_modal (index) {
      this.disableModalButton()
      this.$dispatch('onchange_modal', this.onetomany_index, index)
    },
    // 监听模态框属性失去焦点
    onblur_modal (index) {
      this.disableModalButton()
      this.$dispatch('onblur_modal', this.onetomany_index, index)
    },
    // input输入属性值发生变化监听
    oninput_modal (index) {
      this.disableModalButton()
      this.$dispatch('oninput_modal', this.onetomany_index, index)
    }
  },
  events: {

  }
}
</script>
<style>
.datepicker{
  width: 100%!important;
}
.datepicker-input{
  background-color: #ffffff!important;
  width: 100%!important;
}
.datepicker-input:disabled{
  border: 1px solid #DDD!important;
  color: #ACA899!important;
  width: 100%!important;
}
</style>
<style scoped>
th{
  font-size: 15px !important;
  text-align: center !important;
  background-color: #dfedfb!important;
  color: #666666 !important;
  font-family: PINGFANG-BOLD !important;
  font-weight: normal!important;
}
/*清除model中的浮动*/
.clearfix:after,.clearfix:before{
  display: table;
}
.clearfix:after{
  clear: both;
}

.input_view{
  padding: 8px;
  background-color: #ffffff;
  border-radius: 2px;
  border: solid 1px #c7c7c7!important;
  color: #333333!important;
  font-size: 15px!important;
}

.input_view[readonly]{
  border: 1px solid #DDD!important;
  /*background-color: #F5F5F5;*/
  color:#ACA899!important;
}
.input_view:disabled{
  border: 1px solid #DDD!important;
  /*background-color: #F5F5F5;*/
  color:#ACA899!important;
}

.control-label-justify {
  display: inline-block;
  vertical-align: top;
  width: 110px;
  text-align: justify;
  font-family: PingFang-SC-Bold;
}

.control-label-justify::after {
  content: "";
  display: inline-block;
  width: 70px;
  overflow: hidden;
  height: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}

</style>
