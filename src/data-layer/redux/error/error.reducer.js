"use strict";
exports.__esModule = true;
var reselect_1 = require("reselect");
var error_actions_1 = require("./error.actions");
exports.initialState = {
    ids: [],
    entities: {}
};
function ErrorReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case error_actions_1.REPORT_ERROR: {
            var error = action.payload;
            return {
                ids: state.ids.concat([error.id]),
                entities: Object.assign({}, state.entities, (_a = {}, _a[error.id] = error, _a))
            };
        }
        case error_actions_1.REMOVE_ERROR: {
            var errorId_1 = action.payload;
            if (state.ids.indexOf(errorId_1) > -1) {
                return state;
            }
            var errorIdsPostRemoval = state.ids.filter(function (id) { return id !== errorId_1; });
            var errorEntities = Object.assign({}, state.entities);
            delete errorEntities[errorId_1];
            return Object.assign({}, state, {
                ids: errorIdsPostRemoval,
                entities: errorEntities
            });
        }
        default: {
            return state;
        }
    }
    var _a;
}
exports.ErrorReducer = ErrorReducer;
exports.getEntities = function (state) { return state.entities; };
exports.getIds = function (state) { return state.ids; };
exports.getAll = reselect_1.createSelector(exports.getEntities, exports.getIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
