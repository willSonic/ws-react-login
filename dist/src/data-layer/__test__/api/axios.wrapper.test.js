"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockAdapter = require("axios-mock-adapter");
var axios_wrapper_1 = require("../../api/axios-wrapper");
var Config = {
    API: 'api',
    HOST: 'http://localhost',
    PORT: '0000'
};
var apiConfig = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 15000
};
var newUser = Object.assign({}, {
    username: 'vixen',
    firstname: 'George',
    lastname: 'Washington',
    password: 'pass1111',
    email: 'seeds@nest.com'
});
//{ "username": "vixen", "firstname": "George", "lastname": "Washington",  "password": "pass1111"  ,"email": "seeds@nest.com" }
var newUseresult = Object.assign({}, {
    "account": {
        "user": {
            "id": "a1235",
            "username": "vixen",
            "firstname": "George",
            "lastname": "Washington",
            "email": "seeds@nest.com"
        },
        "token": "testcaseA"
    }
});
var userLogin = Object.assign({}, {
    username: 'vixen',
    password: 'pass1111'
});
var badUserReaults = Object.assign({}, {
    "error": "incorrect input"
});
//
// const  badUserLogin = (<any>Object).assign( {}, {
//     username: 'vixen',
//     password: 'pas11'
// });
var badLoginResult = Object.assign({}, {
    "error": "username or password is incorrect"
});
describe('AxiosWrapper test', function () {
    var _apiCore = new axios_wrapper_1.default(apiConfig);
    var mock = new MockAdapter(_apiCore.getAxiosInstance());
    test('returns Authentication Bad User Login', function (done) {
        mock.onPost(Config.HOST + ":" + Config.PORT + "/" + Config.API + "/Authorizations/Login").reply(401, badLoginResult);
        _apiCore.post(Config.HOST + ":" + Config.PORT + "/" + Config.API + "/Authorizations/Login", null)
            .then(function (response) {
            console.log("  Bad User Login call  response = ", response);
            done();
        }, function (error) {
            expect(error.response.data).toEqual(badLoginResult);
            done();
        });
    });
    // test('returns a new Registered User Error', (done) => {
    //     mock.onPost(`${Config.HOST}:${Config.PORT}/${Config.API}/Users`).reply(401, badUserReaults);
    //
    //     _apiCore.post(`${Config.HOST}:${Config.PORT}/${Config.API}/Users`, null)
    //         .then(
    //             (response:any) => {
    //                 console.log(" Registered User Error call  response = ", response)
    //                 done();
    //             },
    //             (error)=>{
    //                 expect(error.response.data).toEqual(badUserReaults);
    //                 done();
    //             });
    // });
    //
    //
    // test('returns a new Registered User', (done) => {
    //     mock.reset();
    //     mock.onPost(`${Config.HOST}:${Config.PORT}/${Config.API}/Users`).reply(200, newUseresult);
    //
    //     _apiCore.post(`${Config.HOST}:${Config.PORT}/${Config.API}/Users`, newUser)
    //         .then( (response:any) => {
    //                 expect(response).toEqual(newUseresult);
    //                 done();
    //             });
    // });
    //
    // test('returns Authentication Login', (done) => {
    //     mock.onPost(`${Config.HOST}:${Config.PORT}/${Config.API}/Authorizations/Login`).reply(200, newUseresult);
    //     _apiCore.post(`${Config.HOST}:${Config.PORT}/${Config.API}/Authorizations/Login`, userLogin)
    //         .then( (response:any) => {
    //             expect(response).toEqual(newUseresult);
    //             done();
    //         });
    // });
});
//# sourceMappingURL=axios.wrapper.test.js.map