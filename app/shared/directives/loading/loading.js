/**
 * Created by JO3353 on 16-11-2016.
 */

"use strict";

angular.module('app').directive('patLoading', patLoading);

patLoading.$inject = ['$http'];

function patLoading($http) {


    return {
        restrict: 'A',
        link: function ($scope, $element, $attributes) {

            $scope.loadingOverlay = false;

            $scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            $scope.$watch($scope.isLoading, function (isLoading) {
                $scope.loadingOverlay = isLoading;
            });
        }
    };

}



