angular.module('Dactoring')
.controller('MedicIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.medics = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.medics});

  Crud.all('medics').success(function(data){
    $scope.medics = data;
  });
}]);