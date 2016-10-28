angular.module('Dactoring')
.controller('ContractIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.contracts = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.contracts });

  Crud.all('contracts').success(function(data){
    $scope.contracts = data;
  });
}]);



  
