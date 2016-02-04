var app=angular.module('myApp',[]);
app.controller('partyCtrl',function($scope){

   var parties=['Haider','Malik','Marko','Gargenta','Shugran'];

    $scope.showParties=function(){

        return $scope.parties=parties;
    }

});