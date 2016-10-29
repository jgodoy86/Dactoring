angular.module('Dactoring')
.controller('PatientNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $(".form_datetime").datetimepicker({
    format: 'yyyy-mm-dd',
    showMeridian: true
  });
  
  $scope.add = function(){
    
    Crud.create($scope.patient, 'patients').success(function(data){
      $scope.patient = {};
    });
  };
}]);