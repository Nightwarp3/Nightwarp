var OrderInterface = function ($scope, $location, $http, $window, $timeout) {

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

    $scope.sendOrder = function () {
        $scope.loading = true;
        setupInputNames();
        PostOrder($scope.formData);
        /*$timeout(function () {
            $scope.loading = false;
            $location.path("/Submitted/mdcampb93@gmail.com/00004321");
        }, 5000);*/
    };

    $scope.nextView = function (view) {
        if (view === "address" && ($scope.formData.deliveryType != "ship" && $scope.formData.buildType != "orderOnly")) {
            $scope.nextView("build");
        }
        else if (view === "build" && ($scope.formData.buildType != "buildOnly" && $scope.formData.buildType != "orderBuild")) {
            $scope.nextView($scope.tab);
        }
        else {
            $scope.tab = view;
        }
        // since the current view will actually be already stored in the $scope.tab variable, makes it so we can test on it before we change
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
                $location.path("/Submitted/" + response.data.Email + "/" + response.data.OrderId);
            }, function (response) {
                $scope.loading = false;
                console.log(response);
                $window.alert(response.status + ": " + response.statusText + ". Please try again or contact Support.");
            });
    }
};

OrderInterface.$inject = ['$scope', '$location', '$http', '$window', '$timeout'];