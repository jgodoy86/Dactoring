angular.module('Dactoring')
.controller('AnatofarmacologicNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.add = function(){
    
    Crud.create($scope.anatofarmacologic, 'anatofarmacologics').success(function(data){
      $scope.anatofarmacologic = {};
    });
  };
}]);