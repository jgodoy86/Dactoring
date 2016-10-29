angular.module('Dactoring')
.controller('ProceduralTypeIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.procedural_types = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.procedural_types});

  Crud.all('procedural_types').success(function(data){
    $scope.procedural_types = data;
  });
}]);
