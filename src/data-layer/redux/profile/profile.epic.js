"use strict";
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/withLatestFrom");
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/of");
var errorActions = require("../error/error.actions");
var profileActions = require("../profile/profile.actions");
var fromRoot = require("../root-reducer");
var user_service_1 = require("../../api/user.service");
var userServices = new user_service_1.UserServices();
var ProfileEpic = /** @class */ (function () {
    function ProfileEpic() {
    }
    ProfileEpic.registerUser$ = function (action$) {
        return action$.ofType(profileActions.REGISTER_USER_ATTEMPT)
            .switchMap(function (_a) {
            var payload = _a.payload;
            return userServices.registerUser(payload, errorActions.REPORT_ERROR, profileActions.REGISTER_USER_FAILURE, profileActions.REGISTER_USER_SUCCESS);
        });
    };
    ProfileEpic.getUserByName$ = function (action$) {
        return action$.ofType(profileActions.CHECK_USER_PROFILE_NAME_ATTEMPT)
            .switchMap(function (_a) {
            var payload = _a.payload;
            return userServices.getUserByName(payload, errorActions.REPORT_ERROR, profileActions.CHECK_USER_PROFILE_NAME_FAILURE, profileActions.CHECK_USER_PROFILE_NAME_SUCCESS);
        });
    };
    ProfileEpic.getUserProfile$ = function (action$) {
        return action$.ofType(profileActions.GET_USER_PROFILE_ATTEMPT)
            .withLatestFrom([fromRoot.getProfileEntities])
            .map(function (_a) {
            var payload = _a[0].payload, profileEntities = _a[1];
            return [payload, { profileEntities: profileEntities }];
        })
            .switchMap(function (_a) {
            var username = _a[0], profileEntities = _a[1];
            var existsInStore = Object.keys(profileEntities).filter(function (entity) {
                if (profileEntities[entity].username === username) {
                    return profileEntities[entity];
                }
            });
            var obs;
            if (existsInStore && existsInStore.length > 0) {
                obs = Observable_1.Observable.of(profileActions.actionCreators.setProfileSelectedId(existsInStore[0]));
            }
            else {
                obs = userServices.getUserByName(username, errorActions.REPORT_ERROR, profileActions.CHECK_USER_PROFILE_NAME_FAILURE, profileActions.GET_USER_PROFILE_SUCCESS);
            }
            return obs;
        });
    };
    return ProfileEpic;
}());
exports.ProfileEpic = ProfileEpic;
