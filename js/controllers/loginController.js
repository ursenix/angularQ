'use strict';
app.controller('loginController', ['$scope', '$state', 'authService', function ($scope, $state, authService) {

    $scope.loginMessage = '';

    $scope.loginData = {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ilp1NzE2Y3FHa3c5enZqNk8tdDVzMGhIaGhEWSIsImtpZCI6Ilp1NzE2Y3FHa3c5enZqNk8tdDVzMGhIaGhEWSJ9.eyJub25jZSI6IjYzNTgzMzMzOTMwOTE4MTQ1MS5OVGM0WldSak1EY3ROVFF6TXkwME5tRm1MVGhqWVdRdE9XUm1NVFkwWmpjNVpqYzROVGhrT1dVek9UQXRNemMwT1MwME9HTmpMVGcyWkRFdE0yUXpPRGxpTkRRNVpUSTMiLCJpYXQiOjE0NDc3MzcxNDQsInN1YiI6ImVvc21vbmRAY21uaG9zcGl0YWxzLm9yZyIsImFtciI6WyJwYXNzd29yZCJdLCJhdXRoX3RpbWUiOjE0NDc3MzcxNDQsImlkcCI6Imlkc3J2IiwidXNlcl9pZCI6IjhkODkzM2NhLTk3MjEtNDJjMi1hODE1LTE3MjEwY2Y0YjNmYSIsImlzcyI6Imh0dHBzOi8vc3RzLmNoaWxkcmVuc21pcmFjbGVuZXR3b3JraG9zcGl0YWxzLm9yZy9jb3JlIiwiYXVkIjoiMTc3MjAxMUYtQjJCRC00OUJELTg5MDItOTg2NEYyNEI4QUZFIiwiZXhwIjoxNDQ3NzQwNzQ0LCJuYmYiOjE0NDc3MzcxNDR9.GBTzBeoPQgAdpIfnT9UU_PoaQ_GO2wtTrrLJ4MY2RhUvPhs6wFK5VRknTsyJXjz-fHYfV9vyJZ9vKy4SEN7dA70HbJ8WeqULlNwuAuBcsJi3XvHTV9uHnypChdvL4Lo352m6OBgMio8YnWSmuUdX-73oBWMWgr2o0pwVG_dxdC-81XLlqiwVh-38gNogjoR0LclC-q3ToVRmyTcnWRphN8ueZ08tk3PmUfSv5i4Du3nT1gSvjxsZvARVGQaA52OP6XQ2IQRH1xIhx5ohgejCFdrrYrO3mKN1Yn88q6J6m8h8GcU1TsU1M7p4hrXedUTs8LfG9KU9RB3iX5BzSSfqpQ'
    };

    $scope.login = function(){

     authService.login($scope.loginData).then(function (response) {
                 $state.go('partnersList'); //on successful login, redirect users to partnersList
             },
             function (err) {
                 $scope.message = err.error_description;
             },
             function(notification){
               console.log("Defered notification from login service: " + notification);
                $scope.loginMessage = notification;
             }).then(function(){ $scope.loginMessage = 'Login successful';
           });
    }

    $scope.logOut = function () {
        authService.logOut();
        $state.go('home');
    }

    $scope.authentication = authService.authentication;

}]);
