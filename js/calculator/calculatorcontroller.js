(function () {
    'use strict';

    function calculatorController($scope, CalculatorFactory, calculatorService, evaluateService) {
        $scope.calculatorData = CalculatorFactory;

        $scope.$watch('calculatorData.clickedButtonData', function (data) {
            if (typeof data.type !== 'undefined') {
                if (data.type === 'number' || data.type === 'operator') {
                    calculatorService.createDataToEvaluate(data.actualValue);
                } else if (data.actualValue === 'back') {
                    calculatorService.editValue();
                } else if (data.actualValue === 'ans') {
                    calculatorService.calculate();
                } else if (data.actualValue === 'clear') {
                    calculatorService.resetDisplay();
                }
            }
        });

        $scope.$on('calculator.calculate', function () {
            var dataToEvaluate = calculatorService.value;
            calculatorService.value = evaluateService.calculate(dataToEvaluate);
            calculatorService.setValue();
            calculatorService.value = 0;
        });

    }

    var module = angular.module('Calculator').controller('calculatorController', calculatorController);
})();