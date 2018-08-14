var app = angular.module("pcBuildInterface", ["ngRoute"]);

app.controller("HomeController", HomeController);
app.controller("OrderInterface", OrderInterface);
app.controller("OrderSucessController", OrderSucessController);

var configFunction = function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);

    $routeProvider
        .when("/Home", {
            templateUrl: "routes/home",
            controller: "HomeController"
        })
        .when("/Order", {
            templateUrl: "routes/order",
            controller: "OrderInterface"
        })
        .when("/Submitted/:email/:orderId", {
            templateUrl: function (params) { return "/routes/submitted?email=" + params.email + "&orderId=" + params.orderId }
        })
        .otherwise({
            redirectTo: "/Home"
        });
};
configFunction.$inject = ['$routeProvider', '$locationProvider'];

app.config(configFunction);