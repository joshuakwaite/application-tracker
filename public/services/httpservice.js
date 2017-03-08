var app = angular.module("myApp");

app.service("httpService", ["$http", function ($http) {

    this.getApi = function () {
        return $http.get("/api/applications")
    };

    this.postApi = function (newPost) {
        return $http.post("/api/applications", newPost)
    };

    this.putApi = function (application) {
        return $http.put("/api/applications/" + application._id, application)
    };

    this.deleteApi = function (application) {
        return $http.delete("/api/applications/" + application._id)
    };

}]);