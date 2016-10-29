angular.module('Dactoring')
.controller('ProceduralFinalityIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.procedural_finalities = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.procedural_finalities});

  Crud.all('procedural_finalities').success(function(data){
    $scope.procedural_finalities = data;
  });
}]);
