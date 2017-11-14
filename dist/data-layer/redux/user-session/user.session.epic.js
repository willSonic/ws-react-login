"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mapTo");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/switchMapTo");
require("rxjs/add/operator/toArray");
require("rxjs/add/observable/of");
var Observable_1 = require("rxjs/Observable");
var react_router_redux_1 = require("react-router-redux");
var errorActions = require("../error/error.actions");
var userSessionActions = require("../user-session/user.session.actions");
var user_service_1 = require("../../api/user.service");
var userServices = new user_service_1.UserServices();
var UserSessionEpic = /** @class */ (function () {
    function UserSessionEpic() {
    }
    //@Effect()  startAppClearUser$  = Observable.of(new usersessionActions.AppStartLoginClear());
    UserSessionEpic.loginUser$ = function (action$) {
        return action$.ofType(userSessionActions.LOGIN_USER_ATTEMPT)
            .switchMap(function (_a) {
            var payload = _a.payload;
            return userServices.loginUser(payload, errorActions.REPORT_ERROR, userSessionActions.LOGIN_USER_FAILURE, userSessionActions.LOGIN_USER_SUCCESS);
        });
    };
    UserSessionEpic.logoutUser$ = function (action$) {
        return action$.ofType(userSessionActions.LOGOUT_USER_ATTEMPT)
            .switchMap(function () {
            return userServices.logoutUser(errorActions.REPORT_ERROR, userSessionActions.LOGOUT_USER_FAILURE, userSessionActions.LOGOUT_USER_SUCCESS);
        });
    };
    UserSessionEpic.logoutUserSuccess$ = function (action$) {
        return action$.ofType(userSessionActions.LOGOUT_USER_SUCCESS)
            .switchMap(function () { return Observable_1.Observable.of(react_router_redux_1.push('/')); });
    };
    UserSessionEpic.removeErrorModelCheckUserFailure$ = function (action$) {
        return action$.ofType(userSessionActions.LOGIN_USER_FAILURE)
            .switchMap(function (_a) {
            var payload = _a.payload;
            return Observable_1.Observable.of(errorActions.actionCreators.removeError(payload));
        });
    };
    return UserSessionEpic;
}());
exports.UserSessionEpic = UserSessionEpic;
//# sourceMappingURL=user.session.epic.js.map