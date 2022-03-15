import Vue from 'vue'
import AndroidApp from './AndroidApp'
import { all } from 'vue-client'
import apply from './apply'
import {systemphonegrid} from 'system-phone'
import applyAndroid from "./applyAndroid";

all()
apply()
applyAndroid()
systemphonegrid()
require('./bootstrap/less/bootstrap.less')
Vue.android = true
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { AndroidApp }
})
