angular.module('Dactoring')
.controller('StorageNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.add = function(){
    
    Crud.create($scope.storage, 'storages').success(function(data){
      $scope.storage = {};
    });
  };
}]);