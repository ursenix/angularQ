'use strict';
app.controller('homeController', ['$scope', '$state','authService', function ($scope, $state, authService) {
   
   $scope.welcomeMessage = "Hello there! Welcome...";
   
   $scope.login = function(){
   
    authService.login('').then(function (response) {
    
                $state.go('orders');
    
            },
            function (err) {
                $scope.message = err.error_description;
            });
   }
   
}]);