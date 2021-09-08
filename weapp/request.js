import $utils from './utils'
import $finishing from './finishing'

class Request {
    get(url, data) {
        return this.request('GET', url, data);
    }
    post(url, data) {
        return this.request('POST', url, data);
    }
    request(method, url, data) {
        return new Promise((resolve, reject) => {
            if ($utils.contain('token').isContain) {
                wx.request({
                    url: `https://theapi.net/api/${url}`,
                    data,
                    method,
                    header: {
                        Authorization: "Bearer" + " " + $utils.contain('token').value
                    },
                    success(res) {
                        if (res.data.msg == 'Permission denied') {
                            console.log(11)
                            res.data.msg = '对不起你没有权限'
                        }
                        resolve(res.data);
                    },
                    fail(res) {
                        reject(res);
                    },
                });
            } else {
                wx.request({
                    url: `https://theapi.net/api/${url}`,
                    data,
                    method,
                    success(res) {
                        resolve(res.data);
                    },
                    fail(res) {
                        reject(res);
                    },
                });
            }

        });
    }
}



const request = new Request({});

export default {
    request,
};
