import axios from 'axios';
import router from '../router';
import tools from './tools';

// 创建axios实例
const serviceBase = axios.create({
    // baseURL: '',
    timeout: 5000, // 请求的超时时间
    withCredentials: true // 允许携带cookie
});

// 请求拦截器
serviceBase.interceptors.request.use(
    (config) => {
        if (config.loading) {
            tools.showLoading(config.loading.msg);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
serviceBase.interceptors.response.use(
    (response) => {
        if (response.status !== 200) {
            return {};
        }
        let { data } = response;

        if (data && parseInt(data.code, 10) === 403) {
            tools.message('未登录', 'error');
            router.replace({
                path: '/login'
            });
        }
        tools.closeLoading();
        return data;
    },
    (error) => {
        tools.message('网络错误,请刷新重试!', 'error');
        tools.closeLoading();
        return Promise.reject(error);
    }
);

function errorHandler(error) {
    if (process.env.NODE_ENV !== 'production') {
        console.info('%c [axios error]:', 'color: yellow', error);
    }
}

/**
 * 封装axios的请求
 * @param url {String} 请求url
 * @param queryParams {Object} 请求参数，参数为对象
 * @param axiosParams {Object} axios的相关设置参数，如 method，loading，responseType
 */
function request(url, queryParams, axiosParams) {
    if (!url) {
        tools.message('url为空', 'error');
        return;
    }
    queryParams = queryParams || {};
    axiosParams = axiosParams || {};
    // 丑陋的设置默认值
    axiosParams.method = axiosParams.method || 'GET';
    axiosParams.url = url;
    axiosParams.responseType = axiosParams.responseType || 'json';
    axiosParams.loading = axiosParams.loading || false;
    // 根据请求类型，将params设置到对应的属性中
    if (axiosParams.method.toLowerCase() === 'post') {
        axiosParams.data = queryParams;
    } else {
        axiosParams.params = queryParams;
    }
    return serviceBase(axiosParams).catch(errorHandler);
}

export default {
    request
};
