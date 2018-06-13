var OrderInterface = function ($scope) {

    $scope.message = "PC Builder: Order Form";

    $scope.submitOrder = function () {
        if ($scope.emailPref && !$scope.phonePref) {
            $scope.contactPref = "Email";
        }
        else if ($scope.phonePref && !$scope.emailPref) {
            $scope.contactPref = "Phone";
        }
        else {
            $scope.contactPref = "Either";
        }
        $scope.orderSubmitted = true;
    };

    $scope.editOrder = function () {
        $scope.orderSubmitted = false;
    };
};