/* globals confirm */
(function() {
	'use strict';

	function ContactsCtrl($scope, $rootScope, $location, $routeParams, $route,
			$filter, AlertService, ContactsService) {

		this.AlertService = AlertService;

		this.alerts = $rootScope.alerts;

		/**
		 * Initial value of form
		 * 
		 * @type {Object}
		 */
		this.company = {};

		/**
		 * Initial value of form
		 * 
		 * @type {Array}
		 */
		this.owners = [];

		/**
		 * Initial value of form
		 * 
		 * @type {Object}
		 */
		this.ownerToAdd = {
			name : ''
		};

		/**
		 * Reset the form values
		 */
		this.reset = function() {
			this.owners = [];
			this.company = {
				name : '',
				address : '',
				city : '',
				country : '',
				phone : '',
				email : '',
				beneficiaryOwners : this.owners
			};
		};

		/**
		 * Add a listContacts in this.listContacts
		 */
		this.create = function(company) {
			ContactsService.create(company).success(
					function(res) {
						this.listCompanies = res;
						this.AlertService.add('success', 'Company "'
								+ company.name + '" created with success!',
								5000);
					}.bind(this)).error(function(err) {
				this.AlertService.add('error', 'Error: ' + err, 5000);
			}.bind(this));
		};

		/**
		 * Add an owner
		 */
		this.addOwners = function(company, owner) {
			company.beneficiaryOwners.push(owner);
			ContactsService.addOwners(company.id, [ owner ]).success(
					function(res) {
						this.AlertService.add('success', owner.name
								+ ' is now owner of ' + company.name, 5000);
					}.bind(this)).error(function(err) {
				this.AlertService.add('error', 'Error: ' + err, 5000);
			}.bind(this));
			this.reset();
			$location.path('/contacts');
		};

		/**
		 * Get details of a company
		 * 
		 * @return {[type]} [description]
		 */
		this.get = function() {
			var id = $routeParams.id;
			ContactsService.get(id).success(function(res) {
				this.company = res;
			}.bind(this)).error(
					function(err, status) {
						this.AlertService.add('error', 'Error while editing: '
								+ status, 5000);
					}.bind(this));
			window.scrollTo(0, 0);
		};

		/**
		 * Update item
		 * 
		 * @param {Object}
		 *            item [description]
		 * @return {[type]} [description]
		 */
		this.update = function(company) {
			ContactsService.update(company).success(
					function(res) {
						this.AlertService.add('success',
								'Compnay updated with success!', 5000);
					}.bind(this)).error(
					function(err, status) {
						this.AlertService
								.add('error', 'Error while updating company: '
										+ status, 5000);
					}.bind(this));
		};

		/**
		 * Add/edit method abstraction
		 * 
		 * @param {Object}
		 *            item [description]
		 * @return {[type]} [description]
		 */
		this.save = function(company) {
			if (typeof company.id !== 'undefined') {
				this.update(company);
			} else {
				this.create(company);
			}
			this.reset();
			$location.path('/contacts');
		};

		/**
		 * Method for class initialization
		 * 
		 * @return {[type]} [description]
		 */
		this.init = function() {
			ContactsService.getListItems().success(function(res) {
				if (res && res.length > 0) {
					$scope.isFound = true;
					this.listCompanies = this.filteredData = res;
				}
			}.bind(this)).error(
					function(err, status) {
						this.AlertService.add('error', 'Error while indexing: '
								+ status, 5000);
					}.bind(this));
			this.reset();
			// Calling routeParam method
			if ($route.current.method !== undefined) {
				this[$route.current.method]();
			}
		};

		this.init();

	}

	angular.module('angularContactsListApp').controller('ContactsCtrl',
			ContactsCtrl);

	ContactsCtrl.$inject = [ '$scope', '$rootScope', '$location',
			'$routeParams', '$route', '$filter', 'AlertService',
			'ContactsService' ];

}());