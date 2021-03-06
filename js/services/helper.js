(function () {
    'use strict';

    function evaluate(num1, operator, num2) {
        if (operator === '/') {
            return num1 / num2;
        }

        if (operator === '*') {
            return num1 * num2;
        }

        if (operator === '+') {
            return num1 + num2;
        }

        if (operator === '-') {
            return num1 - num2;
        }
    }

    function calculate(dataToEvaluate){
        var evaluatedValue = 0;
        if (dataToEvaluate) {
            var operatorPrecedenceArray = ['/', '*', '+', '-'];
            var expression = dataToEvaluate.split(' ');
            var i = 0;
            while (i <= operatorPrecedenceArray.length) {
                for (var index = 0; index <= expression.length; ++index) {
                    var operator = operatorPrecedenceArray[i];
                    var operatorIndex = expression.indexOf(operator);
                    if (operatorIndex !== -1) {
                        var num1 = parseFloat(expression[operatorIndex - 1], 10);
                        var num2 = parseFloat(expression[operatorIndex + 1], 10);
                        var ans = evaluate(num1, expression[operatorIndex], num2);
                        var isSingleOccurrence = operatorIndex === expression.lastIndexOf(operator);
                        expression.splice(operatorIndex - 1, 3, ans);
                        if (isSingleOccurrence) {
                            ++i;
                            break;
                        }
                    } else {
                        ++i;
                        break;
                    }
                }
            }
            evaluatedValue = isFinite(expression[0]) ? parseFloat(expression[0]) : 'Error !';
        }
        return evaluatedValue;
    }

    angular.module('Calculator').service('evaluateService',function () {
        return {
            calculate : calculate
        };
    });
})();
