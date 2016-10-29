angular.module('Dactoring')
.controller('UnityMeasureIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.unity_measures = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.unity_measures });

  Crud.all('unity_measures').success(function(data){
    $scope.unity_measures = data;
  });
}]);