var OrderInterface = function ($scope, $location, $http, $window) {

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
        $scope.loading = true;
        console.log($scope.formData);
        PostOrder($scope.formData);
    };

    var setupInputNames = function () {
        // Fees
        $scope.formData.orderFee = $scope.fees.orderFee;
        $scope.formData.buildFee = $scope.fees.buildFee;

        // Extras
        for (var extra in $scope.extras) {
            $scope.formData.extras += extra + "\r\n";
        }

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
                $scope.loading = false;
                console.log(response.data);
                $scope.completedOrder = response.data;
                $window.alert("Order Submitted Successfully! Order ID is: " + response.data.OrderId + ". Received on: " + response.data.DateSubmitted);
                // http.post returns the Order Object. Would be nice to display if successful on a new page that says success or something.
                // http.post error returns...
            }, function (response) {
                console.log(response);
                $scope.loading = false;
                $window.alert(response.status + ": " + response.statusText + ". Please try again or contact Support.");
            });
    }
};

OrderInterface.$inject = ['$scope', '$location', '$http', '$window'];