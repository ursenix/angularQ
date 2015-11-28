'use strict';

app.controller('claimController',['$scope','claimService',function($scope, claimService){

  $scope.claims = [];

  var query = claimService.query();

  query.$promise.then(function(data){
      $scope.claims = data;
    },
  function(error, status){ //when promise rejected
    alert("Can't get claims, something went wrong!");
    }
  );

}]);
