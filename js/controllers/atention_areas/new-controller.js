angular.module('Dactoring')
.controller('AtentionAreaNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $('#timepicker3').timepicker('setTime', '12:00 PM');
  $('#timepicker4').timepicker('setTime', '12:00 PM');

  $scope.add = function(){
    
    Crud.create($scope.atention_area, 'atention_areas').success(function(data){
      $scope.atention_area = {};
    });
  };
}]);