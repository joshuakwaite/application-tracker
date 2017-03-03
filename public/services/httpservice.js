var app = angular.module("myApp");

app.service("httpService", ["$http", function ($http) {

    this.getApi = function () {
        return $http.get("/applications")
    };

    this.postApi = function (newPost) {
        return $http.post("/applications", newPost)
    };

    this.putApi = function (application) {
        return $http.put("/applications/" + application._id, application)
    };

    this.deleteApi = function (application) {
        return $http.delete("/applications/" + application._id)
    };

}]);