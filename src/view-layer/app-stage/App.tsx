import * as React from 'react';

import AppBar from 'material-ui/AppBar';

import './App.scss';




export const App: React.StatelessComponent<{}> = (props) => {

		return (
			   <div className="container-fluid">
		           <AppBar className="App-title" title="Hello World" />
                   {props.children}
			   </div>
		    );
}


