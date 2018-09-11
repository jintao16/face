/**
 * Created by lyuwei
 * User: lvwei@seemmo.com
 * Date: 2018/09/10
 * Describe:
 * Log:
 *  ---- 2018/09/10 14:25 [lyuwei] 初次添加
 */
import serviceBase from './serviceBase';

const urlLoaction = 'http://' + window.location.host;

window.ctxPath = urlLoaction;

export const URLS = {
    gettollgateinfo: urlLoaction + '/business/gettollgateinfo.php',//卡口
    bs: urlLoaction + '/client/bs.php',
    push: urlLoaction + '/common/push.php',
    menulogic: urlLoaction + '/auth/menulogic.php',//菜单
    faceLib: urlLoaction + '/business/face_lib.php',//人像库
    channelConfig: urlLoaction + '/business/channel_config.php',//通道
    faceSearch: urlLoaction + '/client/face_search.php',//人脸检索
    userlogic: urlLoaction + '/auth/userlogic.php',// 登录
    statistics: urlLoaction + '/auth/statistics.php'// 登录
};

export default {
    // request: serviceBase.request,
    // 检查用户是否登录
    getUserLogin: function (params, axiosParams) {
        return serviceBase.request(URLS.userlogic, params, axiosParams);
    },
    // 获取菜单
    getMenuLogic: function (params, axiosParmas) {
        return serviceBase.request(URLS.menulogic, params, axiosParmas);
    },
    // 获取通道数据
    getChannelLogic: function (params, axiosParmas) {
        return serviceBase.request(URLS.channelConfig, params, axiosParmas);
    },
    getFaceLib: function (params, axiosParmas) {
        return serviceBase.request(URLS.faceLib, params, axiosParmas);
    },
    searchFace: function (params, axiosParmas) {
        return serviceBase.request(URLS.faceSearch, params, axiosParmas);
    },
    getStatistics: function (params, axiosParmas) {
        return serviceBase.request(URLS.statistics, params, axiosParmas);
    },
    getBSLogic: function (params, axiosParmas) {
        return serviceBase.request(URLS.bs, params, axiosParmas);
    },
    getPushLogic: function (params, axiosParmas) {
        return serviceBase.request(URLS.push, params, axiosParmas);
    },
    getGettollgateinfo: function (params, axiosParmas) {
        return serviceBase.request(URLS.gettollgateinfo, params, axiosParmas);
    }
};
