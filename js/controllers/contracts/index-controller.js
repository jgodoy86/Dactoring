angular.module('Dactoring')
.controller('ContractIndexController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.contracts = [];

  Crud.all('contracts').success(function(data){
    $scope.contracts = data;
  });
}]);



  