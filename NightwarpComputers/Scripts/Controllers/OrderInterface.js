var OrderInterface = function ($scope, $location) {

    $scope.message = "Nightwarp Computers - Order Request";
    $scope.formData = {};
    $scope.orderSubmitted = false;
    $scope.feeTotal = 0.00;
    $scope.fees = {
        orderFee: 0.00,
        buildFee: 0.00,
        calculateFee: function () {
            return this.orderFee + this.buildFee;
        }
    };

    $scope.recalculateOrder = function () {
        $scope.fees.orderFee = 0.00;
        $scope.fees.buildFee = 0.00;
        if (($scope.formData.buildType === "orderOnly" || $scope.formData.buildType === "orderBuild") && $scope.formData.partPreference != "upload") {
            $scope.fees.orderFee = 50.00;
        }
        if (($scope.formData.buildType === "buildOnly" || $scope.formData.buildType === "orderBuild")) {
            $scope.fees.buildFee = 50.00;
        }
        $scope.feeTotal = $scope.fees.calculateFee();
    };

    $scope.reviewOrder = function () {
        // setupInputNames();
        console.log($scope.formData);
        $scope.orderReview = true;
    };

    $scope.editOrder = function () {
        $scope.orderReview = false;
    };

    $scope.sendOrder = function () {
        setupInputNames();
        $scope.orderSubmitted = true;
        var dataToSend = angular.toJson($scope.formData);
        ("/Submit/" + $scope.formData);
    };

    var setupInputNames = function () {
        // $scope.contactPref
        if ($scope.emailPref && !$scope.phonePref) {
            $scope.formData.contactPref = "Email";
        }
        else if ($scope.phonePref && !$scope.emailPref) {
            $scope.formData.contactPref = "Phone";
        }
        else {
            $scope.formData.contactPref = "Either";
        }
    };
};

OrderInterface.$inject = ['$scope', '$location'];