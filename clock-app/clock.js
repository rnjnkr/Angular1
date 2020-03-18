var module = angular.module("clockApp", []);
                module.controller("ClockCtrlr", clockController);
                function clockController($scope) {
                    var currentTime = new Date();
                    $scope.currentTime = currentTime.toTimeString();
                    var hour = currentTime.getHours();
                    $scope.hourOfDay = hour;
                    $scope.fetchCurrentTime = function() {
                        clockController($scope);
                    }
                }