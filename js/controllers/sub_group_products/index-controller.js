angular.module('Dactoring')
.controller('SubGroupProductIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.sub_group_products = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.sub_group_products});

  Crud.all('sub_group_products').success(function(data){
    $scope.sub_group_products = data;
  });
}]);