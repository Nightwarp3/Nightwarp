var OrderInterface = function ($scope, $location) {

    $scope.message = "PC Builder: Order Form";
    $scope.orderSubmitted = false;

    $scope.reviewOrder = function () {
        setupInputEnums();
        $scope.orderData = buildOrderData();
        $scope.orderReview = true;
    };

    $scope.editOrder = function () {
        $scope.orderReview = false;
    };

    $scope.sendOrder = function () {
        $scope.orderSubmitted = true;
        $location.path("/Submit/" + $scope.orderData);
    };

    var setupInputEnums = function () {
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
            $scope.typeDelivery = "Ship";
        }
        else {
            $scope.typeDelivery = "Pickup";
        }

        // $scope.partPreferences
        if ($scope.partPreference == "preferences") {
            $scope.partPreferences = "Select Preferences";
        }
        else if ($scope.partPreference == "noPreference") {
            $scope.partPreferences = "No Preferences";
        }
        else {
            $scope.partPreferences = "Upload Parts List";
        }
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
            $scope.typeBuild,
            $scope.useType,
            $scope.priceLimit,
            $scope.typeDelivery,
            $scope.streetAddress1,
            $scope.streetAddress2,
            $scope.city,
            $scope.state,
            $scope.zip,
            $scope.partPreferences,
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