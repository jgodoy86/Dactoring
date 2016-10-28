angular.module('Dactoring')
.controller('PatientIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.patients = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.patients});

  Crud.all('patients').success(function(data){
    $scope.patients = data;
  });
}]);



