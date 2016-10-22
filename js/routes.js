angular.module('Dactoring')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/pages/home.html',
      controller: 'HomeController'
    })
    .when('/contacts', {
      templateUrl: 'templates/pages/contacts/index.html',
      controller: 'ContactIndexController'
    })
    .when('/contacts/new', {
      templateUrl: 'templates/pages/contacts/new.html',
      controller: 'ContactNewController'
    })
    .when('/companies', {
      templateUrl: 'templates/pages/companies/index.html',
      controller: 'CompanyIndexController'
    })
    .when('/companies/new', {
      templateUrl: 'templates/pages/companies/new.html',
      controller: 'CompanyNewController'
    })
    .when('/contracts', {
      templateUrl: 'templates/pages/contracts/index.html',
      controller: 'ContractIndexController'
    })
    .when('/contracts/new', {
      templateUrl: 'templates/pages/contracts/new.html',
      controller: 'ContractNewController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
