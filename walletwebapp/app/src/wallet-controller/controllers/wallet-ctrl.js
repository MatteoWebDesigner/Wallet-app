'use strict';

angular
	.module('Wallet')
	.controller('WalletCtrl', function ($scope, $rootScope) {
		$scope.balance = 0;
		$scope.addMoney = function (value) {
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
				alert('No money, no party :)');
				return false;
			}

			this.balance -= value;

			$scope.$parent.$broadcast('transitionMoneyOut', function () { 
					return {
						amout : value,
						date : Date.now()
					}
				}
			);
		}
	});