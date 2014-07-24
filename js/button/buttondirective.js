app.directive('buttonPanel', function () {
    return {
        restrict : 'A',
        templateUrl : 'buttonPanelTemplate.html',
        controller : function ($scope, buttonData) {
            $scope.clickedButtonData = buttonData;

            $scope.buttonClicked = function (data) {
                $scope.calculatorData.clickedButtonData = data;
            };
        }
     };
});