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
        if (($scope.formData.buildType == "orderOnly" || $scope.formData.buildType == "orderBuild") && $scope.formData.partPreference != "upload") {
            $scope.fees.orderFee = 50.00;
        }
        if (($scope.formData.buildType == "buildOnly" || $scope.formData.buildType == "orderBuild")) {
            $scope.fees.buildFee = 50.00;
        }
        $scope.feeTotal = $scope.fees.calculateFee();
    };

    $scope.reviewOrder = function () {
        setupInputNames();
        $scope.orderReview = true;
    };

    $scope.editOrder = function () {
        $scope.orderReview = false;
    };

    $scope.sendOrder = function () {
        $scope.orderSubmitted = true;
        $location.path("/Submit/" + $scope.formData);
    };

    var setupInputNames = function () {
        // $scope.contactPref
        if ($scope.emailPref && !$scope.phonePref) {
            $scope.contactPref = "Email";
        }
        else if ($scope.phonePref && !$scope.emailPref) {
            $scope.contactPref = "Phone";
        }
        else {
            $scope.contactPref = "Either";
        }

        // $scope.typeBuild
        if ($scope.buildType == "orderOnly") {
            $scope.typeBuild = "Order Only";
        }
        else if ($scope.buildType == "buildOnly") {
            $scope.typeBuild = "Build Only";
        }
        else {
            $scope.typeBuild = "Order and Build";
        }

        // $scope.typeDelivery
        if ($scope.deliveryType == "ship") {
            $scope.typeDelivery = "Ship To You";
        }
        else {
            $scope.typeDelivery = "Pickup in Person";
        }

        // $scope.partPreferences
        if ($scope.partPreference == "preferences") {
            $scope.partPreferences = "Select Preferences";
        }
        else if ($scope.partPreference == "noPreference") {
            $scope.partPreferences = "Builder's Choice";
        }
        else {
            $scope.partPreferences = "Link to Parts List";
        }
    };
};

OrderInterface.$inject = ['$scope', '$location']