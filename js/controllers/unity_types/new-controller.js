angular.module('Dactoring')
.controller('UnityTypeNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.unity_type, 'unity_types').success(function(data){
      $scope.unity_type = {};
    });
  };
}]);