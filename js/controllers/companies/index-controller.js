angular.module('Dactoring')
.controller('CompanyIndexController', ['$scope', 'Crud', 'ngTableParams' , function($scope, Crud, ngTableParams) {
  
	$scope.companies = [];

	// $scope.users = [
	// { name: "Suresh Dasari", age: 30, location: 'Chennai' },
	// { name: "Rohini Alavala", age: 29, location: 'Chennai' },
	// ];

	// $scope.usersTable = new ngTableParams({}, { dataset: $scope.users });

	$scope.table = new ngTableParams({}, { dataset: $scope.companies });

  

	Crud.all('companies').success(function(data){
    	$scope.companies = data;
	});
}]);