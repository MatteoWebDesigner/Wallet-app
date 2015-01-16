'use strict';

angular
	.module('Wallet')
	.controller('WalletCtrl', ['$log', '$scope', '$rootScope', function ($log, $scope, $rootScope) {
		$scope.balance = 0;
		$scope.addMoney = function (value) {
			$log.debug('add this amount ' + value + ' in my wallet');

			this.balance += value;
			
			$scope.$parent.$broadcast('transitionMoneyIn', function () { 
					return {
						amout : value,
						date : Date.now()
					}
				}
			);
		}
		$scope.removeMoney = function (value) {
			if (this.balance < value) {
				$log.debug('this amount ' + value + ' is greater than the balance ' + this.balance);

				alert('No money, no party :)');
				return false;
			}
			$log.debug('remove this amount ' + value + ' in my wallet');

			this.balance -= value;

			$scope.$parent.$broadcast('transitionMoneyOut', function () { 
					return {
						amout : value,
						date : Date.now()
					}
				}
			);
		}
	}]);