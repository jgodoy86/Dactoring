angular.module('Dactoring')
.controller('StorageIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.storages = [];
    
  $scope.table = new ngTableParams({}, { dataset: $scope.storages });
    
  Crud.all('storages').success(function(data){
    $scope.storages = data;
  });
}]);