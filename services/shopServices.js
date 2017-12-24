app.service('shopServices', ['$http', '$log', function ($http, $log) {
    this.HomeImages = function (callback) {
        $http({
            url: '/api/homeImages',
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            }, function (resp) { });
    };
    this.NavbarImages = function (callback) {
        $http({
            url: '/api/navbarImages',
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            }, function (resp) { });
    };
    this.ProductDetailImages = function (productId, callback) {
        $http({
            url: '/api/productDetailImages/' + productId,
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            }, function (resp) { });
    };
    this.Products = function (callback) {
        $http({
            url: '/api/products',
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            }, function (resp) { });
    };
    this.Dresses = function (callback) {
        $http({
            url: '/api/dresses',
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            }, function (resp) { });
    };
    this.NewArrivals = function (callback) {
        $http({
            url: '/api/newarrival',
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            }, function (resp) { });
    };
}]);
