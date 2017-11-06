import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../shared-utils/app-env/env.config';
import { HttpParams } from './interfaces/httpParams.model';




export class HttpWrapperService {
  /*
    These are the methods that are used in the additional api-services,
    where otherwise they would require importing angular 2 http module.
    This keeps the api-services DRY, easier to test, and scalable.
  */

  constructor(private http: Http) { }


  public delete(params: HttpParams) {
    let {apiUrl, options} = this.configRequest(params.uri, true);

    return Rx.Observable.fromPromise( axios.delete(apiUrl, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: res.json().error
        }
      })) );
  }

  public get(params: HttpParams) {
    let {apiUrl, options} = this.configRequest(params.uri, params.auth);
    return  Rx.Observable.fromPromise( axios.get(apiUrl, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: res.json()
        }
      })) );
  }

  public post(params: HttpParams) {

    let {apiUrl, options} = this.configRequest(params.uri, params.auth);
    return Rx.Observable.fromPromise( axios.post(apiUrl, params.payload, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: res.json().error
        }
      })) );
  }

  public put(params: HttpParams) {
    let {apiUrl, options} = this.configRequest(params.uri, true);

    return Rx.Observable.fromPromise( axios.put(apiUrl, params.payload, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: res.json().error
        }
      })) );
  }



  private configRequest(uri: string, authRequired: boolean = false): {apiUrl: string, options: RequestOptions} {
    let apiUrl = `${Config.HOST}/${Config.API}/${uri}`;

    let headers = authRequired ?{
        'Content-Type': 'application/json',
        'x-access-token' : `${localStorage['Authorized']}`
      }:
      {'Content-Type': 'application/json'};
    let options = new RequestOptions({ headers: headers });

    return {apiUrl, options};
  }

}
