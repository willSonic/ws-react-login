import * as React from 'react';
import { connect } from 'react-redux';
import { RootState, Dispatch } from '../../data-layer/redux';
import { UserSessionActionCreators } from '../../data-layer/redux/root-action';
import { AuthModel } from '../../business-layer/models';
import LoginForm  from "../components/loginForm";


interface IAuthProps{
    login: (obj: Object) => void;
}
interface IAuthState{
    loginData?:AuthModel
}


//   this.handleSignup = this.handleSignup.bind(this);
const  mapStateToProps = (state: RootState) => ( {
        hasLoggedInUser$: state.usersessions.token !=='' ? true:false
});

// for call isLoggedin
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        login: (loginData:AuthModel): void =>
                  dispatch(UserSessionActionCreators.userLoginAttempt(loginData))
    };
}


class LoginContainer extends React.Component<IAuthProps, IAuthState> {


    constructor(props:IAuthProps) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        const intialLoginData =  {
                                  username:'',
                                  password:'' ,
                                  error:''
                                 } as AuthModel;
        this.state = { loginData:intialLoginData}
    }

    handleValidation(fieldName:string, value: string){
       //do valdidation Chection
       const updateState:AuthModel =  Object.assign(  {...this.state.loginData},   {[fieldName]: value}) as AuthModel;
       const nextState =  Object.assign({
                                                  ...this.state
                                                },{
                                                  loginData:updateState
                                                });

        this.setState(nextState);
   }

    handleLogin() {
	    const modelData: AuthModel = this.state.loginData as AuthModel;
		this.props.login( modelData) ;
	}


	render(){
	  return (
              < LoginForm
                userAuth={ this.state.loginData }
                onChange={ this.handleValidation }
                onSave={ this.handleLogin }
              />
            );
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)