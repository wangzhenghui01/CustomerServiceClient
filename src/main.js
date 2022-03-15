import Vue from 'vue'
import App from './App'
import { all } from 'vue-client'
import {ldap} from 'ldap-clients'
import {system} from 'system-clients'
import {sale} from 'sale-client'
import {material} from 'material-client'

import apply from './apply'

all()
apply()
ldap()
sale()
material()
system(false)

require('system-clients/src/styles/less/bootstrap.less')
require('./expandcss.less')
new Vue({
  el: 'body',
  components: { App }
})
