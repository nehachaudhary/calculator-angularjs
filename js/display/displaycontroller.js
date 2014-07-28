(function () {
    'use strict';

    function displayController($scope) {
        $scope.displayValue = 0;
        $scope.$on('display.setValue', function (scope, value) {
            $scope.displayValue = value;
        });
    }

    angular.module('Calculator').controller('displayController',displayController);
})();