angular.module('Dactoring')
.run(['$rootScope', '$location', '$anchorScroll', function($rootScope, $location, $anchorScroll) {
  $rootScope.goto = function (url, hash) {
    if(url){
      $location.path(url);   
    }else{
      $location.hash(hash);
    }
    $anchorScroll();
    $location.hash('');
  }
}])
.constant("URL", {
  LINK: { dev: 'http://dactoring-sammx343.c9users.io:8080/api/v1', prod: 'http://revapplution.herokuapp.com/api/v1' }.dev
});