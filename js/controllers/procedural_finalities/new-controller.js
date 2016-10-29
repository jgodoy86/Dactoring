angular.module('Dactoring')
.controller('ProceduralFinalityNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.procedural_finality, 'procedural_finalities').success(function(data){
      $scope.procedural_finality = {};
    });
  };
}]);