angular.module('Dactoring')
.controller('DepartmentNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.department, 'departments').success(function(data){
      $scope.department = {};
    });
  };
}]);