import { UserModel  } from '../../../business-layer/models/user.model';
import { SessionModel  } from '../../../business-layer/models/session.model';

import * as profileActions from '../profile/profile.actions';
import * as userSessionActions from '../user-session/user.session.actions';
import { RootAction } from '../root-action';



import { LOGIN_USER_ATTEMPT,
         APP_START_CLEAR_LOGIN,
        LOGIN_USER_SUCCESS,
        GET_SESSION_USER_SUCCESS,
        LOGOUT_USER_SUCCESS,
        LOGIN_USER_FAILURE } from './user.session.actions';

import { REGISTER_USER_ATTEMPT,
         REGISTER_USER_SUCCESS,
        REPORT_ERROR } from '../profile/profile.actions';


export interface State {
  user: UserModel;
  token: string |null;
  loading: boolean;
  loaded:boolean;
  errorMessage:string |null;
}



export const initialState: State = {
  user: {},
  token:'',
  errorMessage:'',
  loading: false,
  loaded:false
};



export default function  UserSessionReducer(state = initialState, action: RootAction): State {
  switch (action.type) {
    case REGISTER_USER_ATTEMPT:
    case LOGIN_USER_ATTEMPT:
    case APP_START_CLEAR_LOGIN: {
          localStorage.clear();
          return Object.assign({}, state, {user:{}, token:'', loading:false, loaded:false, errorMessage:'' });
    }
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS: {
          if(action.payload.hasOwnProperty('user')) {
             const user:UserModel = <UserModel>(action.payload.user);
             const session:SessionModel = <SessionModel> action.payload;
             if (state.user.hasOwnProperty('id') && (state.user.id === session.user.id)) {
                return state;
             }
             localStorage.setItem('Authorized',  session.token);
             return Object.assign({}, state, session, {loading:false, loaded:true,  errorMessage:''});
          }else {
              return state;
          }
    }

    case GET_SESSION_USER_SUCCESS: {
         const session:SessionModel= <SessionModel> action.payload;
         if (state.user.hasOwnProperty('id') && (state.user.id === session.user.id)) {
            return state;
         }
         return Object.assign({}, state, session);
    }

    case LOGOUT_USER_SUCCESS: {
          localStorage.clear();
          return Object.assign({}, state, {user:{}, token:'', loading:false, loaded:false,  errorMessage:'' });
    }

    case LOGIN_USER_FAILURE:{
          return Object.assign({}, { user:{},
                                     token:'',
                                     loading:false,
                                     loaded:false,
                                     errorMessage:action.payload.message});
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state:State) => state.user;

export const getToken = (state:State) => state.token;

export const getUserLoading = (state:State) => state.loading;

export const getUserLoaded = (state:State) => state.loaded;
