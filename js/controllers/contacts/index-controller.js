angular.module('Dactoring')
.controller('ContactIndexController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.contacts = [];
    
  Crud.all('contacts').success(function(data){
  	$scope.contacts = data;
  });
    

}]);