(function() {
  'use strict';

  angular.module('angularContactsListApp', [
    'ngRoute',
    'keepr'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contacts', {
        templateUrl: 'scripts/contacts/views/index.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contactsCtrl'
      })
      .when('/contacts/new', {
        templateUrl: 'scripts/contacts/views/new.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contactsCtrl'
      })
      .when('/contacts/:id/details', {
        templateUrl: 'scripts/contacts/views/details.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contactsCtrl',
        method: 'get'
      })
      .when('/contacts/:id/edit', {
        templateUrl: 'scripts/contacts/views/edit.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contactsCtrl',
        method: 'get'
      })
      .when('/contacts/:id/addOwners', {
        templateUrl: 'scripts/contacts/views/owners.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contactsCtrl',
        method: 'get'
      })
      .otherwise({
        redirectTo: '/contacts'
      });
  });

}());
