'use strict';

angular
		.module('angularContactsListApp')
		.service(
				'ContactsService',
				function($http) {

					var companyServiceAPI = {};

					companyServiceAPI.getListItems = function() {
						return $http({
							method : "GET",
							url : "http://localhost:4567/companies"
						});
					}

					companyServiceAPI.get = function(id) {
						return $http({
							method : "GET",
							url : "http://localhost:4567/companies/" + id
						});
					}

					companyServiceAPI.create = function(company) {
						return $http({
							method : "POST",
							url : "http://localhost:4567/companies",
							data : company
						});
					}

					companyServiceAPI.update = function(company) {
						return $http({
							method : "PUT",
							url : "http://localhost:4567/companies/"+company.id,
							data : company
						});
					}
					
					companyServiceAPI.addOwners = function(id, owners) {
						return $http({
							method : "POST",
							url : "http://localhost:4567/companies/"+id+"/owners",
							data : {beneficiaryOwners: owners}
						});
					}

					return companyServiceAPI;
				});