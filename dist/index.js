"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
require("./index.scss");
//import {  App } from './view-layer/app-stage/App';
var homePage_1 = require("./view-layer/by-route/home/homePage");
//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
//import darktBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
var index_1 = require("./data-layer/redux/index");
var muiTheme = getMuiTheme_1.default({
    palette: {
        primary1Color: "#2196f3",
        primary2Color: "rgba(96, 125, 139, 0.88)",
        primary3Color: "#8bc34a",
        accent1Color: "rgba(0, 0, 0, 0.12)",
        pickerHeaderColor: "#03a9f4"
    }
});
ReactDOM.render(React.createElement(MuiThemeProvider_1.default, { muiTheme: muiTheme },
    React.createElement(react_redux_1.Provider, { store: index_1.store },
        React.createElement(homePage_1.HomePage, null))), document.getElementById('root'));
//# sourceMappingURL=index.js.map