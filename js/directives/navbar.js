angular.module("Dactoring")
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/navbar.html'
    }
  });