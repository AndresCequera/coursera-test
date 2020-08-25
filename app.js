(function (){
'use strict';

angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {
$scope.name = "";
$scope.totalValue = 0 ; 

$scope.sayHello = function (){
    return "Hello Hi";
};

$scope.displayNumeric = function(){

    var totalNameValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
};

function calculatNumericForString(string){
    var totalStringValue = 0;
    for(var i = 0; i < string.length; i++){
        totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
}

});

})();