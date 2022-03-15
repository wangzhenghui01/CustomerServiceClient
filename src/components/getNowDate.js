
export default () => {
  // 求取当前时间的工具
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
