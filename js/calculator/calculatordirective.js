(function () {
    'use strict';

    function calculatorDirective() {
        return{
            restrict: 'A',
            require: ['displayPanel', 'buttonPanel'],
            template: ["<div display-panel></div>",
                "<div button-panel></div>"]
                .join(''),
            controller: 'calculatorController'
        }
    }

    angular.module('Calculator').directive('calculator', calculatorDirective);
})();