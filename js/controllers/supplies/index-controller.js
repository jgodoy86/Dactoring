angular.module('Dactoring')
.controller('SupplyIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.supplies = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.supplies });

  Crud.all('supplies').success(function(data){
    $scope.supplies = data;
  });
}]);