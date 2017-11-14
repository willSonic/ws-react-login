"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHECK_USER_PROFILE_NAME_ATTEMPT = 'CHECK_USER_PROFILE_NAME_ATTEMPT';
exports.CHECK_USER_PROFILE_NAME_FAILURE = 'CHECK_USER_PROFILE_NAME_FAILURE';
exports.CHECK_USER_PROFILE_NAME_SUCCESS = 'CHECK_USER_PROFILE_NAME_SUCCESS';
exports.RESET_USER_PROFILE_NAME_VALID = 'RESET_USER_PROFILE_NAME_VALID';
exports.SET_SELECTED_PROFILE_ID = 'SET_SELECTED_PROFILE_ID';
exports.GET_USER_PROFILE_ATTEMPT = 'GET_USER_PROFILE_ATTEMPT';
exports.GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';
exports.GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
exports.EDIT_USER_PROFILE_ATTEMPT = 'EDIT_USER_PROFILE_ATTEMPT';
exports.EDIT_USER_PROFILE_FAILURE = 'EDIT_USER_PROFILE_FAILURE';
exports.EDIT_USER_PROFILE_SUCCESS = 'EDIT_USER_PROFILE_SUCCESS';
exports.REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
exports.REGISTER_USER_ATTEMPT = 'REGISTER_USER_ATTEMPT';
exports.REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
exports.actionCreators = {
    checkUserProfileNameAttempt: function (payload) { return ({
        type: exports.CHECK_USER_PROFILE_NAME_ATTEMPT, payload: payload
    }); },
    checkUserProfileNameFailure: function (payload) { return ({
        type: exports.CHECK_USER_PROFILE_NAME_FAILURE, payload: payload
    }); },
    checkUserProfileNameSuccess: function (payload) { return ({
        type: exports.CHECK_USER_PROFILE_NAME_SUCCESS, payload: payload,
    }); },
    resetUserNameVailid: function (payload) { return ({
        type: exports.RESET_USER_PROFILE_NAME_VALID
    }); },
    setProfileSelectedId: function (payload) { return ({
        type: exports.SET_SELECTED_PROFILE_ID, payload: payload
    }); },
    getUserProfileAttempt: function (payload) { return ({
        type: exports.GET_USER_PROFILE_ATTEMPT, payload: payload
    }); },
    getUserProfileFailure: function (payload) { return ({
        type: exports.GET_USER_PROFILE_FAILURE, payload: payload
    }); },
    getUserProfileSuccess: function (payload) { return ({
        type: exports.GET_USER_PROFILE_SUCCESS, payload: payload
    }); },
    userRegistrationAttempt: function (payload) { return ({
        type: exports.REGISTER_USER_ATTEMPT, payload: payload
    }); },
    userRegistrationFailure: function (payload) { return ({
        type: exports.REGISTER_USER_FAILURE, payload: payload
    }); },
    userRegistrationuccess: function (payload) { return ({
        type: exports.REGISTER_USER_SUCCESS, payload: payload
    }); },
    updateUserProfileAttempt: function (payload) { return ({
        type: exports.EDIT_USER_PROFILE_ATTEMPT, payload: payload
    }); },
    updateUserProfileFailure: function (payload) { return ({
        type: exports.EDIT_USER_PROFILE_FAILURE, payload: payload
    }); },
    updateUserProfileSuccess: function (payload) { return ({
        type: exports.EDIT_USER_PROFILE_SUCCESS, payload: payload
    }); }
};
//# sourceMappingURL=profile.actions.js.map