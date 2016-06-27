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
window.onload = function(){
  var tb = document.getElementById("testA");

  tb.addEventListener('keypress',
    function(event){
      console.log("pressed key");
    }
  )

}





console.log("home.js is loaded")

