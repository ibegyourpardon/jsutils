class Storage {
  constructor() {
    this.writeTime = Number(new Date()); // 写入时间
  }
  isNotExist(value) {
    return value === null || typeof(value) === 'undefined';
  }
}

class LocalStorage {
  /**
   * set 方法，设置
   * @param key String 键
   * @param value 值
   * @param expired writeTime 写入时间，单位：ms
   */
  set (key, value, expired) {
    let data = {
      value
      writeTime: this.writeTime, // 写入时间，继承自 Stroage
      expired
    };
    // 值是数组，不能直接存储，需要转换 JSON.stringify
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * get 方法，获取
   * @param key 键
   */
  get () {
    const dataJSON = localStorage.getItem(key);
    // 当目标不存在时直接结束
    if (this.isNotExist(dataJSON)) {
      return null;
    }
    let data = JSON.parse(dataJSON);
    // 当数据的存在周期未定义时，它被认为是永久的
    if (this.isNotExist(data.expired)) {
      return data.value;
    }
    // 数据声明期结束时释放数据
    if (this.isOutPeriod(data)) {
      this.del(key);
      return null;
    }
    return data.value;
  }
  
  /**
   * del 方法，删除
   * @param key 键
   */
  del (key) {
    localStorage.removeItem(key);
  }
  
  /**
   * isOutPeriod 方法，判断 value 值是否过期
   * @param value 值
   */
  isOutPeriod (value) {
    if (!value.value) {
      return true;
    }  
    let readTime = Number(new Date());
    return (readTime - value.writeTime) > value.expired;
  }
}


export const localstorage = new LocalStorage();


// how to use
//util
// import { localstorage } from './storage';
// export { localstorage };

// import { localstorage } from 'yourPath/utils';
// 存储 access_token，有效时间为 5 分钟
// localstorage.set('access_token', 'test', 1000 * 60 * 5);
// 获取 access_token
// localstorage.get('access_token'); // test
// 删除 access_token
// localstorage.del('access_token');