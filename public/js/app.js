'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
    'myNav.directives',
  'myApp.controllers',
  'ui.bootstrap',
  'n3-pie-chart',
  'n3-charts.linechart',
  'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'MyCtrl1'});
        $routeProvider.when('/sign_in', {templateUrl: 'partials/ .html', controller: 'MyCtrl1'});
        $routeProvider.when('/create_account', {templateUrl: 'partials/create_account.html', controller: 'MyCtrl1'});
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'MyCtrl1'});
}]);
