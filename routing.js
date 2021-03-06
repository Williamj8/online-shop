var sssapp = angular.module('sssapp', ['ngRoute']);
//all routers
sssapp.config(['$routeProvider', function ($routeProvider) {

  $routeProvider.
  when('/hom', {
    templateUrl: 'partial/hom.html',
    controller: 'homesctrl'
  }).
  when('/shirt', {
    templateUrl: 'partial/shirt.html',
    controller: 'shirtctrl'
  }).
  when('/shoe', {
    templateUrl: 'partial/shoes.html',
    controller: 'shoectrl'
  }).
  when('/access', {
    templateUrl: 'partial/accer.html',
    controller: 'accessctrl'
  }).
  when('/login', {
    templateUrl: 'partial/login.html',
    controller: 'detailsctrl'
  }).
    when('/signup', {
    templateUrl: 'partial/signup.html',
    controller: 'detailsctrl'
  }).
  when('/payment', {
    templateUrl: 'partial/payment.html',
    controller: 'payctrl'
  }).
  otherwise({
    redirectTo: '/hom'
  });
}]);