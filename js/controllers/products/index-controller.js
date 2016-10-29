angular.module('Dactoring')
.controller('ProductIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.products = [];
    
  $scope.table = new ngTableParams({}, { dataset: $scope.products });
    
  Crud.all('products').success(function(data){
    $scope.products = data;
  });
}]);