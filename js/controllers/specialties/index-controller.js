angular.module('Dactoring')
.controller('SpecialtyIndexController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.specialties = [];

  Crud.all('specialties').success(function(data){
    $scope.specialties = data;
  });
}]);