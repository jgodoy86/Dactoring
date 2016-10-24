angular.module('Dactoring')
.controller('PatientIndexController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.patients = [];

  Crud.all('patients').success(function(data){
    $scope.patients = data;
  });
}]);
