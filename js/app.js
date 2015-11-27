'use strict';
var app = angular.module('AngularQ', ['ui.router', 'LocalStorageModule']);

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