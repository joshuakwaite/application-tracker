var app = angular.module("myApp");

app.controller("applicationController", ["$scope", "httpService", function($scope, httpService) {

    getApi();

    $scope.archived = false;

    function getApi() {
        httpService.getApi().then(function (response) {
            var applications = response.data

            $scope.applications = []


            for (var i = 0; i < applications.length; i++) {
                applications[i].appliedDate = new Date(applications[i].appliedDate);
                applications[i].lastFollowUp = new Date(applications[i].lastFollowUp);
                $scope.applications.push(applications[i])

            }

        });
    };

    $scope.clickedDelete = function(application) {
            httpService.deleteApi(application).then(function(response) {
                console.log(response)
            });
        getApi();

    };
    
    $scope.clickedEdit = function(application) {
        httpService.putApi(application).then(function(response){
            console.log(response)
        });
        getApi();
    };

    $scope.unarchive = function (application) {
        application.isArchived = false;
        httpService.putApi(application).then(function(response) {
            console.log(response)
        });
    }

    $scope.archive = function(application) {
        application.isArchived = true;
        httpService.putApi(application).then(function(response) {
            console.log(response)
        })
    }


}]);