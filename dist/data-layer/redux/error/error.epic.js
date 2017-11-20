"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var react_router_redux_1 = require("react-router-redux");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/of");
var errorActions = require("./error.actions");
var profileActions = require("../profile/profile.actions");
var userSessionActions = require("../user-session/user.session.actions");
var ErrorEpic = /** @class */ (function () {
    function ErrorEpic() {
    }
    ErrorEpic.catchAllRemoteErrors = function (action$) {
        return action$.ofType(errorActions.REPORT_ERROR)
            .switchMap(function (_a) {
            var payload = _a.payload;
            console.log('ErrorEpic ----- payload =', payload);
            var obs;
            switch (payload.action_type) {
                case profileActions.CHECK_USER_PROFILE_NAME_FAILURE:
                    if (window.location.href.indexOf('register') > 0) {
                        obs = Observable_1.Observable.of(profileActions.actionCreators.checkUserProfileNameFailure(payload));
                    }
                    else {
                        obs = Observable_1.Observable.of(react_router_redux_1.push('/error'));
                    }
                    break;
                case userSessionActions.LOGIN_USER_FAILURE:
                    obs = Observable_1.Observable.of(userSessionActions.actionCreators.userLoginFailure(payload));
                    break;
                default: {
                    obs = Observable_1.Observable.of(react_router_redux_1.push('/error'));
                }
            }
            return obs;
        });
    };
    return ErrorEpic;
}());
exports.ErrorEpic = ErrorEpic;
//# sourceMappingURL=error.epic.js.map