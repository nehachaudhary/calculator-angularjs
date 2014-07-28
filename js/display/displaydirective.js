(function () {
    'use strict';

    function displayDirective() {
        return {
            restrict: 'A',
            templateUrl: 'displayPanel.html',
            controller: 'displayController'
        };
    }

    angular.module('Calculator').directive('displayPanel', displayDirective);
})()