var app = angular.module('Calculator',[]);    // empty array is used to tell the module what dependency it will be using, in this case none.

app.factory('calculatorSharedService', function ($rootScope) {

    var sharedService = {};
    sharedService.value = 0;

    sharedService.createDataToEvaluate = function (currentValue) {
        var previousValue = this.value;
        if(!previousValue){
            this.value = currentValue;
        }else{
            if(isFinite(currentValue)){
                if (previousValue === '0' || previousValue === 'Error !') {
                    this.value = currentValue;
                } else {
                    this.value += currentValue;
                }
            }else{
                if (currentValue !== '.') {
                    if(currentValue === '-' && previousValue.lastIndexOf(' ') === previousValue.length-1){
                        this.value += currentValue;
                    }else {
                        var v = previousValue[previousValue.length - 2];
                        if(v !== undefined){
                            if(isFinite(v) || v === '.'){
                                this.value += " " + currentValue + " ";
                            }
                        }else{
                            this.value += " " + currentValue + " ";
                        }
                    }
                } else {
                    this.value += currentValue;
                }
            }
        }
        this.setValue();
    };

    sharedService.setValue = function () {
        $rootScope.$broadcast('display.setValue');
    };

    sharedService.editValue = function () {
        var value = this.value;
        if(value && value.length > 1 ){
            this.value = value.substring(0, value.length - 1);
        }else{
            this.value = 0;
        }
        $rootScope.$broadcast('display.setValue');
    };

    sharedService.resetDisplay = function () {
        this.value = 0;
        this.setValue();
    };

    sharedService.calculate = function(){
        $rootScope.$broadcast('calculator.calculate');
    };

    return sharedService;
});