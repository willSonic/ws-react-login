import * as React from 'react';
import './App.scss';
import AppBar from 'material-ui/AppBar';

export class App extends React.Component<{}> {
	render() {
		return <AppBar className="App-title" title="Hello World" />;
	}
}