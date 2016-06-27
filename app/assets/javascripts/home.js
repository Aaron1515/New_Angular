var myApp = angular.module('myApp', [])

myApp.controller('mainController', function($scope,$timeout, $filter){
  var name = "Aaron";
  $scope.name = name

  $timeout(function(){
    $scope.name = "someone else";
  }, 1000);

  // 2 way data binding example
  $scope.twitterName = "";
  $scope.lowercaseTwitterName = function(){
    return $filter('lowercase')($scope.twitterName)
  }

});

// Plain old JS
var testA =











console.log("home.js is loaded")

