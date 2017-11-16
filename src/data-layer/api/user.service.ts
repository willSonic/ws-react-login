import { HttpWrapperService } from './http.wrapper.service';
import { HttpParams } from './interfaces/httpParams.model';
import { AuthModel } from '../../business-layer/models';

export class UserServices {
    httpWrapperService: HttpWrapperService;

    constructor() {
      this.httpWrapperService = new HttpWrapperService();
    }

    getUserById( payload:string,
                ErrorActionType:string, SpecificErrorType:string, SuccessType:string ) {
      let getParams: HttpParams = {
        auth: true,
        errorActionType: ErrorActionType,
        specificErrorType: SpecificErrorType,
        payload: payload,
        responseObject: 'user',
        successActionType: SuccessType,
        uri: 'Users/'+ payload
      };
      return this.httpWrapperService.get( getParams );
    }


    getUserByName(payload:string,
                  ErrorActionType:string, SpecificErrorType:string, SuccessType:string ) {
      let getParams: HttpParams = {
        auth: false,
        errorActionType: ErrorActionType,
        specificErrorType: SpecificErrorType,
        payload: payload,
        responseObject: 'user',
        successActionType: SuccessType,
        uri: 'Users/username/'+payload
      };
      return this.httpWrapperService.get( getParams );
    }

    loginUser(payload:AuthModel,
              ErrorActionType:string, SpecificErrorType:string, SuccessType:string ) {
      let postParams: HttpParams = {
        auth: false,
        errorActionType: ErrorActionType,
        specificErrorType: SpecificErrorType,
        payload: payload,
        responseObject: 'account',
        successActionType: SuccessType,
        uri: 'Authorizations/Login'
      };
      return this.httpWrapperService.post(postParams);
    }

    logoutUser( ErrorActionType:string, SpecificErrorType:string, SuccessType:string ) {
      let postParams: HttpParams = {
        auth: true,
        errorActionType: ErrorActionType,
        specificErrorType: SpecificErrorType,
        responseObject: 'general',
        successActionType: SuccessType,
        uri: 'Authorizations/Logout'
      };
      return this.httpWrapperService.post( postParams );
    }

    registerUser(payload: { username: string, password: string, firstname:string, lastname:string, email:string },
                           ErrorActionType:string, SpecificErrorType:string, SuccessType:string ) {
      let postParams: HttpParams = {
        auth: false,
        errorActionType: ErrorActionType,
        specificErrorType: SpecificErrorType,
        payload: payload,
        responseObject: 'account',
        successActionType: SuccessType,
        uri: 'Users'
      };
      return this.httpWrapperService.post(postParams);
    }

}
