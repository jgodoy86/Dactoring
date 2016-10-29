angular.module('Dactoring')
.controller('SupplyNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.supply, 'supplies').success(function(data){
      $scope.supply = {};
    });
  };
}]);