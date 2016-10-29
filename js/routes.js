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
    .when('/unity_types', {
      templateUrl: 'templates/pages/unity_types/index.html',
      controller: 'UnityTypeIndexController'
    })
    .when('/unity_types/new', {
      templateUrl: 'templates/pages/unity_types/new.html',
      controller: 'UnityTypeNewController'
    })
    .when('/unity_measures', {
      templateUrl: 'templates/pages/unity_measures/index.html',
      controller: 'UnityMeasureIndexController'
    })
    .when('/unity_measures/new', {
      templateUrl: 'templates/pages/unity_measures/new.html',
      controller: 'UnityMeasureNewController'
    })
    .when('/supplies', {
      templateUrl: 'templates/pages/supplies/index.html',
      controller: 'SupplyIndexController'
    })
    .when('/supplies/new', {
      templateUrl: 'templates/pages/supplies/new.html',
      controller: 'SupplyNewController'
    })
    .when('/group_products', {
      templateUrl: 'templates/pages/group_products/index.html',
      controller: 'GroupProductIndexController'
    })
    .when('/group_products/new', {
      templateUrl: 'templates/pages/group_products/new.html',
      controller: 'GroupProductNewController'
    })
    .when('/sub_group_products', {
      templateUrl: 'templates/pages/sub_group_products/index.html',
      controller: 'SubGroupProductIndexController'
    })
    .when('/sub_group_products/new', {
      templateUrl: 'templates/pages/sub_group_products/new.html',
      controller: 'SubGroupProductNewController'
    })
    .when('/brands', {
      templateUrl: 'templates/pages/brands/index.html',
      controller: 'BrandIndexController'
    })
    .when('/brands/new', {
      templateUrl: 'templates/pages/brands/new.html',
      controller: 'BrandNewController'
    })
    .when('/storages', {
      templateUrl: 'templates/pages/storages/index.html',
      controller: 'StorageIndexController'
    })
    .when('/storages/new', {
      templateUrl: 'templates/pages/storages/new.html',
      controller: 'StorageNewController'
    })
    .when('/products', {
      templateUrl: 'templates/pages/products/index.html',
      controller: 'ProductIndexController'
    })
    .when('/products/new', {
      templateUrl: 'templates/pages/products/new.html',
      controller: 'ProductNewController'
    })
    .when('/rip_groups', {
      templateUrl: 'templates/pages/rip_groups/index.html',
      controller: 'RipGroupIndexController'
    })
    .when('/rip_groups/new', {
      templateUrl: 'templates/pages/rip_groups/new.html',
      controller: 'RipGroupNewController'
    })
    .when('/procedural_types', {
      templateUrl: 'templates/pages/procedural_types/index.html',
      controller: 'ProceduralTypeIndexController'
    })
    .when('/procedural_types/new', {
      templateUrl: 'templates/pages/procedural_types/new.html',
      controller: 'ProceduralTypeNewController'
    })
    .when('/procedural_finalities', {
      templateUrl: 'templates/pages/procedural_finalities/index.html',
      controller: 'ProceduralFinalityIndexController'
    })
    .when('/procedural_finalities/new', {
      templateUrl: 'templates/pages/procedural_finalities/new.html',
      controller: 'ProceduralFinalityNewController'
    })
    .when('/procedures', {
      templateUrl: 'templates/pages/procedures/index.html',
      controller: 'ProcedureIndexController'
    })
    .when('/procedures/new', {
      templateUrl: 'templates/pages/procedures/new.html',
      controller: 'ProcedureNewController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
