angular.module('Dactoring')
.controller('FarmaceuticFormIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.farmaceutic_forms = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.farmaceutic_forms});

  Crud.all('farmaceutic_forms').success(function(data){
    $scope.farmaceutic_forms = data;
  });
}]);