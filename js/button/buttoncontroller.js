(function () {
    'us strict';

    function buttonController($scope, buttonData) {
        $scope.clickedButtonData = buttonData;
        $scope.buttonClicked = function (data) {
            $scope.calculatorData.clickedButtonData = data;
        };
    }

    angular.module('Calculator').controller('buttonController', buttonController);
})();