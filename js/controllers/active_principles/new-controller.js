angular.module('Dactoring')
.controller('ActivePrincipleNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.add = function(){
    
    Crud.create($scope.active_principle, 'active_principles').success(function(data){
      $scope.active_principle = {};
    });
  };
}]);