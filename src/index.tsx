import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import {  App } from './view-layer/app-stage/App';
import {  HomePage } from './view-layer/by-route/home/homePage';
//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
//import darktBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import { store } from './data-layer/redux/index';


const muiTheme = getMuiTheme({
  palette: {
        primary1Color: "#2196f3",
        primary2Color: "rgba(96, 125, 139, 0.88)",
        primary3Color: "#8bc34a",
        accent1Color: "rgba(0, 0, 0, 0.12)",
        pickerHeaderColor: "#03a9f4"
    }
});

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <App />
            <HomePage />
        </Provider>
	</MuiThemeProvider>,
	document.getElementById('root')
);