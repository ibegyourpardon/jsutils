module.exports = {
    // 小程序登录
    appid_login(data) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: "https://testapi.tuozhong.net/csy/program/login",
                method: "POST",
                data: data,
                success(res) {
                    if (res.data.code == 200) {
                        wx.setStorage({
                            key: "token",
                            data: res.data.data,
                        })
                        if (res.data.role) {
                            wx.setStorage({
                                key: "role",
                                data: res.data.role,
                            })
                        } else {
                            wx.removeStorageSync('role')
                        }
                    }
                    resolve(res)
                },
                fail(err) {
                    reject(err)
                },
            })
        })
    },
    /*
     * @cloud_get_openId 获取云函数的openId
     */
    cloud_get_openid() {
        //利用云函数获得openid并输出
        return new Promise((resolve, reject) => {
            wx.cloud.callFunction({
                name: "login",
                success(res) {
                    wx.setStorage({
                        key: "openid",
                        data: res.result.openid
                    })
                    resolve(res.result.openid);
                },
                fail(res) {
                    console.log(res)
                    reject("0");
                }
            });
        });
    },
}