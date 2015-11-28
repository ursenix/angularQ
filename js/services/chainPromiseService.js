'use strict';

app.service('chainPromiseService',['$q',function($q){

  this.loadUser = function(){

    var deferred = $q.defer();

    setTimeout(function(){
      deferred.notify('About to get user data..');
      deferred.resolve({userId:10, staffId:1, name: 'Senthil'});
    },1000);

    return deferred.promise;
  }

  this.loadStaff = function(user){

    var deferred = $q.defer();

    setTimeout(function(){

      deferred.notify('About to get staff details..');

      setTimeout(function () {
        deferred.resolve({staffId:user.userId, firstName: 'Senthil', lastName: 'Kumaran'});
      }, 2000);

    },3000);

    return deferred.promise;
  }

}]);
