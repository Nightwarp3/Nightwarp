var HttpPost = function ($http) {

    var PostOrder = function (jsonObject) {
        $http.post(jsonObject)
            .then(RequestComplete, RequestFailed);
    };
};

HttpPost.$inject = ['$http'];