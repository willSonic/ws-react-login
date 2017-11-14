"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/observable/from");
var axios_wrapper_1 = require("./axios-wrapper");
var Config = {
    API: 'api',
    HOST: 'http://localhost',
    PORT: '8080'
};
var apiConfig = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 15000
};
var HttpWrapperService = /** @class */ (function () {
    function HttpWrapperService() {
        this._apiCore = new axios_wrapper_1["default"](apiConfig);
    }
    HttpWrapperService.prototype["delete"] = function (params) {
        var apiUrl = this.configRequest(params.uri, true).apiUrl;
        return rxjs_1.Observable.fromPromise(this._apiCore["delete"](apiUrl))
            .map(function (res) { return ({
            type: params.successActionType,
            payload: res.data
        }); })["catch"](function (res) { return rxjs_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: res.response
            }
        }); });
    };
    HttpWrapperService.prototype.get = function (params) {
        var apiUrl = this.configRequest(params.uri, params.auth).apiUrl;
        return rxjs_1.Observable.fromPromise(this._apiCore.get(apiUrl, params.payload))
            .map(function (res) { return ({
            type: params.successActionType,
            payload: res
        }); })["catch"](function (res) { return rxjs_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: res.response
            }
        }); });
    };
    HttpWrapperService.prototype.post = function (params) {
        var apiUrl = this.configRequest(params.uri, params.auth).apiUrl;
        return rxjs_1.Observable.fromPromise(this._apiCore.post(apiUrl, params.payload))
            .map(function (res) {
            // console.log("GOT map == res", res)
            return ({
                type: params.successActionType,
                payload: res
            });
        })["catch"](function (res) {
            //console.log("GOT ERROR == res", res.response)
            return rxjs_1.Observable.of({
                type: params.errorActionType,
                payload: {
                    action_type: params.specificErrorType,
                    message: res.response
                }
            });
        });
    };
    HttpWrapperService.prototype.put = function (params) {
        var apiUrl = this.configRequest(params.uri, true).apiUrl;
        return rxjs_1.Observable.fromPromise(this._apiCore.put(apiUrl, params.payload))
            .map(function (res) { return ({
            type: params.successActionType,
            payload: res
        }); })["catch"](function (res) { return rxjs_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: res.response
            }
        }); });
    };
    HttpWrapperService.prototype.configRequest = function (uri, authRequired) {
        if (authRequired === void 0) { authRequired = false; }
        var apiUrl = Config.HOST + ":" + Config.PORT + "/" + Config.API + "/" + uri;
        var newConfig = apiConfig;
        if (authRequired && !newConfig.headers.Authorization) {
            newConfig.headers.Authorization = "" + localStorage['Authorized'];
        }
        else if (!authRequired && newConfig.headers.Authorization) {
            newConfig.headers.Authorization = '';
        }
        return { apiUrl: apiUrl };
    };
    return HttpWrapperService;
}());
exports.HttpWrapperService = HttpWrapperService;
