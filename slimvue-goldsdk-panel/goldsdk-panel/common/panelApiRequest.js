import Vue from 'vue';
import Qs from 'qs'
import axios from 'axios'
import {
    MessageBox
} from 'element-ui';
import {
    getToken
} from '@/common/token'

// 创建axios实例
const apiRequest = axios.create({
    baseURL: (undefined === window.bridge ? process.env.bridge.api_url : window.bridge.api_url) + '/panel-api/', // api的base_url
    timeout: 0 // 请求超时时间
})

// request拦截器
apiRequest.interceptors.request.use(config => {
    config.headers[process.env.PANEL_TOKEN_NAME] = getToken()
    if (config.method === 'post') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        config.transformRequest = [function (data) {
            // 对 data 进行任意转换处理
            return Qs.stringify(data)
        }]
    }
    return config
}, error => {
    console.log('Fail: ' + error) // for debug
    Promise.reject(error)
})

window.addEventListener('offline', function () {
    window.sessionStorage.setItem('line', 'off')
    Vue.prototype.$message({
        showClose: true,
        message: 'Network is unavailable',
        type: 'error'
    });
})
window.addEventListener('online', function () {
    window.sessionStorage.setItem('line', 'on')
    Vue.prototype.$message({
        showClose: true,
        message: 'Network is available',
        type: 'info'
    });
})
// respone拦截器
apiRequest.interceptors.response.use(
    response => {
        const res = response.data
        if (res.header.status_code === 200) {
            return res.body
        }
    },
    error => {
        const res = error.response.data
        switch (res.header.status_code) {
            case 400:
                Vue.prototype.$message({
                    showClose: true,
                    message: res.header.msg,
                    type: 'error'
                });
                break;
            case 404:
                Vue.prototype.$message({
                    showClose: true,
                    message: res.header.msg,
                    type: 'error'
                });
                break;
            case 403:
                window.location.reload()
                break;
            case 500:
                Vue.prototype.$message({
                    showClose: true,
                    message: 'Internal Server Error',
                    type: 'error'
                });
                break;
            case 504:
                Vue.prototype.$message({
                    showClose: true,
                    message: 'Bad Gateway',
                    type: 'error'
                });
                break;
            default:
                Vue.prototype.$message({
                    showClose: true,
                    message: 'Internal Server Error',
                    type: 'error'
                });
        }
        return Promise.reject(res.header)
    }
)

export default apiRequest