angular.module('Dactoring')
.controller('PabillionNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
      Crud.create($scope.pabillion, 'pabillions').success(function(data){
        $scope.pabillion = {};
      });
    
  };
}]);