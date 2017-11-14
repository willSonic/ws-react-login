"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
require("./index.scss");
var App_1 = require("./view-layer/app-stage/App");
//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
//import darktBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
var muiTheme = getMuiTheme_1.default({
    palette: {
        primary1Color: "#2196f3",
        primary2Color: "rgba(96, 125, 139, 0.88)",
        primary3Color: "#8bc34a",
        accent1Color: "rgba(0, 0, 0, 0.12)",
        pickerHeaderColor: "#03a9f4"
    }
});
ReactDOM.render(<MuiThemeProvider_1.default muiTheme={muiTheme}>
		<App_1.App />
	</MuiThemeProvider_1.default>, document.getElementById('root'));
//# sourceMappingURL=index.js.map