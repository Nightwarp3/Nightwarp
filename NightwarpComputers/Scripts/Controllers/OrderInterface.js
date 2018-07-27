var OrderInterface = function ($scope, $location, $http) {

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
        setupInputNames();
        $scope.orderReview = true;
    };

    $scope.editOrder = function () {
        $scope.orderReview = false;
    };

    $scope.sendOrder = function () {
        $scope.orderSubmitted = true;
        console.log($scope.formData);
        PostOrder($scope.formData);
    };

    var setupInputNames = function () {
        // $scope.contactPref
        if ($scope.emailPref && $scope.phonePref) {
            $scope.formData.contactPref = "Either";
        }
        else if ($scope.emailPref) {
            $scope.formData.contactPref = "Email";
        }
        else {
            $scope.formData.contactPref = "Phone";
        }
    };

    var PostOrder = function (json) {
        var config = { headers: { 'Content-Type': 'application/json' } }
        $http.post("api/Orders/PostOrder", JSON.stringify(json), config)
            .then(function (response) {
                return response.data;
            });
    }
};

OrderInterface.$inject = ['$scope', '$location', '$http'];