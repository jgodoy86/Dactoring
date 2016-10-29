angular.module('Dactoring')
.controller('RipGroupNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.add = function(){
    
    Crud.create($scope.rip_group, 'rip_groups').success(function(data){
      $scope.rip_group = {};
    });
  };
}]);