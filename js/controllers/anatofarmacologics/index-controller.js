angular.module('Dactoring')
.controller('AnatofarmacologicIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.anatofarmacologics = [];

  $scope.table = new ngTableParams({}, { dataset: $scope.anatofarmacologics });

  Crud.all('anatofarmacologics').success(function(data){
    $scope.anatofarmacologics = data;
  });
}]);