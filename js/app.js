angular.module('Dactoring', 
  ['ngRoute',
  'ngTable', 
  'ui.bootstrap',
  'picardy.fontawesome',
  'angular-scroll-animate',
  'ngFabForm'])
	.config(function (ngFabFormProvider)
    {
      ngFabFormProvider.extendConfig({
          scrollToAndFocusFirstErrorOnSubmit: false,
          setNovalidate: false
      });
    });