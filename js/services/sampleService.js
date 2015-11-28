'use strict';

app.service('sampleService',['$q', function($q){

  this.getSampleData = function(toggleResult){

    var deferred = $q.defer();

    setTimeout(function(){ //This setTimeout mocks the server call
        if(toggleResult)
          deferred.resolve('This is sample data from sample service!');
        else
          deferred.reject('Sorry, unable to receive sample data from server.');
    },2000); //lets assume server call takes 2 seconds

    return deferred.promise;
  }

}]);
