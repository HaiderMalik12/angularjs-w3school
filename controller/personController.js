var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.credit=1000.0;
    $scope.debit=1000.0;
    $scope.balance=100.0;
    $scope.city='LHR'
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
    $scope.partyDescription=function(){
        return $scope.city + " "+$scope.credit + " "+$scope.debit + " "
        +$scope.balance;
    }
});