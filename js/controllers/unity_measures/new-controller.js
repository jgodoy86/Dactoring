angular.module('Dactoring')
.controller('UnityMeasureNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.unity_measure, 'unity_measures').success(function(data){
      $scope.unity_measure = {};
    });
  };
}]);