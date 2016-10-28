angular.module('Dactoring')
.controller('FarmaceuticFormNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
    Crud.create($scope.farmaceutic_form, 'farmaceutic_forms').success(function(data){
      $scope.farmaceutic_form = {};
    });
  };
}]);