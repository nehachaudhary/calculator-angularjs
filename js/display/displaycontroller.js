app.controller('DisplayController', function ($scope, calculatorSharedService) {
    $scope.displayValue = 0;

    $scope.$on('display.setValue', function () {
        $scope.displayValue = calculatorSharedService.value;
    });

    $scope.$on('display.resetDisplay', function () {
        $scope.displayValue = calculatorSharedService.value;
    });
});