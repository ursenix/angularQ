'use strict';

app.controller('chainPromiseController', ['$scope','chainPromiseService',function($scope, chainPromiseService){

  $scope.statusMessage = '';

  $scope.loadData = function(){

    chainPromiseService.loadUser()
      .then(chainPromiseService.loadStaff, null,function(statusUpdate){$scope.statusMessage = statusUpdate; console.log(statusUpdate); })
      .then(function(result){
        $scope.userData = JSON.stringify(result);
        },null,function(statusUpdate){ if(statusUpdate!=undefined) { $scope.statusMessage=$scope.statusMessage + ';' + statusUpdate; console.log(statusUpdate); } });
  }

}]);
