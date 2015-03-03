'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
 .controller('MyCtrl1', ['$scope','stockService',function($scope,stockService) {

        $scope.title = "Create Account"

        /*$scope.buttonClicked = function(){
          $scope.title = "Bye bye"

            stockService.get("google", function(data){
                $scope.data = data
            })
        };*/

        /*$scope.email = {
            example: 'me@example.com'
        };*/
        $scope.passwordPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;


  }]);


