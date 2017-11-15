"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_observable_1 = require("redux-observable");
var root_reducer_1 = require("./root-reducer");
var root_epic_1 = require("./root-epic");
__export(require("./root-reducer"));
__export(require("./root-epic"));
var epicMiddleware = redux_observable_1.createEpicMiddleware(root_epic_1.RootEpic);
var createStoreWithMiddleware = redux_1.applyMiddleware(epicMiddleware)(redux_1.createStore);
exports.store = createStoreWithMiddleware(root_reducer_1.RootReducer);
//# sourceMappingURL=index.js.map