"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
var profile_actions_1 = require("../profile/profile.actions");
exports.initialState = {
    ids: [],
    entities: {},
    selectedProfileId: null,
    validUserName: false
};
function ProfileReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case profile_actions_1.REGISTER_USER_SUCCESS:
        case profile_actions_1.EDIT_USER_PROFILE_SUCCESS:
        case profile_actions_1.GET_USER_PROFILE_SUCCESS: {
            //let user:UserModel;
            if (action.payload.hasOwnProperty('user') ||
                action.payload.hasOwnProperty('username')) {
                var user = action.payload.hasOwnProperty('user') ? (action.payload.user) : (action.payload);
                if (user && state.ids.indexOf(user.id) > -1) {
                    return state;
                }
                return {
                    ids: state.ids.concat([user.id]),
                    entities: Object.assign({}, state.entities, (_a = {},
                        _a[user.id] = user,
                        _a)),
                    selectedProfileId: user.id,
                    validUserName: state.validUserName
                };
            }
            else {
                return state;
            }
        }
        case profile_actions_1.CHECK_USER_PROFILE_NAME_SUCCESS: {
            if (action.payload) {
                var validUserName = ((action.payload).hasOwnProperty('username')) ? 'inValid' : 'valid';
                return Object.assign({}, state, { validUserName: validUserName });
            }
            return state;
        }
        case profile_actions_1.CHECK_USER_PROFILE_NAME_FAILURE: {
            return Object.assign({}, state, { validUserName: 'valid' });
        }
        case profile_actions_1.RESET_USER_PROFILE_NAME_VALID: {
            return Object.assign({}, state, { validUserName: 'invalid' });
        }
        case profile_actions_1.SET_SELECTED_PROFILE_ID: {
            if (state.ids.indexOf(action.payload) > -1) {
                return Object.assign({}, state, { selectedProfileId: action.payload });
            }
            else {
                return state;
            }
        }
        default: {
            return state;
        }
    }
    var _a;
}
exports.ProfileReducer = ProfileReducer;
/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
exports.getEntities = function (state) { return state.entities; };
exports.getIds = function (state) { return state.ids; };
exports.getSelectedProfileId = function (state) { return state.selectedProfileId; };
exports.getValidUserName = function (state) { return state.validUserName; };
exports.getSelectedProfile = reselect_1.createSelector(exports.getEntities, exports.getSelectedProfileId, function (entities, selectedProfileId) {
    return entities[selectedProfileId];
});
//# sourceMappingURL=profile.reducer.js.map