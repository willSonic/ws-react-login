"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var react_router_redux_1 = require("react-router-redux");
var reselect_1 = require("reselect");
var fromError = require("./error/error.reducer");
var fromLayout = require("./layout/layout.reducer");
var fromUserSession = require("./user-session/user.session.reducer");
var fromProfile = require("./profile/profile.reducer");
exports.RootReducer = redux_1.combineReducers({
    router: react_router_redux_1.routerReducer,
    errors: fromError.ErrorReducer,
    layouts: fromLayout.LayoutReducer,
    usersessions: fromUserSession.UserSessionReducer,
    profiles: fromProfile.ProfileReducer
});
/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */
exports.getUsersessionState = function (state) { return state.usersessions; };
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */
exports.getUser = reselect_1.createSelector(exports.getUsersessionState, fromUserSession.getUser);
exports.getToken = reselect_1.createSelector(exports.getUsersessionState, fromUserSession.getToken);
exports.getUserLoading = reselect_1.createSelector(exports.getUsersessionState, fromUserSession.getUserLoading);
exports.getUserLoaded = reselect_1.createSelector(exports.getUsersessionState, fromUserSession.getUserLoaded);
exports.hasLoggedInUser = reselect_1.createSelector(exports.getToken, function (token) {
    return token !== '' ? true : false;
});
/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
exports.getErrorState = function (state) { return state.errors; };
exports.getErrorIds = reselect_1.createSelector(exports.getErrorState, fromError.getIds);
exports.getErrorEntities = reselect_1.createSelector(exports.getErrorState, fromError.getEntities);
exports.getProfilesState = function (state) { return state.profiles; };
exports.getProfileIds = reselect_1.createSelector(exports.getProfilesState, fromProfile.getIds);
exports.getProfileEntities = reselect_1.createSelector(exports.getProfilesState, fromProfile.getEntities);
exports.getSelectedProfileId = reselect_1.createSelector(exports.getProfilesState, fromProfile.getSelectedProfileId);
exports.getSelectedProfile = reselect_1.createSelector(exports.getProfilesState, fromProfile.getSelectedProfile);
exports.getValidUserName = reselect_1.createSelector(exports.getProfilesState, fromProfile.getValidUserName);
/**
 * Layout Reducers
 */
exports.getLayoutState = function (state) { return state.layouts; };
exports.getShowLoginDialog = reselect_1.createSelector(exports.getLayoutState, fromLayout.getShowLoginDialog);
exports.getRequestedURL = reselect_1.createSelector(exports.getLayoutState, fromLayout.getRequestedURL);
