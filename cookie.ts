/***
@description js原生设置cookie*
@param {String} name 给你要设置的cookie起个名字（key）*
@param {String} value cookie的具体内容(value)*
@param {String} expiredays 设置cookie的过期时间，单位：天*/
function setCookie(name: string, value: any, expiredays: number) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : 'expires=' + exdate.toUTCString());
}


/***
@description js原生获取cookie方法1*
@param {String} name 你要获取的cookie名*/
function getCookie(name: string) {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(name + '=');
    if (start !== -1) {
      start = start + name.length + 1;
      let end = document.cookie.indexOf(';', start);
      if (end === -1) {
        end = document.cookie.length;
        return unescape(document.cookie.substring(start, end));
      }
    }
  }
  return '';
}


//检查cookie是否已存在
function checkCookie(name: string): boolean  {　　
  let thecookie = getCookie(name);　　
  if (thecookie !== null && thecookie !== '') {　　　　
      return true
  } else {　　　　
    return false
}}

