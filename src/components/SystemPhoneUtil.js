import Vue from 'vue'
import { HttpResetClass } from 'vue-client'


export var f = {
  id: '',
  // role: null  如果是话务员，该值为null
  role: 'repairman'
}

export var attendant = {
  aModule: 1,
  aChannel: 0
}

// 当前登录用户的ip地址
export var ip = '127.0.0.1'

export function afterCallBz(id, name) {
  let http = new HttpResetClass()
  http.load('POST', data.voiceUrl,
    {
      aId: id,
      RecordsID: '',
      aChannel: attendant.aChannel,
      aModule: attendant.aModule,
      aBzType: "save",
      bzExtra: null,
      bzId: null,
      aName: name
    },
    {
      resolveMsg: null,
      rejectMsg: null
    }).then((req) => {
      console.log("话后调用成功")
  })
}

export function getDaysInOneMonth (year, month) {
  month = parseInt(month, 10)
  var d = new Date(year, month, 0)
  return d.getDate()
}

export function getAttendanceState(item, timeToWork, timeToGo) {
  item.f_state = ''
  if(!item.f_signin_time || !item.f_knockoff_time)
    item.f_state = '缺勤'
  else {
    let signin_time = item.f_signin_time.substring(11, 16)
    let knockoff_time = item.f_knockoff_time.substring(11, 16)
    if(signin_time > timeToWork)
      item.f_state = '迟到'
    if(knockoff_time < timeToGo)
      item.f_state = item.f_state + '早退'
  }
  if(!item.f_state)
    item.f_state = '正常'
}

export function toStandardYearMonth() {
  let dt = new Date()
  let month = dt.getMonth()+1
  return dt.getFullYear() + '-' + (month<10? '0'+ month : month)
}

export function toStandardDateString() {
  let dt = new Date()
  let month = dt.getMonth()+1
  let date = dt.getDate()
  return dt.getFullYear() + '-' + (month<10? '0'+ month : month) + '-' + (date<10? '0'+ date : date)
}

export function toStandardTimeString() {
  let dt = new Date()
  let month = dt.getMonth()+1
  let date = dt.getDate()
  let hour = dt.getHours()
  let min = dt.getMinutes()
  let sec = dt.getSeconds()
  return dt.getFullYear() + '-' + (month<10? '0'+ month : month) + '-' + (date<10? '0'+ date : date)
    + ' ' + (hour<10? '0'+ hour : hour) + ':' + (min<10? '0'+ min : min) + ':' + (sec<10? '0'+ sec : sec)
}
export function toStandardTimeStringByTimestamp(time) {
  let dt = new Date(time)
  let month = dt.getMonth()+1
  let date = dt.getDate()
  let hour = dt.getHours()
  let min = dt.getMinutes()
  let sec = dt.getSeconds()
  return dt.getFullYear() + '-' + (month<10? '0'+ month : month) + '-' + (date<10? '0'+ date : date)
    + ' ' + (hour<10? '0'+ hour : hour) + ':' + (min<10? '0'+ min : min) + ':' + (sec<10? '0'+ sec : sec)
}

export function to3339TimeString() {
  let dt = new Date()
  let month = dt.getMonth()+1
  let date = dt.getDate()
  let hour = dt.getHours()
  let min = dt.getMinutes()
  let sec = dt.getSeconds()
  return dt.getFullYear() + '-' + (month<10? '0'+ month : month) + '-' + (date<10? '0'+ date : date)
    + 'T' + (hour<10? '0'+ hour : hour) + ':' + (min<10? '0'+ min : min) + ':' + (sec<10? '0'+ sec : sec)
}

export function parse3339String(strDate) {
  return new Date(
    strDate.substr(0, 4), strDate.substr(5, 2)-1, strDate.substr(8, 2),
    strDate.substr(11, 2), strDate.substr(14, 2), strDate.substr(17, 2)
  )
}

export function format3339TimeString(dt) {
  let month = dt.getMonth()+1
  let date = dt.getDate()
  let hour = dt.getHours()
  let min = dt.getMinutes()
  let sec = dt.getSeconds()
  return dt.getFullYear() + '-' + (month<10? '0'+ month : month) + '-' + (date<10? '0'+ date : date)
    + 'T' + (hour<10? '0'+ hour : hour) + ':' + (min<10? '0'+ min : min) + ':' + (sec<10? '0'+ sec : sec)
}

export function guid() {
  let buf = new Uint16Array(8)
  window.crypto.getRandomValues(buf)
  let S4 = function(num) {
      let ret = num.toString(16)
      while(ret.length < 4){
          ret = '0' + ret
      }
      return ret
  }
  return (S4(buf[0])+S4(buf[1])+S4(buf[2])+S4(buf[3])+S4(buf[4])+S4(buf[5])+S4(buf[6])+S4(buf[7]))
}

export function choices(role, param, hasBlank = false, blankHint='请选择') {
  if(role == 'view') {
    Vue.getParams(param, [null])
  } else {
    let result = []
    if(hasBlank)
      result.push({label: blankHint, value: null})
    if(!Vue.param || !Vue.param[param])
      result.push({label: '请在系统设置里更新参数', value: '请在系统设置里更新参数'})
    else {
      //console.log(param)
      //console.log(JSON.stringify(Vue.param))
      let p = Vue.param[param]
      p.forEach(function(item) {
        result.push({label: item.name, value: item.name})
      })
    }
    return result
  }
}

export function required(param) {
  if(typeof param === 'number' && param == 0)
    return false
  if(!param)
    return true
  param = param + ''
  param = param.trim()
  if(!param)
    return true
  return false
}

export function isInt(n){
  console.log('判断整数' + n)
  return !window.isNaN(n) && n % 1 === 0
}

export function isFloat(n){
  console.log('判断小数' + n)
  return !window.isNaN(n)
}

// this will convert all true/false to boolean
export function booleanFilter(paper) {
    for(let key in paper) {
      if(!paper.hasOwnProperty(key))
        continue
      if(typeof paper[key] == "object" && paper[key] != null) {
        booleanFilter(paper[key]);
      } else {
        if(paper[key] === "true" || paper[key] == "false")
          paper[key] = (paper[key] === "true")
      }
    }
}
// recursively traverse through each path
export function ratifyPics(paper) {
  for(let key in paper) {
    if(key.endsWith('_path')) {
      if(!paper[key]) {
        paper[key] = 'rs/db/file/nopic.png'
      } else {
        paper[key] = 'rs/db/file/' + paper[key]
      }
    } else if(paper[key] !== null && typeof(paper[key]) == "object") {
      ratifyPics(paper[key])
    }
  }
}

// load script and other stuff
export function loadscript(type, fileName) {
  return new Promise((resolve, reject)=> {
    let element
    if(type == 'css') {
      element = document.createElement('link')
      element.setAttribute("rel", "stylesheet")
      element.setAttribute("type", "text/css")
      element.setAttribute("href", fileName)
    } else if(type == 'js') {
      element = document.createElement('script')
      element.setAttribute("type","text/javascript")
      element.setAttribute("src", fileName)
    }
    if(element) {
      element.setAttribute('async', '')
      element.setAttribute('defer', '')
      element.addEventListener('load', function() {
                resolve(element)
                console.log('load script resolved')
            }, false)
      element.addEventListener('error', function() {
                reject(element)
                console.log('load script rejected')
            }, false)
      document.body.appendChild(element)
    }
  })
}
// 不能选择器中截取掉多余的字符
export function orgName (name) {
  return name.substring(10)
}

export function getNowDate (name) {
  let year = ''
  let month = ''
  let day = ''
  let hour = ''
  let minutes = ''
  let seconds = ''
  let mydate = new Date()
  let mymonth = mydate.getMonth() + 1
  let myday = mydate.getDate()
  let myyear = mydate.getYear()
  let myhour = mydate.getHours()
  let myminutes = mydate.getMinutes()
  let myseconds = mydate.getSeconds()
  year = (myyear > 200) ? myyear : 1900 + myyear
  month = (mymonth > 9) ? mymonth : '0' + mymonth
  day = (myday > 9) ? myday : '0' + myday
  hour = (myhour > 9) ? myhour : '0' + myhour
  minutes = (myminutes > 9) ? myminutes : '0' + myminutes
  seconds = (myseconds > 9) ? myseconds : '0' + myseconds
  // document.write("<font color=#ffffff>今天是 "+year+"年"+mymonth+"月"+myday+"日 "+weekday+"</font>");
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
}
// 数组深度复制
export function deepcopy (obj) {
  let out = []
  let len = obj.length
  for (let i = 0; i < len; i++) {
    if (obj[i] instanceof Array) {
      out[i] = deepcopy(obj[i])
    } else {
      if (typeof obj[i] === 'object') {
        out[i] = Object.assign({}, out[i], obj[i])
      } else {
        out[i] = obj[i]
      }
    }
  }
  return out
}

export function dateDescripte (date) {
  let nowTime = new Date().getTime()
  let oldTime = new Date(date).getTime()
  let timeDiff = nowTime - oldTime
  // 规则说明
  // 小于等于2分钟为刚刚
  // 大于2分钟小于等于1小时为取整的分钟前（例如：35分钟前）
  // 大于1小时小于等于24小时为取整的小时前（例如：15小时前）
  // 大于24小时小于等于30天为取整的天前（例如：12天前）
  // 大于30天小于等于12月为取整的月前，月份统一为30天一月，不做额外处理（例如：3个月前）
  // 大于365取整的年前，（例如：2年前）
  let minute = 1000 * 60
  let hour = minute * 60
  let day = hour * 24
  let month = day * 30
  let year = month * 12
  let des = ''
  if (timeDiff <= minute * 2) {
    des = '刚刚'
  } else if (minute * 2 < timeDiff && timeDiff < hour) {
    des = `${Math.floor(timeDiff / minute)}分钟前`
  } else if (hour < timeDiff && timeDiff <= day) {
    des = `${Math.floor(timeDiff / hour)}小时前`
  } else if (day < timeDiff && timeDiff <= month) {
    des = `${Math.floor(timeDiff / day)}天前`
  } else if (month < timeDiff && timeDiff <= year) {
    des = `${Math.floor(timeDiff / month)}个月前`
  } else if (year < timeDiff) {
    des = `${Math.floor(timeDiff / year)}年前`
  }
  return des
}

// 通过地址栏的参数获取参数内容
export function getUrlParames (param) {
  var query = window.location.search
  var iLen = param.length
  var iStart = query.indexOf(param)
  if (iStart === -1) {
    return ''
  }
  iStart += iLen + 1
  var iEnd = query.indexOf('&', iStart)
  if (iEnd === -1) {
    return query.substring(iStart)
  }
  return query.substring(iStart, iEnd)
}

// 从地址栏获取加密的参数
export function getUrlCompileParames (param) {
  var query = uncompileStr(window.location.search.slice(1, window.location.search.length))
  var iLen = param.length
  var iStart = query.indexOf(param)
  if (iStart === -1) {
    return ''
  }
  iStart += iLen + 1
  var iEnd = query.indexOf('&', iStart)
  if (iEnd === -1) {
    return query.substring(iStart)
  }
  return query.substring(iStart, iEnd)
}

// 对字符串进行加密
export function compileStr (code) {
  let c = String.fromCharCode(code.charCodeAt(0) + code.length)
  for (let i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1))
  }
  return escape(c)
}
// 字符串进行解密
export function uncompileStr (code) {
  code = unescape(code)
  let c = String.fromCharCode(code.charCodeAt(0) - code.length)
  for (var i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1))
  }
  return c
}

export function getCurrentTime () {
  return Date.parse(new Date());
}

export function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}


export function randnum() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i <10; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  var randnum = s.join("");
  return randnum;
}
// export function getNowDate () {
//   // 求取当前时间的工具
//   let myweekday = ''
//   let year = ''
//   let mydate = new Date()
//   myweekday = mydate.getDay()
//   let mymonth = mydate.getMonth() + 1
//   let myday = mydate.getDate()
//   let myyear = mydate.getYear()
//   year = (myyear > 200) ? myyear : 1900 + myyear
//   let week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期日','星期六']
//   let weekday = week[myweekday]
//
//   // document.write("<font color=#ffffff>今天是 "+year+"年"+mymonth+"月"+myday+"日 "+weekday+"</font>");
//   return  year + '年' + mymonth + '月' + myday + '日 ' + weekday
// }
//
// export function getImgsrc (name) {
//   return "http://127.0.0.1:8081/images/"+name+".gif"
// }
//
// export var f;
