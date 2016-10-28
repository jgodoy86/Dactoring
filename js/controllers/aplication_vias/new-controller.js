angular.module('Dactoring')
.controller('AplicationViaNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.add = function(){
    
    Crud.create($scope.aplication_via, 'aplication_vias').success(function(data){
      $scope.aplication_via = {};
    });
  };
}]);