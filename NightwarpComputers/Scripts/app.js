var app = angular.module("pcBuildInterface", ["ngRoute"/*, "ui.bootstrap"*/]);

app.controller("OrderInterface", OrderInterface);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);

    $routeProvider
        .when("/Home", {
            templateUrl: "routes/home"
        })
        .when("/Order", {
            templateUrl: "routes/order",
            controller: "OrderInterface"
        })
        .when("/Submit/:orderData", {
            templateUrl: function (params) { return '/routes/orderSubmitted?orderData=' + params.orderData; }
        })
        .otherwise({
            redirectTo: "/Home"
        });
});