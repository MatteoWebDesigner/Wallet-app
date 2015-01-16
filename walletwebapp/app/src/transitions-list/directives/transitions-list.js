angular
	.module('Wallet')
	.directive('transationsList', function(){
		return {
			restrict: 'E',
			templateUrl: '/src/transitions-list/views/transition-list.html',
			controller: 'TransitionCtrl'
		}
	});