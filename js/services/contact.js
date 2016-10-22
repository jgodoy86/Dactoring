angular.module('Dactoring')
.factory('Contact', ['$http', 'URL', function SessionFactory($http, URL) {
  return {
  	all: function(){
  	  return $http({method: 'GET', url: URL.LINK + '/contacts'})
  	},
    createContact: function(contact){
      return $http({method: 'POST', url: URL.LINK + '/contacts', data: contact})
    }
  }
}]);