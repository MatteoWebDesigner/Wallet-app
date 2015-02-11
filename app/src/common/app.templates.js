angular.module('Wallet').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/src/transitions-list/views/transition-list.html',
    "<div class=row><div class=col-md-6><h3>Money In</h3><ul><li ng-hide=moneyInfo.model.MoneyIn.length>no transaction</li><li ng-repeat=\"transation in moneyInfo.model.MoneyIn\"><strong>{{ transation.amout | currency:transation.currency }}</strong> - {{ transation.date | date:'medium' }}</li></ul></div><div class=col-md-6><h3>Money Out</h3><ul><li ng-hide=moneyInfo.model.MoneyOut.length>no transaction</li><li ng-repeat=\"transation in moneyInfo.model.MoneyOut\"><strong>{{ transation.amout | currency:transation.currency }}</strong> - {{ transation.date | date:'medium' }}</li></ul></div></div>"
  );


  $templateCache.put('/src/wallet-controller/views/wallet-controller.html',
    "<div><select ng-model=Config.activeCurrency ng-options=\"currency for currency in Config.listCurrency\"></select><h2>Balance: <span ng-bind-html=\"moneyInfo.model.Balance | awesomeCurrency:Config.activeCurrency\"></span></h2><form name=walletController novalidate><input type=number placeholder=\"Add or remove money\" ng-model=amount ng-pattern=\"/^[1-9][0-9]*$/\" required> <button ng-click=\"walletController.$valid && addMoney(amount)\">Add</button> <button ng-click=\"walletController.$valid && removeMoney(amount)\">Remove</button></form></div>"
  );

}]);
