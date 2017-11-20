import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../data-layer/redux';
import  * as Actions from '../../data-layer/redux/root-action';
import { AuthModel } from '../../business-layer/models';
import LoginForm  from "../components/loginForm";

interface IProps {}

interface IAuthProps{
    login: (loginData:AuthModel) => void;
}

interface IAuthState{
    loginState:any,
    hasLoggedInUser$:boolean,
    loginData:AuthModel
}


//   this.handleSignup = this.handleSignup.bind(this);
const  mapStateToProps = (state: RootState): IAuthState => (
    {
        loginData:  {
                        username:'',
                        password:'' ,
                        error:''
                     } as AuthModel,
        hasLoggedInUser$: state.usersessions.token !=='' ? true:false,
        loginState: { user: state.usersessions.user, error:state.usersessions.errorMessage},

   });

// for call isLoggedin
const mapDispatchToProps = (dispatch: any):IAuthProps => (
     {
        login: (loginData:AuthModel): void => dispatch( Actions.UserSessionActionCreators.userLoginAttempt(loginData) ),
    }
);

export interface IConnectedProps extends IProps, IAuthProps, IAuthState { }


export class LoginContainer extends React.Component<IConnectedProps, IAuthState> {

    timerID:any;

    constructor(props:IConnectedProps) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.timerID = null;

        this.state = { loginData: props.loginData,
                       hasLoggedInUser$:props.hasLoggedInUser$,
                       loginState: props.loginState};

    }

    handleValidation(fieldName:string, value: string){
       //do valdidation Chection
       const updateState:AuthModel =  Object.assign(  {...this.state.loginData},   {[fieldName]: value}) as AuthModel;
       const nextState =  Object.assign({
                                                  ...this.state
                                                },
                                         {
                                                  loginData:updateState
                                                });

        this.setState(nextState);
   }

    handleLogin() {
	    const modelData: AuthModel = this.state.loginData as AuthModel;
		this.props.login( modelData) ;

        if(!this.timerID){
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }

	}


    tick() {

        if(!this.state.loginState.error){

        }else if(this.state.loginState.user){

        }

        console.log('LoginContainer -- tick() --- this.state.usersessions.errorMessage ', this.props.loginState.error)
    }



    componentWillUnmount() {
        clearInterval(this.timerID);
    }

	render(){
        return(
           <div>
              < LoginForm
                userAuth= { this.state.loginData }
                onChange= { this.handleValidation }
                onSave= { this.handleLogin }
              />
           </div>
        )
	}
}


export default  connect<IAuthState, IAuthProps, IProps>(mapStateToProps, mapDispatchToProps)(LoginContainer)