var module = angular.module("nestedControllers", []);
module.controller("Controller1", Controller1);
module.controller("Controller2", Controller2);

/* function Controller1($scope) {
    $scope.testProperty = "hello from controller 1";
}
function Controller2($scope) {
    $scope.testProperty = "hello from controller 2";
} */

function Controller1() {
    this.testProperty = "hello from controller 1";
}
function Controller2($rootScope) {
    $rootScope.testProperty ="hello";  
    console.log("Hello");
    // this.testProperty = "hello from controller 2";
}