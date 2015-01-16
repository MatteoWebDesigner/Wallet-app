angular
	.module('Wallet')
	.directive('walletController', function(){
		return {
			restrict: 'E',
			templateUrl: 'src/wallet-controller/views/wallet-controller.html',
			controller: 'WalletCtrl'
		}
	});