(function () {
    'use strict';
    angular.module('Calculator').constant('buttonData', [
        {
            displayValue: 0,
            type: 'number',
            actualValue: '0'
        },
        {
            displayValue: 1,
            type: 'number',
            actualValue: '1'
        },
        {
            displayValue: 2,
            type: 'number',
            actualValue: '2'
        },
        {
            displayValue: 3,
            type: 'number',
            actualValue: '3'
        },
        {
            displayValue: 4,
            type: 'number',
            actualValue: '4'
        },
        {
            displayValue: 5,
            type: 'number',
            actualValue: '5'
        },
        {
            displayValue: 6,
            type: 'number',
            actualValue: '6'
        },
        {
            displayValue: 7,
            type: 'number',
            actualValue: '7'
        },
        {
            displayValue: 8,
            type: 'number',
            actualValue: '8'
        },
        {
            displayValue: 9,
            type: 'number',
            actualValue: '9'
        },
        {
            displayValue: '.',
            type: 'number',
            actualValue: '.'
        },
        {
            displayValue: '/',
            type: 'operator',
            actualValue: '/'
        },
        {
            displayValue: '*',
            type: 'operator',
            actualValue: '*'
        },
        {
            displayValue: '+',
            type: 'operator',
            actualValue: '+'
        },
        {
            displayValue: '-',
            type: 'operator',
            actualValue: '-'
        },
        {
            displayValue: 'ans',
            type: 'special',
            actualValue: 'ans'
        },
        {
            displayValue: 'clear',
            type: 'special',
            actualValue: 'edit'
        },
        {
            displayValue: 'back',
            type: 'special',
            actualValue: 'back'
        }
    ]);
})();