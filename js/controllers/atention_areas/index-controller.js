angular.module('Dactoring')
.controller('AtentionAreaIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.atention_areas = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.atention_areas });

  Crud.all('atention_areas').success(function(data){
    $scope.atention_areas = data;
  });
}]);