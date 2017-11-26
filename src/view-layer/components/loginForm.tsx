import * as React from 'react';
import { AuthModel } from '../../business-layer/models';
import { Input, Button } from '../core/form';

interface LoginProps {
  userAuth: AuthModel;
  onSave: (dataObj:AuthModel) => void;
}
export default class LoginComponent extends React.Component<LoginProps, any> {
        constructor(props:LoginProps) {
          super(props);

          this.state = { loginData: props.userAuth, inputValue: ''};
          this.handleValidation = this.handleValidation.bind(this);
        }


        handleValidation(fieldName:string, value:string) {
            //do valdidation Chection
            console.log('LoginComponent-- handleValidation --- filedName =', fieldName)
            console.log('LoginComponent-- handleValidation ---value =', value)
            const updateState: AuthModel = Object.assign({...this.state.loginData}, {[fieldName]: value}) as AuthModel;
            const nextState = Object.assign({
                    ...this.state
                },
                {
                    loginData: updateState
                });

            this.setState(nextState);
        }


        render() {
                return (
                            <form>
                              <h1>User Login</h1>

                              <Input
                                name="username"
                                label="Login"
                                value= { this.state.loginData.username }
                                onChange= {  this.handleValidation}
                              />

                              <Input
                                name="password"
                                label="Password"
                                value= { this.state.loginData.password }
                                onChange= {  this.handleValidation}
                              />

                              <Button
                                label="Save"
                                className="btn btn-default"
                                onClick={() => {  this.props.onSave( this.state.loginData ) }  }
                                />

                                <p> { this.props.userAuth.error }</p>
                            </form>
                       );
        }
};