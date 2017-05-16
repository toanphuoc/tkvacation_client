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
	when('/contact', {
		templateUrl: 'views/contact.html', 
		controller: 'ContactController'
	}).
	when('/destinations', {
		templateUrl: 'views/destinations.html', 
		controller: 'DestinationController'
	}).
	when('/destination/:desId', {
		templateUrl: 'views/tour_destanation.html',
		controller: 'DestinationTourController'
	}).
    otherwise({ redirectTo: '/' })
});

