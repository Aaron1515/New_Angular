var myApp = angular.module('myApp', [])

myApp.controller('mainController', function($scope, $timeout, $filter){
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

  // Watch how it works in console
  $scope.$watch('twitterName', function(oldValue, newValue){
    console.log("Something is changing!");
    console.log("Old: " + oldValue);
    console.log("New: " + newValue);
  })



////////////EVENT LOOP/////////////////

// Plain old JS
//other Event Loops are: keypress, click, mouseover, change
  var tb = document.getElementById("testA");

  tb.addEventListener('keypress',
    function(event){
      console.log("pressed key");
    }
  );

////////////Mixing JS with Angular using $apply/////////////////

  // Plain JS
  // setTimeout(function(){
  //   $scope.$apply(function(){
  //     $scope.twitterName = "newtwittername"
  //     console.log("changed twitter name");
  //   })
  // }, 2000)

  // Plain Angular - shorter code
  $timeout(function(){
    $scope.twitterName = "something cool";
    console.log("twitter handle changed");
  }, 2000)

});


console.log("home.js is loaded")

