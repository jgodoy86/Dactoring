angular.module('Dactoring')
.controller('CountryIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.countries = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.countries });

  Crud.all('countries').success(function(data){
    $scope.countries = data;
  });
}]);