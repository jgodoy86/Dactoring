angular.module('Dactoring')
.controller('BrandNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.brand, 'brands').success(function(data){
      $scope.brand = {};
    });
  };
}]);