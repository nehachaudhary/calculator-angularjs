app.service('evaluateService',function ($rootScope) {
    return {
        evaluate : function (num1, operator, num2) {
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
    };
});