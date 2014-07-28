(function () {
    'us strict';

    function buttonDirective() {
        return {
            restrict: 'A',
            templateUrl: 'buttonPanelTemplate.html',
            controller: 'buttonController'
        };
    }

    angular.module('Calculator').directive('buttonPanel', buttonDirective);
})();