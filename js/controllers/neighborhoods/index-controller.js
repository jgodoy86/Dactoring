angular.module('Dactoring')
.controller('NeighborhoodIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.neighborhoods = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.neighborhoods});

  Crud.all('neighborhoods').success(function(data){
    $scope.neighborhoods = data;
  });
}]);