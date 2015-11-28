'use strict';

app.service('jwtManagerService', ['ngAuthSettings','$window', function(ngAuthSettings, $window){

  this.parseJwt = function(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  }

}]);
