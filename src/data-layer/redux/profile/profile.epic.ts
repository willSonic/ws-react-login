import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import * as errorActions from './error.actions';
import * as profileActions from '../profile/profile.actions';
import * as userSessionActions from '../user-session/user.session.actions';

import { UserServices } from '../../api/user.service';



export default class ProfileEpic {



        static registerUser = ( action$: ActionsObservable<any>) =>
                action$.ofType(profileActions.REGISTER_USER_ATTEMPT)
                .switchMap(({ payload }) => { this.userServices.registerUser( payload,
                                                        errorActions.REPORT_ERROR,
                                                        profileActions.REGISTER_USER_FAILURE,
                                                        profileActions.REGISTER_USER_SUCCESS)
                                                        });





        static getUserByName = ( action$: ActionsObservable<any>) =>
                action$.ofType(profileActions.CHECK_USER_PROFILE_NAME_ATTEMPT)
                .switchMap(({ payload }) => { this.userServices.getUserByName( payload,
                                                        errorActions.ErrorTypes.REPORT_ERROR,
                                                        profileActions.ProfileTypes.CHECK_USER_PROFILE_NAME_FAILURE,
                                                        profileActions.ProfileTypes.CHECK_USER_PROFILE_NAME_SUCCESS)
                                                        });

        static getUserProfile = ( action$: ActionsObservable<any>) =>
                action$.ofType(profileActions.GET_USER_PROFILE_ATTEMPT)
               .withLatestFrom( this.store.select(fromRoot.getProfileEntities) )
               .switchMap(([username, profileEntities]) => {
                const existsInStore = Object.keys(profileEntities).filter(
                                           entity=> {
                                                        if(profileEntities[entity].username === username) {
                                                          return profileEntities[entity];
                                                        }
                                                    });
                        let obs;
                        if(existsInStore && existsInStore.length>0 ) {
                          obs =  Observable.of( profileActions.actionCreators.setProfileSelectedId(existsInStore[0]));
                        }else {
                          obs = this.userServices.getUserByName( username,
                                                                 errorActions.REPORT_ERROR,
                                                                 profileActions.CHECK_USER_PROFILE_NAME_FAILURE,
                                                                 profileActions.GET_USER_PROFILE_SUCCESS );
                        }
                        return obs;
                      });
}
