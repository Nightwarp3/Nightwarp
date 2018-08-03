var app = angular.module("pcBuildInterface", ["ngRoute"]);

app.controller("OrderInterface", OrderInterface);

var configFunction = function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);

    $routeProvider
        .when("/Home", {
            templateUrl: "routes/home"
        })
        .when("/Order", {
            templateUrl: "routes/order",
            controller: "OrderInterface"
        })
        .otherwise({
            redirectTo: "/Home"
        });
};
configFunction.$inject = ['$routeProvider', '$locationProvider'];

app.config(configFunction);