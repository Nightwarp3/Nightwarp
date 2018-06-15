var OrderInterface = function ($scope, $location) {

    $scope.message = "PC Builder: Order Form";
    $scope.contactPref = "";
    $scope.orderSubmitted = false;

    $scope.reviewOrder = function () {
        if ($scope.emailPref && !$scope.phonePref) {
            $scope.contactPref = "Email";
        }
        else if ($scope.phonePref && !$scope.emailPref) {
            $scope.contactPref = "Phone";
        }
        else {
            $scope.contactPref = "Either";
        }
        $scope.orderReview = true;
    };

    $scope.editOrder = function () {
        $scope.orderReview = false;
    };

    $scope.sendOrder = function () {
        var orderData = buildOrderData();
        $location.path("/Submit/" + orderData);
    };

    var orderData = function () {
        var array = [
            "Name: " + $scope.name
        ]
    }
};