angular.module('Dactoring')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/pages/home.html'
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
    .when('/patients', {
      templateUrl: 'templates/pages/patients/index.html',
      controller: 'PatientIndexController'
    })
    .when('/patients/new', {
      templateUrl: 'templates/pages/patients/new.html',
      controller: 'PatientNewController'
    })
    .when('/pabillions', {
      templateUrl: 'templates/pages/pabillions/index.html',
      controller: 'PabillionIndexController'
    })
    .when('/pabillions/new', {
      templateUrl: 'templates/pages/pabillions/new.html',
      controller: 'PabillionNewController'
    })
    .when('/atention_areas', {
      templateUrl: 'templates/pages/atention_areas/index.html',
      controller: 'AtentionAreaIndexController'
    })
    .when('/atention_areas/new', {
      templateUrl: 'templates/pages/atention_areas/new.html',
      controller: 'AtentionAreaNewController'
    })
    .when('/specialties', {
      templateUrl: 'templates/pages/specialties/index.html',
      controller: 'SpecialtyIndexController'
    })
    .when('/specialties/new', {
      templateUrl: 'templates/pages/specialties/new.html',
      controller: 'SpecialtyNewController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
