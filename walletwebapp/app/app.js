'use strict';

/**
 * @ngdoc overview
 * @name Wallet
 * @description
 * # Wallet
 *
 * Main module of the application.
 */

angular
  .module('Wallet', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('Config', {
    activeCurrency: 'GBP',
    listCurrency: ['GBP', 'EUR', 'USD']
  });
