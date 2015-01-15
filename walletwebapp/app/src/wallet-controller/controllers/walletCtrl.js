'use strict';

angular
	.module('Wallet')
	.controller('WalletCntr', function ($scope) {
		$scope.balance = null;
		$scope.addMoney = function (value) {
			$scope.balance += value;
		}
		$scope.removeMoney = function (value) {
			$scope.balance -= value;
		}
	});