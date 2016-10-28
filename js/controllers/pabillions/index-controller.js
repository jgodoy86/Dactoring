angular.module('Dactoring')
.controller('PabillionIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams)  {
  
  $scope.pabillions = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.pabillions});

  Crud.all('pabillions').success(function(data){
    $scope.pabillions = data;
  });
}]);


