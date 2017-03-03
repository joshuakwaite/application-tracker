var app = angular.module("myApp")

app.controller("newApplicationController", ["$scope", "$location", "httpService", function($scope, $location, httpService) {

    $scope.clickedNewApp = function (newApplication) {
        $location.url('/applications');
        httpService.postApi(newApplication).then(function(response){
            console.log(response)
        })
    }

}]);