angular.module('Dactoring')
.controller('PabillionIndexController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.pabillions = [];

  Crud.all('pabillions').success(function(data){
    $scope.pabillions = data;
  });
}]);