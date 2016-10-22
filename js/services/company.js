angular.module('Dactoring')
.factory('Company', ['$http', 'URL', function SessionFactory($http, URL) {
  return {
  	all: function(){
  	  return $http({method: 'GET', url: URL.LINK + '/companies'})
  	},
    createCompany: function(company){
      return $http({method: 'POST', url: URL.LINK + '/companies', data: company})
    }
  }
}]);