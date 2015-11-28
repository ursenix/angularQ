'use strict';
var app = angular.module('AngularQ', ['ui.router', 'LocalStorageModule', 'ngResource']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider.state('home',{
    url:'/home',
    templateUrl: 'templates/home.html',
    controller: 'homeController'
    });

  $stateProvider.state('orders',{
    url:'/orders',
    templateUrl: 'templates/orders.html',
    controller: 'ordersController'
    });

  $stateProvider.state('partnersList',{
    url:'/partnersList',
    templateUrl: 'templates/partnersList.html',
    controller: 'partnerListController'
    });

  $stateProvider.state('claims',{
    url:'/claims',
    templateUrl: 'templates/claims.html',
    controller: 'claimController'
    });

  $stateProvider.state('sample',{
    url:'/sample',
    templateUrl: 'templates/sample.html',
    controller: 'sampleController'
    });

  $stateProvider.state('chainPromise',{
    url:'/chainPromise',
    templateUrl: 'templates/chainPromise.html',
    controller: 'chainPromiseController'
    });

  $urlRouterProvider.otherwise('/home');

}]);

var serviceBase = 'http://devcmnh.azurewebsites.net/';

app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
