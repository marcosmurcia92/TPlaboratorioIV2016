angular
	.module('app')

	.directive('modalEncuesta', function(){

		function encuestaCtrl($scope){
			$scope.miEncuesta = {};

			//$scope.rate = 0;
			$scope.max = 5;
			$scope.isReadonly = false;

			$scope.hoveringOver = function(value) {
			  $scope.overStar = value;
			  $scope.percent = 100 * (value / $scope.max);
			};
		}

		return {
			scope: {miPedido: '=pedidoporparametro', registerparent: '&'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalEncuesta.html',
			controller: encuestaCtrl
		};

	})
