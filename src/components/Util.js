import Vue from 'vue'
// 登录后获取的所有数据，需要自行获取
export var f

export function getAttendanceState (item, timeToWork, timeToGo) {
  item.f_state = ''
  if (!item.f_signin_time || !item.f_knockoff_time) {
    item.f_state = '缺勤'
  } else {
    let signin_time = item.f_signin_time.substring(11, 16)
    let knockoff_time = item.f_knockoff_time.substring(11, 16)
    if (signin_time > timeToWork) {
      item.f_state = '迟到'
    }
    if (knockoff_time < timeToGo) {
      item.f_state = item.f_state + '早退'
    }
  }
  if (!item.f_state) {
    item.f_state = '正常'
  }
}

export function isEmpty (str) {
  return str === undefined || str === null || str.toString().trim() === ''
}

export function toStandardYearMonth () {
  let dt = new Date()
  let month = dt.getMonth() + 1
  return dt.getFullYear() + '-' + (month < 10 ? '0' + month : month)
}
export function toStandardYearMonth1 () {
  let dt = new Date()
  let month = dt.getMonth() + 1
  return dt.getFullYear() + (month < 10 ? '0' + month : month)
}

export function toStandardDateString () {
  let dt = new Date()
  let month = dt.getMonth() + 1
  let date = dt.getDate()
  return dt.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
}

export function toStartAndEndDateString () {
  let dt = new Date()
  let month = dt.getMonth() + 1
  // let date = dt.getDate()
  return [dt.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-01',
  dt.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (new Date(dt.getFullYear(), month, 0).getDate())]
  // return dt.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
}

export function toStandardTimeString () {
  let dt = new Date()
  let month = dt.getMonth() + 1
  let date = dt.getDate()
  let hour = dt.getHours()
  let min = dt.getMinutes()
  let sec = dt.getSeconds()
  return dt.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date) +
  ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
}

export function to3339TimeString () {
  let dt = new Date()
  let month = dt.getMonth() + 1
  let date = dt.getDate()
  let hour = dt.getHours()
  let min = dt.getMinutes()
  let sec = dt.getSeconds()
  return dt.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date) +
   'T' + (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
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
  return !window.isNaN(n) && n % 1 === 0
}

export function isFloat(n){
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
            }, false)
      element.addEventListener('error', function() {
                reject(element)
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
  // 求取当前时间的工具
  let myweekday = ''
  let year = ''
  let mydate = new Date()
  myweekday = mydate.getDay()
  let mymonth = mydate.getMonth() + 1
  let myday = mydate.getDate()
  let myyear = mydate.getYear()
  year = (myyear > 200) ? myyear : 1900 + myyear
  let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期日', '星期六']
  // document.write("<font color=#ffffff>今天是 "+year+"年"+mymonth+"月"+myday+"日 "+weekday+"</font>");
  return year + '年' + mymonth + '月' + myday + '日  ' + week[myweekday]
}


export function addDate (date, days) {
  // 求取当前时间的工具
  let endDate = new Date(date)
  endDate = endDate.valueOf()
  endDate = endDate + days * 24 * 60 * 60 * 1000
  endDate = new Date(endDate)
  let month = endDate.getMonth() + 1
  let day = endDate.getDate()
  let hour = endDate.getHours()
  let min = endDate.getMinutes()
  let sec = endDate.getSeconds()
  return endDate.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day) +
  ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
  // return a
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

export function nextMonth20 (date) {
  let ds = date.split('-')
  let nextMonth = ds[1] - 0 + 1
  return ds[0] + '-' + (nextMonth < 10 ? '0' + nextMonth : nextMonth) + '-20 00:00:00'
}

export function beginDate (date) {
  let arr = date.split(' ')
  if (arr.length > 1) {
    // 带有时分秒的 将时分秒归0
    arr[1] = '00:00:00'
  } else {
    arr.push('00:00:00')
  }
  return arr[0] + ' ' +arr[1]
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
