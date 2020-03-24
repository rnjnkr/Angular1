var module = angular.module("calculator-app", []);
module.controller("CalculatorCtrlr", CalculatorController);

function CalculatorController($scope) {
    $scope.buttonClicked = function (button) {
        $scope.operation = button;
    }

    $scope.calculate = function () {
        let num1 = parseFloat($scope.number1);
        let num2 = parseFloat($scope.number2);
        switch ($scope.operation) {
            case '+': $scope.result = num1 + num2; break;
            case '-': $scope.result = num1 - num2; break;
            case '*': $scope.result = num1 * num2; break;
            case '/': $scope.result = num1 / num2; break;
            default: console.log("Operation not defined")
        }
    }
}
window.onload = function () {
    document.onkeypress = function(e) {
        if(e.keyCode == 13) {
            document.getElementById("submit").click();
        }
    }
}
