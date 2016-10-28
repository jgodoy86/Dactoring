angular.module('Dactoring')
.controller('CountryIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.country = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.country });

  Crud.all('countries').success(function(data){
    $scope.countries = data;
  });
}]);