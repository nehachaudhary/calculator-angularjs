app.controller('ButtonController', function ($scope, calculatorSharedService) {
    $scope.buttonData = app.buttonData;

    $scope.numberOperatorClicked = function (event) {
        var targetValue = event.currentTarget.value;
        calculatorSharedService.createDataToEvaluate(targetValue);
    };

    $scope.specialClicked = function (event) {
        var className = event.currentTarget.className;
        if(className.indexOf('js-back-key') > 0){
            calculatorSharedService.editValue();
        }else if(className.indexOf('js-clear-key') > 0){
            calculatorSharedService.resetDisplay();
        }else if(className.indexOf('js-ans-key') > 0){
            calculatorSharedService.calculate();
        }
    };

});
