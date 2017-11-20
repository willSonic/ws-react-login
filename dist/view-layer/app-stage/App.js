"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AppBar_1 = require("material-ui/AppBar");
require("./App.scss");
exports.App = function (props) {
    return (React.createElement("div", { className: "container-fluid" },
        React.createElement(AppBar_1.default, { className: "App-title", title: "Hello World" }),
        props.children));
};
//# sourceMappingURL=App.js.map