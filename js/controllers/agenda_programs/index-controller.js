angular.module('Dactoring')
.controller('AgendaProgramIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.agenda_programs = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.agenda_programs });

  Crud.all('agenda_programs').success(function(data){
    $scope.agenda_programs = data;
  });
}]);