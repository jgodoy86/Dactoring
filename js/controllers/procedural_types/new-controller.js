angular.module('Dactoring')
.controller('ProceduralTypeNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.procedural_type, 'procedural_types').success(function(data){
      $scope.procedural_type = {};
    });
  };
}]);