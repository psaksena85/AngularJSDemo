var app = angular.module("controllerDemo", []);

app.controller("ControllerDemoCtrl", ['$scope', function($scope) {
    $scope.user = {};
    $scope.user.name = "Pulkit Saxena";
    $scope.user.address = "San Jose, California";
}]);