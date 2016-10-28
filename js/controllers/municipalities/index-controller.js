angular.module('Dactoring')
.controller('MunicipalityIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.municipalities = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.municipalities});

  Crud.all('municipalities').success(function(data){
    $scope.municipalities = data;
  });
}]);