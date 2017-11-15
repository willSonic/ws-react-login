"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_session_actions_1 = require("./user.session.actions");
var profile_actions_1 = require("../profile/profile.actions");
exports.initialState = {
    user: null,
    token: '',
    loading: false,
    loaded: false,
    errorMessage: ''
};
function UserSessionReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case profile_actions_1.REGISTER_USER_ATTEMPT:
        case user_session_actions_1.LOGIN_USER_ATTEMPT:
        case user_session_actions_1.APP_START_CLEAR_LOGIN: {
            localStorage.clear();
            return Object.assign({}, state, { user: {}, token: '', loading: false, loaded: false, errorMessage: '' });
        }
        case profile_actions_1.REGISTER_USER_SUCCESS:
        case user_session_actions_1.LOGIN_USER_SUCCESS: {
            if (action.payload.hasOwnProperty('user')) {
                //const user:UserModel = <UserModel>(action.payload.user);
                var session = action.payload;
                if (session && session.user && state.user && state.user.hasOwnProperty('id') && (state.user.id === session.user.id)) {
                    return state;
                }
                if (session.token) {
                    localStorage.setItem('Authorized', session.token);
                }
                return Object.assign({}, state, session, { loading: false, loaded: true, errorMessage: '' });
            }
            else {
                return state;
            }
        }
        case user_session_actions_1.GET_SESSION_USER_SUCCESS: {
            var session = action.payload;
            if (state.user && session && session.user && (state.user.id === session.user.id)) {
                return state;
            }
            return Object.assign({}, state, session);
        }
        case user_session_actions_1.LOGOUT_USER_SUCCESS: {
            localStorage.clear();
            return Object.assign({}, state, { user: {}, token: '', loading: false, loaded: false, errorMessage: '' });
        }
        case user_session_actions_1.LOGIN_USER_FAILURE: {
            return Object.assign({}, { user: null,
                token: '',
                loading: false,
                loaded: false,
                errorMessage: action.payload.message });
        }
        default: {
            return state;
        }
    }
}
exports.UserSessionReducer = UserSessionReducer;
exports.getUser = function (state) { return state.user; };
exports.getToken = function (state) { return state.token; };
exports.getUserLoading = function (state) { return state.loading; };
exports.getUserLoaded = function (state) { return state.loaded; };
//# sourceMappingURL=user.session.reducer.js.map