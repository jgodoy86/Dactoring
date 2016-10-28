angular.module('Dactoring')
.controller('MunicipalityNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.municipality, 'municipalities').success(function(data){
      $scope.municipality = {};
    });
  };
}]);