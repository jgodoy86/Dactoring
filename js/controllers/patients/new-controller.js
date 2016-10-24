angular.module('Dactoring')
.controller('PatientNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  
  $scope.add = function(){
    
      Crud.create($scope.patient, 'pabillions').success(function(data){
        $scope.patient = {};
      });
    
  };
}]);