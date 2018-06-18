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

    var buildOrderData = function () {
        var labelArray = [
            "Name: ",
            "Email: ",
            "Contact Preference: ",
            "Build Type: ",
            "Use Type: ",
            "Price Limit: ",
            "Delivery Type: ",
            "Street Address 1: ",
            "Street Address 2: ",
            "City: ",
            "State: ",
            "Zip: ",
            "Part Preferences: ",
            "Processor Type: ",
            "Processor Model: ",
            "Motherboard: ",
            "Qty of Memory: ",
            "Size: ",
            "Graphics: ",
            "Color Preference: "
        ];
        var valueArray = [
            $scope.name,
            $scope.email,
            $scope.contactPref,
            $scope.buildType,
            $scope.useType,
            $scope.priceLimit,
            $scope.deliveryType,
            $scope.streetAddress1,
            $scope.streetAddress2,
            $scope.city,
            $scope.state,
            $scope.zip,
            $scope.partPreference,
            $scope.processorType,
            $scope.processorModel,
            $scope.motherboard,
            $scope.numOfSticks,
            $scope.memPerStick,
            $scope.graphics,
            $scope.colorPref
        ];

        var array = [];

        for (i = 0; i < labelArray.length; i++) {
            if (valueArray[i] != undefined) {
                array.push(labelArray[i] + valueArray[i]);
            };
        };

        return array;
    }
};

OrderInterface.$inject = ['$scope', '$location']