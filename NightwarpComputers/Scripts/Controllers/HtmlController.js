var HtmlController = function ($http) {

    var PostOrder = function (json) {
        return $http.post("api/PostOrder", json)
            .then(function (response) {
                return response.data;
            });
    }
};

OrderInterface.$inject = ['$http'];