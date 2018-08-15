var OrderSucessController = function ($scope, $routeParams) {

    $scope.orderId = $routeParams.orderId;
    $scope.email = $routeParams.email;
};

HomeController.$inject = ['$scope', '$routeParams'];