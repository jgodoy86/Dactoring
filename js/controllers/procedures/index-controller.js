angular.module('Dactoring')
.controller('ProcedureIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.procedures = [];
    
  $scope.table = new ngTableParams({}, { dataset: $scope.procedures });
    
  Crud.all('procedures').success(function(data){
    $scope.procedures = data;
  });
}]);