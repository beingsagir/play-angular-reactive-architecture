'use strict';

angular.module('clientApp')
	.factory('ConnectAPI', ['$http', function($http){
		var BASE_URL = 'http://www.localhost:9090';
		function patchDeferred(defer){
			defer.always = function(callback){
				defer.then(callback, callback);
			};
			return defer;
		}

		return{
			testApiOne: function (exten){
				var url = BASE_URL;
				if(exten !== undefined){
					url = url + '/' + exten
				}
				var url = $http.get(url);
				return patchDeferred(url);
			}
		}
	}

	]);