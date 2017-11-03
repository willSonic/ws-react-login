import { Observable } from 'rxjs/Observable';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { ErrorModel } from '../../../business-layer/models/error.model';
import { browserHistory } from 'react-router';

import * as errorActions from './error.actions';
import * as profileActions from '../profile/profile.actions';
import * as userSessionActions from '../user-session/usersession.actions';



export default class ErrorEpic {


        static catchAllRemoteErros = ( action$: ActionsObservable<any>) =>
                action$.ofType(errorActions.REPORT_ERROR)
                    .switchMap(({ payload }) => {
                        let obs;
                        switch(payload.action_type) {

                             case profileActions.CHECK_USER_PROFILE_NAME_FAILURE:
                              if(this.router.url.indexOf('register')>0) {
                                obs = Observable.of( new profileActions.CheckUserProfileNameFailure(<ErrorModel> payload));
                              }else {
                                obs = Observable.of(browserHistory.push('/error'));
                              }
                             break;

                             case userSessionActions.LOGIN_USER_FAILURE:
                               obs = Observable.of(new userSessionActions.UserLoginFailure(<ErrorModel> payload));
                             break;

                             default:{
                               obs = Observable.of(this.router.navigateByUrl('/error'));
                             }
                        }
                        return obs;
                   });

}