angular.module('Dactoring')
.controller('UnityTypeIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.unity_types = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.unity_types });

  Crud.all('unity_types').success(function(data){
    $scope.unity_types = data;
  });
}]);