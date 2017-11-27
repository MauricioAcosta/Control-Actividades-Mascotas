'use strict'
let MyApp = 'MyApp'
let appModule = angular.module(MyApp, ['ui.router','MainApp']);

appModule.filter('bind', () => {
    return (text) => {
        return text;
    }
})
