'use strict';

app.controller('partnerListController', ['$scope','partnerListService', function($scope, partnerListService){

  $scope.partnersList = [];

  var query = partnerListService.getPartners().query();

  //get promise in resource call
  query.$promise.then(function(data){
    $scope.partnersList = data;
  },
  function(error){
    //alert("Partner Err: " + error.data);
    console.log("error: " + error + ", status: " + error.status + " headers: " + error.headers + " config: " + error.config);
    //alert("Partner Err: " + error.data.message);
    //alert("Partner Err Desc: " + error.error_description);
  }
);

}]);
