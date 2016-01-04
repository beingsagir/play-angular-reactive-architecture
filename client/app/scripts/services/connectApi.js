'use strict';
document.domain= "localhost";
angular.module('clientApp')
	.config(function($compileProvider) {
          $compileProvider
              .imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|content|file|data):/);
	})
	.factory('ConnectAPI', ['$http', function($http){
		var BASE_URL = 'http://localhost:9090';
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
				console.log(url);
				return patchDeferred(url);
			}
		}
	}

	]);