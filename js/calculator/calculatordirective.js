app.directive('calculator',function(){
    return{
        restrict : 'A',
        require : ['displayPanel','buttonPanel'],
        template : "<div display-panel></div><div button-panel></div>",
        controller : function ($scope,CalculatorFactory, calculatorSharedService, evaluateService) {
            $scope.calculatorData = CalculatorFactory;

            $scope.$watch('calculatorData.clickedButtonData', function (data) {
                if(typeof data.type !== 'undefined'){
                    if(data.type === 'number' || data.type === 'operator'){
                        calculatorSharedService.createDataToEvaluate(data.actualValue);
                    } else if(data.actualValue === 'back'){
                        calculatorSharedService.editValue();
                    } else if(data.actualValue === 'ans'){
                        calculatorSharedService.calculate();
                    } else if(data.actualValue === 'clear'){
                        calculatorSharedService.resetDisplay();
                    }
                }
            });

            $scope.$on('calculator.calculate',function (number) {
                var dataToEvaluate = calculatorSharedService.value;
                var evaluatedValue = 0;
                if(dataToEvaluate){
                    var operatorPrecedenceArray = ['/', '*', '+', '-'];
                    var expression = dataToEvaluate.split(' ');
                    var i = 0;
                    while (i <= operatorPrecedenceArray.length) {
                        for (var index = 0 ; index <= expression.length; ++index){
                            var operator = operatorPrecedenceArray[i];
                            var operatorIndex = expression.indexOf(operator);
                            if(operatorIndex !== -1){
                                var num1 = parseFloat(expression[operatorIndex-1], 10);
                                var num2 = parseFloat(expression[operatorIndex+1], 10);
                                var ans = evaluateService.evaluate(num1, expression[operatorIndex], num2);
                                var isSingleOccurrence = operatorIndex === expression.lastIndexOf(operator);
                                expression.splice(operatorIndex - 1, 3, ans);
                                if (isSingleOccurrence) {
                                    ++i;
                                    break;
                                }
                            }else{
                                ++i;
                                break;
                            }
                        }
                    }
                    evaluatedValue = isFinite(expression[0]) ? parseFloat(expression[0]) : 'Error !';
                }
                calculatorSharedService.value = evaluatedValue;
                calculatorSharedService.setValue();
                calculatorSharedService.value = 0;
            });
        }
    }
});