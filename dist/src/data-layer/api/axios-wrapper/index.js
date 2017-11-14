"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/fromPromise");
var axios_1 = require("axios");
var ApiCore = /** @class */ (function () {
    function ApiCore(apiConfig) {
        this._apiConfig = apiConfig;
        this._AXIOS = generateAxiosInstance(this._apiConfig);
        this._AXIOS_FORM = generateFormDataAxiosInstance(this._apiConfig);
    }
    ApiCore.prototype.delete = function (urlPath) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._AXIOS.delete(urlPath)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                    case 2:
                        error_1 = _a.sent();
                        //handleErrors(error);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ApiCore.prototype.get = function (urlPath, params) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._AXIOS.get(urlPath, { params: params })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                    case 2:
                        error_2 = _a.sent();
                        handleErrors(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ApiCore.prototype.patch = function (urlPath, data) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._AXIOS.patch(urlPath, data)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                    case 2:
                        error_3 = _a.sent();
                        handleErrors(error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ApiCore.prototype.post = function (urlPath, data) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._AXIOS.post(urlPath, data)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                    case 2:
                        error_4 = _a.sent();
                        //handleErrors(error);
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ApiCore.prototype.postFormData = function (urlPath, data) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._AXIOS_FORM.post(urlPath, getFormData(data))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                    case 2:
                        error_5 = _a.sent();
                        //handleErrors(error);
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ApiCore.prototype.put = function (urlPath, data) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._AXIOS.put(urlPath, data)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                    case 2:
                        error_6 = _a.sent();
                        handleErrors(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ApiCore.prototype.refreshApiInstance = function (newConfig) {
        this._apiConfig = newConfig;
        this._AXIOS = generateAxiosInstance(this._apiConfig);
        this._AXIOS_FORM = generateFormDataAxiosInstance(this._apiConfig);
    };
    /* public get axios instance for testing purposes */
    ApiCore.prototype.getAxiosInstance = function () {
        return this._AXIOS;
    };
    return ApiCore;
}());
exports.default = ApiCore;
function generateAxiosInstance(apiConfig) {
    return axios_1.default.create(apiConfig);
}
function generateFormDataAxiosInstance(apiConfig) {
    var formDataConfig = apiConfig;
    formDataConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return generateAxiosInstance(formDataConfig);
}
function getFormData(object) {
    var formData = new FormData();
    Object.keys(object).forEach(function (key) { return formData.append(key, object[key]); });
    return formData;
}
function handleErrors(error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
    else if (error.request) {
        console.log(error.request);
    }
    else {
        console.log('Api Core Error', error.message);
    }
    console.log(error.config);
}
//# sourceMappingURL=index.js.map