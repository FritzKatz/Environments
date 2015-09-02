/*(function (){
	var app = angular.module('envs', []);


/!*	app.controller('EnvsController', ['$scope', '$http', function($scope, $http) {
		$http.get('json/store.json').success(function(data) {
			$scope.servers = data;
		});		
	}]);*!/


    app.controller('EnvsController', ['$scope', '$http', function($scope, $http) {
        $scope.loadData = function() {
            $http.get('json/store.json').success(function (data) {
                $scope.servers = data;
            });
        };
        $scope.loadData();
    }]);



    app.directive('popover', function() {
        return function() {
            $("[data-toggle='popover']").popover({
                //trigger: 'click focus'
            });

            $('body').on('click', function (element) {
                $("[data-toggle='popover']").each(function () {
                    //the 'is' for buttons that trigger popups
                    //the 'has' for icons within a button that triggers a popup
                    if (!$(this).is(element.target) && $(this).has(element.target).length === 0 && $('.popover').has(element.target).length === 0) {
                        $(this).popover('hide');
                    }
                });
            });

        }
    });


})();*/


(function (){
    var app = angular.module('envs', [])

    .controller('EnvsController', function($scope, NagiosStatusService) {
            $scope.refreshData = function() {
                NagiosStatusService.loadData(function (data) {
                    $scope.servers = data;
                });
            };
            $scope.refreshData();
    });



    /*app.factory('NagiosStatusService', function($http) {
        return {
            loadData: function(callback){
                $http.get('json/store.json').success(callback);
            }
        }
    });*/

    app.service('NagiosStatusService', function($http){
        return {
            loadData: function(callback){
                $http.get('json/store.json').success(callback);
            }
        }
    });


    app.directive('popover', function() {
        return function() {
            $("[data-toggle='popover']").popover({
                //trigger: 'click focus'
            });

            $('body').on('click', function (element) {
                $("[data-toggle='popover']").each(function () {
                    //the 'is' for buttons that trigger popups
                    //the 'has' for icons within a button that triggers a popup
                    if (!$(this).is(element.target) && $(this).has(element.target).length === 0 && $('.popover').has(element.target).length === 0) {
                        $(this).popover('hide');
                    }
                });
            });

        }
    });


})();