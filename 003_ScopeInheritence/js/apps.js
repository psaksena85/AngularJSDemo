var app = angular.module('scopeInheritenceDemo', []);

app.controller('empController', ['$scope', function($scope) {
    $scope.name = 'Pulkit Saxena';
}]);

app.controller('empInfoController', ['$scope', function($scope) {
    $scope.sal = '5500';
    $scope.dept = 'IT';
}]);

app.controller('empPayController', ['$scope', function($scope) {
    console.log('asd' + this.sal);
    $scope.getTax = function() {
        return $scope.sal * 30 / 100;
    };

    $scope.getSal = function() {
        return $scope.sal - $scope.getTax();
    };
}]);