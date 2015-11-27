'use strict';
app.factory('ordersService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var ordersServiceFactory = {};

    var _getOrders = function () {

        alert('Getting orders');

        return $http.get(serviceBase + 'getPartnerList').then(function (results) {
           alert(results.data);
            return results;
        });
    };

    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;

}]);