'use strict';

app.factory('claimService',['$resource', 'ngAuthSettings', function($resource, ngAuthSettings){
  console.log(ngAuthSettings.apiServiceBaseUri+'claims');
  return $resource(ngAuthSettings.apiServiceBaseUri+'claims');
}]);
