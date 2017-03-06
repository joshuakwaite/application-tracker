var app = angular.module("myApp");

app.controller("dashboardController", ["$scope", "httpService", "$filter", function($scope, httpService, $filter){

    getApi();

    function getApi() {
        httpService.getApi().then(function(response) {
            var applications = response.data;

            $scope.applications = []

            var d = new Date();
            d.setDate(d.getDate()-7);
            var date = new Date(d);

            for (var i = 0; i < applications.length; i++) {
                var old = new Date(applications[i].lastFollowUp);
                applications[i].appliedDate = new Date(applications[i].appliedDate);
                applications[i].lastFollowUp = new Date(applications[i].lastFollowUp);
                if (old < date && applications[i].isArchived === false) {
                    $scope.applications.push(applications[i])
                }
            }
        });
    };

    $scope.clickedEdit = function(application) {
        httpService.putApi(application).then(function(response){
        });
        getApi();
    };
    

}]);