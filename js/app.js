(function (){
	var app = angular.module('envs', []);

/*	app.controller('EnvsController', function(){
		this.servers = data;
	});*/

	

	app.controller('EnvsController', ['$scope', '$http', function($scope, $http) {
		$http.get('json/store.json').success(function(data) {
			$scope.servers = data;
		});		
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


})();