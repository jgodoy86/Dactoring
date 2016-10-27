angular.module('Dactoring')
.controller('SpecialtyNewController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.customFormOptions = {
    validationsTemplate: 'your-tpl.html',
    preventInvalidSubmit: false,
    preventDoubleSubmit: false,
    setFormDirtyOnSubmit: true,
    scrollToAndFocusFirstErrorOnSubmit: true,
    scrollAnimationTime: 900,
    scrollOffset: -100,
  };
  
  $scope.add = function(){
    Crud.create($scope.specialty, 'specialties').success(function(data){
      $scope.specialty = {};
    });
  };
}]);
