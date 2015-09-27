angular.module('myApp', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : './welcome.html',
            controller : 'WelcomeCtrl'
        }).when('/MyEarnings', {
            templateUrl : './MyEarnings.html',
            controller : "MyEarningsCtrl"
        }).when('/NewMeal', {
            templateUrl : './NewMeal.html',
            controller : "NewMealCtrl"
        }).when('/error', {
          template : 'Error - Page Not Found'
        }).otherwise({
          redirectTo : '/error'
      });

    }])
    .controller('WelcomeCtrl', function($rootScope) {
        //empty for now > use $rootScope rather then $scope
    })
    .controller('MyEarningsCtrl', function($rootScope, $scope){
        $scope.tipTotal = $rootScope.tipTotal;

        /* Reset everything */
        $scope.reset = function (){

          $scope.baseMeal = 0;
          $scope.taxRate = 0;
          $scope.subTotal = 0;
          $scope.tip = 0;
          $scope.total = 0;
          $scope.tipTotal = 0;
          $scope.mealCount = 0;
          $scope.averageTip = 0;
          $scope.numberOfMeals = 0;
        };
    })

    .controller('NewMealCtrl', function($rootScope, $scope) {
        //empty for now
        console.log('NewMealCtrl');
        $scope.subTotal = 0;
        $scope.baseMeal = 0;
        $scope.taxRate = 0;
        $scope.tip = 0;
        $scope.total = 0;
        $scope.tipTotal = 0;
        $scope.mealCount = 0;
        $scope.averageTip = 0;
        $scope.numberOfMeals = 0;

        /* Submit the values for Main Content*/
        $rootScope.submit = function(){
          /* number of Meals goes up by one with each submit */

          $rootScope.tip = $scope.tip;

          if ($rootScope.numberOfMeals === undefined ){
            $rootScope.numberOfMeals = 1;
          } else {
            $rootScope.numberOfMeals = $rootScope.numberOfMeals + 1;
          }

          /* Customer charges */
          console.log($scope.baseMeal);
          console.log($scope.taxRate);

          $rootScope.subTotal = ($scope.baseMeal * ($scope.taxRate / 100)) + $scope.baseMeal;
          $rootScope.total = $scope.subTotal + ( ($scope.tip / 100) * $scope.baseMeal);

          /* My Earnings Info */

          if ($rootScope.tipTotal === undefined){
            $rootScope.tipTotal = $scope.tip;
          } else {
            $rootScope.tipTotal = $rootScope.tipTotal + $scope.tip;
          }

          $rootScope.averageTip = $rootScope.tipTotal / $rootScope.numberOfMeals;

        };

        $scope.cancel = function(){

          $scope.baseMeal = 0;
          $scope.taxRate = 0;
          $scope.tip = 0;

        };

    })

    .run(function($rootScope, $location, $timeout) {
      $rootScope.$on('$routeChangeError', function() {
        $location.path("/error");
      });
      $rootScope.$on('$routeChangeStart', function() {
        $rootScope.isLoading = true;
      });
      $rootScope.$on('$routeChangeSuccess', function() {
        $timeout(function() {
          $rootScope.isLoading = false;
      }, 1000);
      });
    
  })
