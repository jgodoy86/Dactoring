angular.module('Dactoring')
.controller('GroupProductNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.group_product, 'group_products').success(function(data){
      $scope.group_product = {};
    });
  };
}]);