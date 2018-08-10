var OrderInterface = function ($scope, $location, $http, $window) {

    $scope.tab = "contact";
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
    $scope.states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

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
    
    $scope.nextView = function (view) {
        $scope.tab = view;
        // since the current view will actually be already stored in the $scope.tab variable, makes it so we can test on it before we change :D
        // on each of these calls, run some validation...
        // IE: if a field ought to be required, then make sure it has a value.
        // Do a check to see if address should be required, if not then set $scope.tab to "build" or change "Next" to Submit.
    };

    $scope.submitOrder = function () {
        // maybe use modal to bring in a popup displaying all of the information for the sender to confirm?
        console.log($scope.formData);
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