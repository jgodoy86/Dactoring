angular.module('Dactoring')
.controller('ContractNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $(".form_datetime").datetimepicker({
    format: 'yyyy-mm-dd',
    showMeridian: true
  });
  
  $scope.add = function(){
    
      Crud.create($scope.contract, 'contracts').success(function(data){
        $scope.contract = {};
      });
    
  };
}]);