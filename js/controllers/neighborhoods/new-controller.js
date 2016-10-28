angular.module('Dactoring')
.controller('NeighborhoodNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.neighborhood, 'neighborhoods').success(function(data){
      $scope.neighborhood = {};
    });
  };
}]);