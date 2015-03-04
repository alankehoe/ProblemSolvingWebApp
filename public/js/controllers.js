'use strict';

/* Controllers */

angular
    .module('myApp.controllers', [])

    .controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {

    }])

    .controller('RegisterCtrl', ['$scope', '$http', function ($scope, $http) {
      $scope.title = "Create Account";
      $scope.passwordPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

      $scope.register = function () {
        debugger;
        $http({
          url: '/users.json',
          method: 'POST',
          data: $scope.user
        })
      }
    }]);




