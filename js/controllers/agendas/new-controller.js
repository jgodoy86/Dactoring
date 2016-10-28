angular.module('Dactoring')
.controller('AgendaNewController', ['$scope', 'Crud', function($scope, Crud) {
  
 $('#timepicker1').timepicker('setTime', '12:00 PM');
 $('#timepicker2').timepicker('setTime', '12:00 PM');

  $scope.add = function(){
    
    Crud.create($scope.agenda, 'agendas').success(function(data){
      $scope.agenda = {};
    }); 
  };
}]);