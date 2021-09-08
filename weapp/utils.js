/**
 * 路由调转
 *  @param {*} url 跳转路径以及参数
 */
function JumpNavigateTo(url) {
    wx.navigateTo({
        url: url,
        fail: () => {
            wx.reLaunch({
                url: url,
            });
        },
    });
}

function contain(name) {
    if (
        wx.getStorageSync(name) &&
        wx.getStorageInfoSync().keys.indexOf(name) != -1
    ) {
        let obj = {
            value: wx.getStorageSync(name),
            isContain: true,
        };
        return obj;
    } else {
        let obj = {
            isContain: false,
        };
        return obj;
    }
}

function formatTime(date, sep = '/') {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    return (
        [year, month, day].map(formatNumber).join(sep) +
        ' ' + [hour, minute, second].map(formatNumber).join(':')
    );
}

function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

function getDayWeek(date) {
    let data = new Date();
    if (date) {
        data = new Date(date);
    }
    console.log(data)
    let year = data.getFullYear();
    let month = data.getMonth() + 1;
    let daTa = data.getDate();
    // let Emonth = getMonth(data);
    data.setMonth(month);
    data.setDate(0) //关键
    let day = data.getDate() - new Date().getDate()
    if (date) {
        day = data.getDate() - new Date(date).getDate()
    }
    let arr1 = []
    console.log(day, daTa)
    for (let i = 0; i <= day; i++) {
        let a = daTa + i
        if (a == daTa) {
            arr1.push({
                day: a,
                week: "今天",
                state: 0,
                EnglishTime: [getEweek(year, month, a), a, getMonth(data)]
            })
        } else if (a == daTa + 1) {
            arr1.push({
                day: a,
                week: "明天",
                state: 1,
                EnglishTime: [getEweek(year, month, a), a, getMonth(data)]
            })
        } else {
            arr1.push({
                day: a,
                week: getWeek(year, month, a),
                state: 2,
                EnglishTime: [getEweek(year, month, a), a, getMonth(data)]
            })
        }
    }

    function getWeek(year, month, date) {
        return new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[new Date(year + '-' + month + '-' + date).getDay()]
    }

    function getMonth(data) {
        return new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")[data.getMonth()]
    }

    function getEweek(year, month, date) {
        return new Array("Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat")[new Date(year + '-' + month + '-' + date).getDay()]
    }

    return arr1
}

function fun_data(str) {
    let base = new Date().getTime();
    if (str) {
        base = new Date(str).getTime();
    }
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    let data = [Math.random() * 300];
    let time = new Date(base);
    let week1 = [{
        name: '今天',
        state: 0,
    }, {
        name: '明天',
        state: 1,
    }];
    date.push([time.getFullYear(), time.getMonth() + 1, time.getDate()].join('/'));
    for (let i = 1; i < 7; i++) {
        let now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    let newdate = date

    function getWeek(time) {
        return new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[new Date(time).getDay()]
    }

    function getMonth(time) {
        return new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")[new Date(time).getMonth()]
    }

    function getEweek(time) {
        return new Array("Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat")[new Date(time).getDay()]
    }
    let arr = []
    let today = new Date()

    if (today.getFullYear() == time.getFullYear() && today.getMonth() + 1 == time.getMonth() + 1 && today.getDate() == time.getDate()) {
        for (let i = 0; i < newdate.length; i++) {
            arr.push({
                month: newdate[i].split("/")[1],
                day: formatNumber(newdate[i].split("/")[2]),
                week: i < week1.length ? week1[i].name : getWeek(newdate[i]),
                state: i < week1.length ? week1[i].state : 3,
                EnglishTime: [getEweek(newdate[i]), formatNumber(newdate[i].split("/")[2]), getMonth(newdate[i])],
                time: [newdate[i].split("/")[0], newdate[i].split("/")[1], formatNumber(newdate[i].split("/")[2]), getWeek(newdate[i])],
                Eweek: getEweek(newdate[i])
            })
        }
    } else {
        for (let i = 0; i < newdate.length; i++) {
            arr.push({
                month: newdate[i].split("/")[1],
                day: formatNumber(newdate[i].split("/")[2]),
                week: getWeek(newdate[i]),
                state: 3,
                EnglishTime: [getEweek(newdate[i]), formatNumber(newdate[i].split("/")[2]), getMonth(newdate[i])],
                time: [newdate[i].split("/")[0], newdate[i].split("/")[1], formatNumber(newdate[i].split("/")[2]), getWeek(newdate[i])],
                Eweek: getEweek(newdate[i])
            })
        }
    }

    return arr;
}

/**
 * @交互封装
 * @title 显示的内容
 * @icon 显示的图标
 *@time 显示多久
 * */
function showToast(title, icon = 'none', time = 1500, fn) {
    wx.showToast({
        title: title,
        icon: icon,
        duration: time,
        success(res) {
            fn && fn()
        }
    })
}

//显示发布时间的函数
function pastTime(time) {
    let now = new Date().getTime();
    // 下面两种转换格式都可以。
    let tmpTime = Date.parse(time.replace(/-/gi, "/"));
    // 返回值
    let result;
    // 一分钟 1000 毫秒 乘以 60
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let week = day * 7;
    let month = day * 30;
    let year = day * 365;
    // 现在时间 减去 传入时间 得到差距时间
    let diffValue = now - tmpTime;
    // 小于 0 直接返回
    if (diffValue < 0) {
        return;
    }
    // 计算 差距时间除以 指定时间段的毫秒数
    let yearC = diffValue / year;
    let monthC = diffValue / month;
    let weekC = diffValue / week;
    let dayC = diffValue / day;
    let hourC = diffValue / hour;
    let minC = diffValue / minute;
    if (yearC >= 1) {
        result = "" + parseInt(yearC) + "年前";
    } else if (monthC >= 1) {
        result = "" + parseInt(monthC) + "月前";
    } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
    } else {
        result = "刚刚";
    }
    return result;
}

// 倒计时
function showtime(value = new Date()) {
    let nowtime = new Date() //获取当前时间
    let endtime = new Date(value); //定义结束时间
    let lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
        leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
        lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24), //计算小时数
        leftm = Math.floor(lefttime / (1000 * 60) % 60), //计算分钟数
        lefts = Math.floor(lefttime / 1000 % 60); //计算秒数
    leftd = formatNumber(leftd)
    lefth = formatNumber(lefth)
    leftm = formatNumber(leftm)
    lefts = formatNumber(lefts)
    let obj = {
        leftd,
        lefth,
        leftm,
        lefts,
        lefttime,
    }
    return obj
}


//格林威治时间转本地格式
function format(date, fmt) {
    if (date == null || date == '' || date == 'undefined') {
        return '';
    }
    date = date + '';
    date = date.replace(/\-/g, "/");
    date = date.replace(/\GMT/g, "GMT+0800");
    if (date.indexOf('GMT') == -1) {
        date = date.replace(/\T/g, " ");
    }
    if (date.indexOf('.') != -1) {
        date = date.substr(0, date.indexOf('.'));
    }
    date = new Date(date);
    fmt = fmt || "yyyy-MM-dd hh:mm:ss";
    var o = {
        "M+": date.getMonth() + 1, //月份   
        "d+": date.getDate(), //日   
        "h+": date.getHours(), //小时   
        "m+": date.getMinutes(), //分   
        "s+": date.getSeconds(), //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}



module.exports = {
    JumpNavigateTo,
    contain,
    formatTime,
    getDayWeek,
    fun_data,
    showToast,
    pastTime,
    formatNumber,
    showtime,
    format
};