'use strict';
app.factory('authService', ['$http', '$q', 'localStorageService', 'ngAuthSettings','jwtManagerService', function ($http, $q, localStorageService, ngAuthSettings, jwtManagerService) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName : ""
    };

    var _saveRegistration = function (registration) {

        _logOut();

        return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
            return response;
        });

    };

    var _login = function (loginData) {

        //the following token comes from loginData.token
        //var data = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ilp1NzE2Y3FHa3c5enZqNk8tdDVzMGhIaGhEWSIsImtpZCI6Ilp1NzE2Y3FHa3c5enZqNk8tdDVzMGhIaGhEWSJ9.eyJub25jZSI6IjYzNTgzMzMzOTMwOTE4MTQ1MS5OVGM0WldSak1EY3ROVFF6TXkwME5tRm1MVGhqWVdRdE9XUm1NVFkwWmpjNVpqYzROVGhrT1dVek9UQXRNemMwT1MwME9HTmpMVGcyWkRFdE0yUXpPRGxpTkRRNVpUSTMiLCJpYXQiOjE0NDc3MzcxNDQsInN1YiI6ImVvc21vbmRAY21uaG9zcGl0YWxzLm9yZyIsImFtciI6WyJwYXNzd29yZCJdLCJhdXRoX3RpbWUiOjE0NDc3MzcxNDQsImlkcCI6Imlkc3J2IiwidXNlcl9pZCI6IjhkODkzM2NhLTk3MjEtNDJjMi1hODE1LTE3MjEwY2Y0YjNmYSIsImlzcyI6Imh0dHBzOi8vc3RzLmNoaWxkcmVuc21pcmFjbGVuZXR3b3JraG9zcGl0YWxzLm9yZy9jb3JlIiwiYXVkIjoiMTc3MjAxMUYtQjJCRC00OUJELTg5MDItOTg2NEYyNEI4QUZFIiwiZXhwIjoxNDQ3NzQwNzQ0LCJuYmYiOjE0NDc3MzcxNDR9.GBTzBeoPQgAdpIfnT9UU_PoaQ_GO2wtTrrLJ4MY2RhUvPhs6wFK5VRknTsyJXjz-fHYfV9vyJZ9vKy4SEN7dA70HbJ8WeqULlNwuAuBcsJi3XvHTV9uHnypChdvL4Lo352m6OBgMio8YnWSmuUdX-73oBWMWgr2o0pwVG_dxdC-81XLlqiwVh-38gNogjoR0LclC-q3ToVRmyTcnWRphN8ueZ08tk3PmUfSv5i4Du3nT1gSvjxsZvARVGQaA52OP6XQ2IQRH1xIhx5ohgejCFdrrYrO3mKN1Yn88q6J6m8h8GcU1TsU1M7p4hrXedUTs8LfG9KU9RB3iX5BzSSfqpQ'

        var deferred = $q.defer();



        $http.post(serviceBase + 'token', {token: loginData.token }, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            localStorageService.set('authorizationData', { token: response });

            var jwt = jwtManagerService.parseJwt(response);
            console.log('jwt: ' + jwt.CMNHUserId); //reading claims from the token

            _authentication.isAuth = true;
            //_authentication.userName = loginData.userName;

            deferred.notify("Login in progress..");

            setTimeout(function(){ //Just to mock the situation of server delay & to check deferred notification message in controller
              deferred.resolve(response);
            },3000);


        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _logOut = function () {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = "";

    };

    var _fillAuthData = function () {

        var authData = localStorageService.get('authorizationData');
        if (authData)
        {
            _authentication.isAuth = true;
            //_authentication.userName = authData.userName;
        }

    }

    authServiceFactory.saveRegistration = _saveRegistration;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
}]);
