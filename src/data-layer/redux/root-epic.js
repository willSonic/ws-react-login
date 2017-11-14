"use strict";
exports.__esModule = true;
var redux_observable_1 = require("redux-observable");
var error_epic_1 = require("./error/error.epic");
var user_session_epic_1 = require("./user-session/user.session.epic");
var profile_epic_1 = require("./profile/profile.epic");
exports.RootEpic = redux_observable_1.combineEpics(error_epic_1.ErrorEpic.catchAllRemoteErrors, user_session_epic_1.UserSessionEpic.loginUser$, user_session_epic_1.UserSessionEpic.logoutUser$, user_session_epic_1.UserSessionEpic.logoutUserSuccess$, user_session_epic_1.UserSessionEpic.removeErrorModelCheckUserFailure$, profile_epic_1.ProfileEpic.registerUser$, profile_epic_1.ProfileEpic.getUserByName$, profile_epic_1.ProfileEpic.getUserProfile$);
