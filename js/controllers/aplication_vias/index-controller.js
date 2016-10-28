angular.module('Dactoring')
.controller('AplicationViaIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.aplication_vias = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.aplication_vias });

  Crud.all('aplication_vias').success(function(data){
    $scope.aplication_vias = data;
  });
}]);