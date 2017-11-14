"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REPORT_ERROR = 'REPORT_ERROR';
exports.REMOVE_ERROR = 'REMOVE_ERROR';
exports.actionCreators = {
    reportError: function (payload) { return ({
        type: exports.REPORT_ERROR, payload: payload
    }); },
    removeError: function (payload) { return ({
        type: exports.REMOVE_ERROR, payload: payload,
    }); }
};
//# sourceMappingURL=error.actions.js.map