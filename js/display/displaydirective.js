app.directive('displayPanel', function () {
    return {
        restrict : 'A',
        templateUrl : 'displayPanel.html',
        controller : function ($scope) {
            $scope.displayValue = 0;

            $scope.$on('display.setValue', function (scope, value) {
                $scope.displayValue = value;
            });
        }
    };

});