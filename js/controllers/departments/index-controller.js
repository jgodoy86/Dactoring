angular.module('Dactoring')
.controller('DepartmentIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.departments = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.departments});

  Crud.all('departments').success(function(data){
    $scope.departments = data;
  });
}]);