angular.module('Dactoring')
.controller('GroupProductIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.group_products = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.group_products});

  Crud.all('group_products').success(function(data){
    $scope.group_products = data;
  });
}]);