"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_START_CLEAR_LOGIN = 'APP_START_CLEAR_LOGIN';
exports.LOGIN_USER_ATTEMPT = 'LOGIN_USER_ATTEMPT';
exports.LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
exports.LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
exports.LOGOUT_USER_ATTEMPT = 'LOGOUT_USER_ATTEMPT';
exports.LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';
exports.LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
exports.GET_SESSION_USER_ATTEMPT = 'GET_SESSION_USER_ATTEMPT';
exports.GET_SESSION_USER_SUCCESS = 'GET_SESSION_USER_SUCCESS';
exports.actionCreators = {
    appStartLoginClear: function () { return ({
        type: exports.APP_START_CLEAR_LOGIN,
    }); },
    userLoginAttempt: function (payload) { return ({
        type: exports.LOGIN_USER_ATTEMPT, payload: payload,
    }); },
    userLoginFailure: function (payload) { return ({
        type: exports.LOGIN_USER_FAILURE, payload: payload,
    }); },
    userLoginSuccess: function (payload) { return ({
        type: exports.LOGIN_USER_SUCCESS, payload: payload,
    }); },
    userLogoutAttempt: function () { return ({
        type: exports.LOGOUT_USER_ATTEMPT,
    }); },
    userLogoutFailure: function (payload) { return ({
        type: exports.LOGOUT_USER_FAILURE, payload: payload,
    }); },
    userLogoutSuccess: function (payload) { return ({
        type: exports.LOGOUT_USER_SUCCESS, payload: payload,
    }); },
    getSessionUserAttempt: function (payload) { return ({
        type: exports.GET_SESSION_USER_ATTEMPT, payload: payload,
    }); },
    getSessionUserSuccess: function (payload) { return ({
        type: exports.GET_SESSION_USER_SUCCESS, payload: payload,
    }); }
};
//# sourceMappingURL=user.session.actions.js.map