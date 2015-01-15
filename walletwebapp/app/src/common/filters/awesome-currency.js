'use strict';

angular
	.module('Wallet')
	.filter('awesomeCurrency', ['$filter', '$locale', 
    function($filter, $locale) {
        return function (amount, symbol, fractionSize) {
            return $filter('currency')(amount, '<span class="fa '+ symbol +'"></span>');
        };
    }
]);