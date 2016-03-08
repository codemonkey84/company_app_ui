'use strict';

angular
		.module('companyApp')
		.service(
				'CompaniesService',
				function($http) {

					var companyServiceAPI = {};

					companyServiceAPI.getListItems = function() {
						return $http({
							method : "GET",
							url : "https://young-ridge-70702.herokuapp.com/companies"
						});
					}

					companyServiceAPI.get = function(id) {
						return $http({
							method : "GET",
							url : "https://young-ridge-70702.herokuapp.com/companies/" + id
						});
					}

					companyServiceAPI.create = function(company) {
						return $http({
							method : "POST",
							url : "https://young-ridge-70702.herokuapp.com/companies",
							data : company
						});
					}

					companyServiceAPI.update = function(company) {
						return $http({
							method : "PUT",
							url : "https://young-ridge-70702.herokuapp.com/companies/"+company.id,
							data : company
						});
					}
					
					companyServiceAPI.addOwners = function(id, owners) {
						return $http({
							method : "POST",
							url : "https://young-ridge-70702.herokuapp.com/companies/"+id+"/owners",
							data : {beneficiaryOwners: owners}
						});
					}

					return companyServiceAPI;
				});