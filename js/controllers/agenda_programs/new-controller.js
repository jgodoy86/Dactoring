angular.module('Dactoring')
.controller('AgendaProgramNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $(".form_datetime").datetimepicker({
    format: 'yyyy-mm-dd hh:ii P',
    showMeridian: true
  });

  $scope.add = function(){
    
    Crud.create($scope.agenda_program, 'agenda_programs').success(function(data){
      $scope.agenda_program = {};
    });
  };
}]);