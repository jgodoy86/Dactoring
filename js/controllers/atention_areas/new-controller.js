angular.module('Dactoring')
.controller('AtentionAreaNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.add = function(){
    
      Crud.create($scope.atention_area, 'atention_areas').success(function(data){
        $scope.atention_area = {};
      });
    
  };
}]);