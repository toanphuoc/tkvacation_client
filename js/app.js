var app = angular.module("vacation", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
	.when("/", {
        templateUrl : "views/home.html",
        controller: "HomeController"
    }).
	when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutController'
	}).
    otherwise({ redirectTo: '/' })
});

