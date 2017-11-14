"use strict";
exports.__esModule = true;
var layout_actions_1 = require("./layout.actions");
var initialState = {
    showLoginDialog: false,
    requestedURL: ''
};
function LayoutReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case layout_actions_1.HIDE_LOGIN_DIALOG: {
            return {
                showLoginDialog: false,
                requestedURL: ''
            };
        }
        case layout_actions_1.SHOW_LOGIN_DIALOG: {
            return {
                showLoginDialog: true,
                requestedURL: state.requestedURL
            };
        }
        case layout_actions_1.SET_REQUESTED_URL: {
            return {
                showLoginDialog: state.showLoginDialog,
                requestedURL: action.payload
            };
        }
        case layout_actions_1.SHOW_LOGIN_DIALOG_SET_REQUESTED_URL: {
            return {
                showLoginDialog: true,
                requestedURL: action.payload
            };
        }
        default:
            return state;
    }
}
exports.LayoutReducer = LayoutReducer;
exports.getShowLoginDialog = function (state) { return state.showLoginDialog; };
exports.getRequestedURL = function (state) { return state.requestedURL; };
