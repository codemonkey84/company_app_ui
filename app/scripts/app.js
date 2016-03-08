(function() {
  'use strict';

  angular.module('companyApp', [
    'ngRoute',
    'keepr'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/companies', {
        templateUrl: 'scripts/companies/views/index.html',
        controller: 'CompaniesCtrl',
        controllerAs: 'companiesCtrl'
      })
      .when('/companies/new', {
        templateUrl: 'scripts/companies/views/new.html',
        controller: 'CompaniesCtrl',
        controllerAs: 'companiesCtrl'
      })
      .when('/companies/:id/details', {
        templateUrl: 'scripts/companies/views/details.html',
        controller: 'CompaniesCtrl',
        controllerAs: 'companiesCtrl',
        method: 'get'
      })
      .when('/companies/:id/edit', {
        templateUrl: 'scripts/companies/views/edit.html',
        controller: 'CompaniesCtrl',
        controllerAs: 'companiesCtrl',
        method: 'get'
      })
      .when('/companies/:id/addOwners', {
        templateUrl: 'scripts/Companies/views/owners.html',
        controller: 'CompaniesCtrl',
        controllerAs: 'companiesCtrl',
        method: 'get'
      })
      .otherwise({
        redirectTo: '/companies'
      });
  });

}());
