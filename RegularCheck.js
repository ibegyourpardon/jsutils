function RegularCheck(options) {
  this._init(options)
}

RegularCheck.prototype._init = function (options) {
  this.$options = options
  console.log('started')
}

RegularCheck.prototype.usernameCheck = function (username) {
  //用户名正则，4到16位（字母，数字，下划线，减号）
let uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
//输出 true
return uPattern.test(username);
}

RegularCheck.prototype.passwordCheck = function (password) {
  //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
//输出 true
return pPattern.test(password);
}

RegularCheck.prototype.emailCheck = function (email) {
  //邮箱正则
  let ePattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  //输出 true
  return ePattern.test(email);
}

RegularCheck.prototype.phoneCheck = function (phone) {
  //手机号正则
  let pPattern = /^1[34578]\d{9}$/;
  //输出 true
  return pPattern.test(phone);
}

RegularCheck.prototype.idCardCheck = function (idCard) {
  //身份证正则
  let iPattern = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  //输出 true
  return iPattern.test(idCard);
}


RegularCheck.prototype.bankCardCheck = function (bankCard) {
  //银行卡正则
  let bPattern = /^([1-9]{1})(\d{14}|\d{18})$/;
  //输出 true
  return bPattern.test(bankCard);
}

RegularCheck.prototype.numberCheck = function (number) {
  //数字正则
  let nPattern = /^[0-9]*$/;
  //输出 true
  return nPattern.test(number);
}

RegularCheck.prototype.chineseCheck = function (chinese) {
  //中文正则
  let cPattern = /^[\u4e00-\u9fa5]{0,}$/;
  //输出 true
  return cPattern.test(chinese);
}

RegularCheck.prototype.englishCheck = function (english) {
  //英文正则
  let ePattern = /^[A-Za-z]+$/;
  //输出 true
  return ePattern.test(english);
}

RegularCheck.prototype.urlCheck = function (url) {
  //url正则
  let uPattern = /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;
  //输出 true
  return uPattern.test(url);
}

RegularCheck.prototype.dateCheck = function (date) {
  //日期正则
  let dPattern = /^(\d{4})-(\d{2})-(\d{2})$/;
  //输出 true
  return dPattern.test(date);
}

RegularCheck.prototype.timeCheck = function (time) {
  //时间正则
  let tPattern = /^(\d{2}):(\d{2}):(\d{2})$/;
  //输出 true
  return tPattern.test(time);
}

RegularCheck.prototype.dateTimeCheck = function (dateTime) {
  //日期时间正则
  let dtPattern = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
  //输出 true
  return dtPattern.test(dateTime);
}

RegularCheck.prototype.qqCheck = function (qq) {
  //qq正则
  let qPattern = /^[1-9]\d{4,10}$/;
  //输出 true
  return qPattern.test(qq);
}

RegularCheck.prototype.ipCheck = function (ip) {
  //ip正则
  let iPattern = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  //输出 true
  return iPattern.test(ip);
}

RegularCheck.prototype.macCheck = function (mac) {
  //mac正则
  let mPattern = /^([A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2}$/;
  //输出 true
  return mPattern.test(mac);
}

RegularCheck.prototype.zipCodeCheck = function (zipCode) {
  //邮编正则
  let zPattern = /^[1-9]\d{5}$/;
  //输出 true
  return zPattern.test(zipCode);
}

RegularCheck.prototype.hexadecimalCheck = function (hexadecimal) {
  //16进制正则
  let hPattern = /^[0-9a-fA-F]{6}$/;
  //输出 true
  return hPattern.test(hexadecimal);
}

RegularCheck.prototype.colorCheck = function (color) {
  //颜色正则
  let cPattern = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
  //输出 true
  return cPattern.test(color);
}


RegularCheck.prototype.includeChineseCheck = function (includeChinese) {
  //包含中文正则
  let icPattern = /[\u4e00-\u9fa5]/;
  //输出 true
  return icPattern.test(includeChinese);
}


module.exports = RegularCheck