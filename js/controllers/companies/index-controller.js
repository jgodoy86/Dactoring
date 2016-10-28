angular.module('Dactoring')
.controller('CompanyIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
	$scope.companies = [];

	$scope.table = new ngTableParams({}, { dataset: $scope.companies });

	Crud.all('companies').success(function(data){
    	$scope.companies = data;
	});
}]);