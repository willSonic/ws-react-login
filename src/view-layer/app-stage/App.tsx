import * as React from 'react';

import AppBar from 'material-ui/AppBar';

import { connect } from 'react-redux';
import { RootState, Dispatch } from '../../data-layer/redux';
import { UserSessionActionCreators } from '../../data-layer/redux/root-action';
import { AuthModel } from '../../business-layer/models';

import './App.scss';



interface IUserSessionProps{
    login: (obj: Object) => void;
    hasLoggedInUser$: boolean;
}
interface IUserSessionState{
    loginData?:AuthModel
}



//   this.handleSignup = this.handleSignup.bind(this);
const  mapStateToProps = (state: RootState) => ( {
        hasLoggedInUser$: state.usersessions.token !=='' ? true:false
});

// for call isLoggedin
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        login: (loginData:AuthModel): void => dispatch(UserSessionActionCreators.userLoginAttempt(loginData)),
        logout: (): void =>  dispatch(UserSessionActionCreators.userLogoutAttempt()),
    };
}


class App extends React.Component<IUserSessionProps, IUserSessionState>  {


    constructor(props:IUserSessionProps) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
             loginData: { username:'', password:''}
        };
    }


	handleLogin(loginData: AuthModel) {
		this.props.login(loginData);
	}


	render(){
		return (
		    <AppBar className="App-title" title="Hello World" />
		    );
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(App)