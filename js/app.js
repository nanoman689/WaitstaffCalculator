angular.module('myApp', ['ngAnimate'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'welcome.html',
            controller : 'WelcomeCtrl'
        }).when('/myEarnings',{
            templateUrl : "myEarnings.html",
            controller : "myEarningsCtrl"
        }).when('/newMeal',{
            templateUrl : "newMeal.html",
            controller : "newMealCtrl"
        });
    }])
    .controller('WelcomeCtrl', function($scope) {
        //empty for now
    })
    .controller('myEarningsCtrl', function($scope) {
        //empty for now
    })
    .controller('newMealCtrl', function($scope) {
        //empty for now


    });
