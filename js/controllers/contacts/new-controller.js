angular.module('Dactoring')
.controller('ContactNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
      Crud.create($scope.contact, 'contacts').success(function(data){
        $scope.contact = {};
      });
    
  };
}]);