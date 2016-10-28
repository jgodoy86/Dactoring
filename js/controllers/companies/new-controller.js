angular.module('Dactoring')
.controller('CompanyNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.add = function(){
    
    Crud.create($scope.company, 'companies').success(function(data){
      $scope.company = {};
    });
  };
}]);