angular.module('Dactoring')
.controller('ContactIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
  $scope.contacts = [];
    
  $scope.table = new ngTableParams({}, { dataset: $scope.contacts });
    
  Crud.all('contacts').success(function(data){
  	$scope.contacts = data;
  });
    

}]);