var app = angular.module('scopeDemo', []);

app.controller('scopeCtrl1', ['$scope', function($scope) {
    $scope.name = 'Pulkit Saxena';
    $scope.address = 'San Jose, California';
}]);

app.controller('scopeCtrl2', function() {
    this.name = 'Lipika';
    this.address = 'Nashua, New Hampshire';
});