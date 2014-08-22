(function () {
    'use strict';

    function buttonController($scope, buttonData) {
        $scope.clickedButtonData = buttonData;
        $scope.buttonClicked = function (data) {
            $scope.buttonClickedData = data;
        };
    }

    angular.module('Calculator').controller('buttonController', ['$scope', 'buttonData', buttonController]);
})();
