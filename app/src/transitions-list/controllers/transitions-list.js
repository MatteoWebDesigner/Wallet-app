angular
	.module('Wallet')
	.controller('TransitionCtrl', ['$scope' , 'Config', 'PersistentDataMoneyFactory', function ($scope, Config, PersistentDataMoneyFactory) {
		$scope.moneyInfo = PersistentDataMoneyFactory;

		$scope.$on('transitionMoneyIn', function($obj, callback){
			$obj.currentScope.moneyInfo.model.MoneyIn.push(callback());

			// save on localstorage
			PersistentDataMoneyFactory.SaveState();
		})

		$scope.$on('transitionMoneyOut', function($obj, callback){
			$obj.currentScope.moneyInfo.model.MoneyOut.push(callback());
			
			// save on localstorage
			PersistentDataMoneyFactory.SaveState();
		})
	}]);