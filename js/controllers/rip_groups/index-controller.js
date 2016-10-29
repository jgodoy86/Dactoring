angular.module('Dactoring')
.controller('RipGroupIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.rip_groups = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.rip_groups});

  Crud.all('rip_groups').success(function(data){
    $scope.rip_groups = data;
  });
}]);