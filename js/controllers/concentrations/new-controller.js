angular.module('Dactoring')
.controller('ConcentrationNewController', ['$scope', 'Crud', function($scope, Crud) {

  $scope.add = function(){
    Crud.create($scope.concentration, 'concentrations').success(function(data){
      $scope.concentration = {};
    }); 
  };
}]);