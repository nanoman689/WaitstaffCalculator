angular.module('myApp', [])
  .controller('myCtrl', function($scope){
    "use strict";

    $scope.subTotal = 0;
    $scope.tip = 0;
    $scope.total = 0;
    $scope.tipTotal = 0;
    $scope.mealCount = 0;
    $scope.averageTip = 0;
    $scope.numberOfMeals = 1;


    /* Submit the values for Main Content*/
    $scope.submit = function(){
      /* number of Meals goes up by one with each submit */

      $scope.numberOfMeals = $scope.numberOfMeals + 1;

      /* Customer charges */

      $scope.subTotal = ($scope.baseMeal * ($scope.taxRate / 100)) + $scope.baseMeal;
      $scope.total = $scope.subTotal + ( ($scope.tip / 100) * $scope.baseMeal);

      /* My Earnings Info */

      $scope.tipTotal = $scope.tip * $scope.numberOfMeals;
      $scope.averageTip = $scope.tip / $scope.numberOfMeals;

    };

    /* Cancel Main Content */
    $scope.cancel = function(){

      $scope.baseMeal = 0;
      $scope.taxRate = 0;
      $scope.tip = 0;

    };

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
      $scope.numberOfMeals = 1;

    };


  })
