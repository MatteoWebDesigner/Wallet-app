'use strict';

angular
	.module('Wallet')
	.controller('WalletCtrl', function ($scope) {
		$scope.balance = 0;
		$scope.addMoney = function (value) {
			this.balance += value;
			
		}
		$scope.removeMoney = function (value) {
			this.balance -= value;
		}
	});