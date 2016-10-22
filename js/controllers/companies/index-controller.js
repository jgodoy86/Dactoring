angular.module('Dactoring')
.controller('CompanyIndexController', ['$scope', 'Crud', function($scope, Crud) {
  
  $scope.companies = [];

	Crud.all('companies').success(function(data){
    $scope.companies = data;
	});
}]);