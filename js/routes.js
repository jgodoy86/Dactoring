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
    .when('/countries', {
      templateUrl: 'templates/pages/countries/index.html',
      controller: 'CountryIndexController'
    })
    .when('/countries/new', {
      templateUrl: 'templates/pages/countries/new.html',
      controller: 'CountryNewController'
    })
    .when('/departments', {
      templateUrl: 'templates/pages/departments/index.html',
      controller: 'DepartmentIndexController'
    })
    .when('/departments/new', {
      templateUrl: 'templates/pages/departments/new.html',
      controller: 'DepartmentNewController'
    })
    .when('/medics', {
      templateUrl: 'templates/pages/medics/index.html',
      controller: 'MedicIndexController'
    })
    .when('/medics/new', {
      templateUrl: 'templates/pages/medics/new.html',
      controller: 'MedicNewController'
    })
    .when('/municipalities', {
      templateUrl: 'templates/pages/municipalities/index.html',
      controller: 'MunicipalityIndexController'
    })
    .when('/municipalities/new', {
      templateUrl: 'templates/pages/municipalities/new.html',
      controller: 'MunicipalityNewController'
    })
    .when('/agendas', {
      templateUrl: 'templates/pages/agendas/index.html',
      controller: 'AgendaIndexController'
    })
    .when('/agendas/new', {
      templateUrl: 'templates/pages/agendas/new.html',
      controller: 'AgendaNewController'
    })
    .when('/neighborhoods', {
      templateUrl: 'templates/pages/neighborhoods/index.html',
      controller: 'NeighborhoodIndexController'
    })
    .when('/neighborhoods/new', {
      templateUrl: 'templates/pages/neighborhoods/new.html',
      controller: 'NeighborhoodNewController'
    })
    .when('/agenda_programs', {
      templateUrl: 'templates/pages/agenda_programs/index.html',
      controller: 'AgendaProgramIndexController'
    })
    .when('/agenda_programs/new', {
      templateUrl: 'templates/pages/agenda_programs/new.html',
      controller: 'AgendaProgramNewController'
    })
    .when('/anatofarmacologics', {
      templateUrl: 'templates/pages/anatofarmacologics/index.html',
      controller: 'AnatofarmacologicIndexController'
    })
    .when('/anatofarmacologics/new', {
      templateUrl: 'templates/pages/anatofarmacologics/new.html',
      controller: 'AnatofarmacologicNewController'
    })
    .when('/active_principles', {
      templateUrl: 'templates/pages/active_principles/index.html',
      controller: 'ActivePrincipleIndexController'
    })
    .when('/active_principles/new', {
      templateUrl: 'templates/pages/active_principles/new.html',
      controller: 'ActivePrincipleNewController'
    })
    .when('/aplication_vias', {
      templateUrl: 'templates/pages/aplication_vias/index.html',
      controller: 'AplicationViaIndexController'
    })
    .when('/aplication_vias/new', {
      templateUrl: 'templates/pages/aplication_vias/new.html',
      controller: 'AplicationViaNewController'
    })
    .when('/farmaceutic_forms', {
      templateUrl: 'templates/pages/farmaceutic_forms/index.html',
      controller: 'FarmaceuticFormIndexController'
    })
    .when('/farmaceutic_forms/new', {
      templateUrl: 'templates/pages/farmaceutic_forms/new.html',
      controller: 'FarmaceuticFormNewController'
    })
    .when('/concentrations', {
      templateUrl: 'templates/pages/concentrations/index.html',
      controller: 'ConcentrationIndexController'
    })
    .when('/concentrations/new', {
      templateUrl: 'templates/pages/concentrations/new.html',
      controller: 'ConcentrationNewController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
