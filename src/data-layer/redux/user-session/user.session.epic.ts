import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';
import { ActionsObservable } from 'redux-observable';

import { push } from 'react-router-redux';

import * as errorActions from './error.actions';
import * as profileActions from '../profile/profile.actions';
import * as userSessionActions from '../user-session/user.session.actions';

import { UserServices } from '../../api-services/user.service';


export default class UserSessionEpic {

  //@Effect()  startAppClearUser$  = Observable.of(new usersessionActions.AppStartLoginClear());




        static loginUser = ( action$: ActionsObservable<any>) =>
                action$.ofType(userSessionActions.LOGIN_USER_ATTEMPT)
                    .switchMap(({ payload }) => {
                            this.userServices.loginUser( payload,
                            errorActions.REPORT_ERROR,
                            usersessionActions.LOGIN_USER_FAILURE,
                            usersessionActions.LOGIN_USER_SUCCESS)
                    });


        static logoutUser = ( action$: ActionsObservable<any>) =>
                action$.ofType(usersessionActions.LOGIN_USER_ATTEMPT)
                    .switchMap(({ payload }) => {
                            this.logoutUser.loginUser( payload,
                            errorActions.REPORT_ERROR,
                            usersessionActions.LOGIN_USER_FAILURE,
                            usersessionActionss.LOGIN_USER_SUCCESS)
                    });


        static logoutUserSuccess = ( action$: ActionsObservable<any>) =>
                action$.ofType(userSessionActions.LOGOUT_USER_SUCCESS)
                 .switchMap((payload)=> Observable.of(push('/')));



        static removeErrorModelCheckUserFailure$ = ( action$: ActionsObservable<any>) =>
                action$.ofType(usersessionActions.LOGIN_USER_FAILURE)
                 .switchMap(payload =>  Observable.of( errorActions.RemoveError(payload)));


}
