angular.module('Dactoring')
.factory('Crud', ['$http', 'URL', function SessionFactory($http, URL) {
  return {
    all: function(service){
      return $http({method: 'GET', url: URL.LINK + '/' + service})
    },
    create: function(company, service){
      return $http({method: 'POST', url: URL.LINK + '/' + service, data: company})
    }
  }
}]);