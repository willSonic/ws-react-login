import * as React from 'react';
import { AuthModel } from '../../business-layer/models';
import { Input, Button } from '../core/form';

interface LoginProps {
  userAuth: AuthModel;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}
export default class LoginComponent extends React.Component<LoginProps, any> {
      constructor(props:LoginProps) {
          super(props);
      }


       render() {
                    return (
                                <form>
                                  <h1>User Login</h1>

                                  <Input
                                    name="username"
                                    label="Login"
                                    value={this.props.userAuth.username}
                                    onChange={this.props.onChange}
                                  />

                                  <Input
                                    name="password"
                                    label="Password"
                                    value={this.props.userAuth.password}
                                    onChange={this.props.onChange}
                                  />

                                  <Button
                                    label="Save"
                                    className="btn btn-default"
                                    onClick={() => {  this.props.onSave() }  }
                                    />
                                </form>
                           );
            }
};