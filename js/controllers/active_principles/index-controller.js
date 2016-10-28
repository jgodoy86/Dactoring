angular.module('Dactoring')
.controller('ActivePrincipleIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.active_principles = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.active_principles });

  Crud.all('active_principles').success(function(data){
    $scope.active_principles = data;
  });
}]);