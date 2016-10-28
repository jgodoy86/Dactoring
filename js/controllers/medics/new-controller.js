angular.module('Dactoring')
.controller('MedicNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
      Crud.create($scope.medic, 'medics').success(function(data){
        $scope.medic = {};
      });
  };
}]);