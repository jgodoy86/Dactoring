angular.module('Dactoring')
.controller('ConcentrationIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.concentrations = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.concentrations });

  Crud.all('concentrations').success(function(data){
    $scope.concentrations = data;
  });
}]);