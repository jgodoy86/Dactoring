angular.module('Dactoring')
.controller('ContractNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
      Crud.create($scope.contract, 'contracts').success(function(data){
        $scope.contract = {};
      });
    
  };
}]);