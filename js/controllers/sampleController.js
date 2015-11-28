'use strict';

app.controller('sampleController', ['$scope','sampleService', function($scope, sampleService){

  $scope.loadData = function(){
    var sampleDataPromise = sampleService.getSampleData($scope.toggleResult); //this returns promise

    sampleDataPromise.then(sampleDataSuccess, sampleDataFailed);
  }

  function sampleDataSuccess(result){
    alert(result);
  }

  function sampleDataFailed(rejectReason){
    alert(rejectReason);
  }

}]);
