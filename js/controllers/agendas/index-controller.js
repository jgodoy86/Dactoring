angular.module('Dactoring')
.controller('AgendaIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.agendas = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.agendas });

  Crud.all('agendas').success(function(data){
    $scope.agendas = data;
  });
}]);