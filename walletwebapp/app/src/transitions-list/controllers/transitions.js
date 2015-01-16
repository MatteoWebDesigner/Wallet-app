angular
	.module('Wallet')
	.controller('TransitionCtrl', ['$scope', function ($scope) {
		$scope.transitionsMoneyIn = [];
		$scope.transitionsMoneyOut = [];

		$scope.$on('transitionMoneyIn', function($obj, callback){
			$obj.currentScope.transitionsMoneyIn.push(callback());
		})
		$scope.$on('transitionMoneyOut', function($obj, callback){
			$obj.currentScope.transitionsMoneyOut.push(callback());
		})
	}]);