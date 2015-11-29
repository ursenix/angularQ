'use strict';
app.factory('authInterceptorService', ['$q', '$injector','localStorageService','ngAuthSettings', function ($q, $injector, localStorageService, ngAuthSettings) {

    var authInterceptorServiceFactory = {};

    var _request = function (config) {

        //config.url - can vertify URL and do accordingly

        config.headers = config.headers || {};

        var authData = localStorageService.get('authorizationData');

        //alert("Not logged in: " + authData);
        //alert("Headers: " + config.headers.Authorization);

        if (authData) {
            //alert("authData: " + authData.token);
            config.headers.Authorization = 'Bearer ' + authData.token;
        }

        //alert("Headers Added: " + config.headers.Authorization);

        return config;
    }

    var _responseError = function (rejection) {
        if (rejection.status === 401) {

            var authService = $injector.get('authService');
            var stateService = $injector.get('$state');

            // var authData = localStorageService.get('authorizationData');
            // if (authData) {
            //     if (authData.useRefreshTokens) {
            //         //$location.path('/refresh');
            //         return $q.reject(rejection);
            //     }
            // }

            authService.logOut();
            alert('You are not authorised for this resource!');
            stateService.go('home');
        }
        return $q.reject(rejection);
    }

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    return authInterceptorServiceFactory;
}]);
