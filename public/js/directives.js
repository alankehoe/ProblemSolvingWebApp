'use strict';

/* Directives */



angular.module("myApp.directives", []).directive("ngEquals", function() {
    var directive = { };

    directive.restrict = 'A';
    directive.require = 'ngModel';
    directive.scope = {
        original: '=ngEquals'

    };
    directive.link = function(scope, elm, attrs, ngModel) {
        ngModel.$parsers.unshift(function(value) {
            ngModel.$setValidity('equals', scope.original === value);
            return value;
        });
    };

    return directive;
});

angular.module('myNav.directives', [])

    .directive('navbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/partial1.html'
        }
    });
