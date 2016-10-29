angular.module('Dactoring')
.controller('ProcedureNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $(".form_datetime").datetimepicker({format: 'yyyy-mm-dd'});

  $scope.add = function(){
    
    Crud.create($scope.procedure, 'procedures').success(function(data){
      $scope.procedure = {};
    });
  };
}]);