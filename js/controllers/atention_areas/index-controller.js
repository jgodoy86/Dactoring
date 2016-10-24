angular.module('Dactoring')
.controller('AtentionAreaIndexController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.atention_areas = [];

  Crud.all('atention_areas').success(function(data){
    $scope.atention_areas = data;
  });
}]);