angular.module('Dactoring')
.controller('SubGroupProductNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.sub_group_product, 'sub_group_products').success(function(data){
      $scope.sub_group_product = {};
    });
  };
}]);