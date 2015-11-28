'use strict';

app.factory('partnerListService',['$resource', 'ngAuthSettings', function($resource, ngAuthSettings){

  var serviceBase = ngAuthSettings.apiServiceBaseUri;

  var partnerListServiceFactory = {};

  var _getPartners = function(){
    return $resource(serviceBase+'getPartnerList');
    //return $resource(serviceBase+'getPartnerList/:partnerId', {partnerId: '@partnerId'});
  };

  partnerListServiceFactory.getPartners = _getPartners;

  return partnerListServiceFactory;


}]);
