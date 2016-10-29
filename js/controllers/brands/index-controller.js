angular.module('Dactoring')
.controller('BrandIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.brands = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.brands});

  Crud.all('brands').success(function(data){
    $scope.brands = data;
  });
}]);