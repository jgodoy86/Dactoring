angular.module('Dactoring')
.controller('CountryNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
      Crud.create($scope.country, 'countries').success(function(data){
        $scope.country = {};
      });
  };
}]);