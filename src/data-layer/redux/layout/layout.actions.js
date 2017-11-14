"use strict";
exports.__esModule = true;
exports.SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';
exports.HIDE_LOGIN_DIALOG = 'HIDE_LOGIN_DIALOG';
exports.SET_REQUESTED_URL = 'SET_REQUESTED_URL';
exports.SHOW_LOGIN_DIALOG_SET_REQUESTED_URL = 'SHOW_LOGIN_DIALOG_SET_REQUESTED_URL';
exports.actionCreators = {
    showLoginDialog: function () { return ({
        type: exports.SHOW_LOGIN_DIALOG
    }); },
    hideLoginDialog: function () { return ({
        type: exports.HIDE_LOGIN_DIALOG
    }); },
    setRequestedURL: function (payload) { return ({
        type: exports.SET_REQUESTED_URL, payload: payload
    }); },
    showLoginDialogAndSetRequestedURL: function (payload) { return ({
        type: exports.SHOW_LOGIN_DIALOG_SET_REQUESTED_URL, payload: payload
    }); }
};
