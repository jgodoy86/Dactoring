angular.module('Dactoring')
.controller('ProductNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.add = function(){
    
    Crud.create($scope.product, 'products').success(function(data){
      $scope.product = {};
    });
  };
}]);