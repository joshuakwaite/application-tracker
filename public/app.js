var app = angular.module("myApp", ["ngRoute", "myApp.Auth"])

app.config(["$routeProvider", function ($routeProvider){
    $routeProvider
        .when("/dashboard", {
            templateUrl: "public/dashboard/dashboard.html",
            controller: "dashboardController"
        })
        .when("/applications", {
            templateUrl: "public/applications/applications.html",
            controller: "applicationController"
        })
        .when("/about", {
            templateUrl: "public/about/about.html",
            controller: "aboutController"
        })
        .when("/new-application", {
            templateUrl: "public/new-application/new-application.html",
            controller: "newApplicationController"
        })
        .otherwise({
            redirectTo: "/dashboard"
        })
}]);

var app = angular.module("myApp");

app.directive("navbar", ["UserService", function(UserService) {
    return {
        templateUrl: "public/navbar/navbar.html",
        link: function(scope) {
            scope.userService = UserService;
        }
    }
}]);