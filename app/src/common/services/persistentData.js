'use strict';

angular
    .module('Wallet')
    .factory('PersistentDataMoneyFactory', ['$rootScope', function ($rootScope) {
        var service = {
            model: {
                MoneyIn : [],
                MoneyOut : [],
                Balance : 0
            },

            SaveState: function () {
                localStorage.MoneyInfo = angular.toJson(service.model);
            },

            RestoreState: function () {
                if (localStorage.MoneyInfo !== undefined) {
                    service.model = angular.fromJson(localStorage.MoneyInfo);
                }
            },
            ClearState: function () {
                service.model = {
                    MoneyIn : [],
                    MoneyOut : [],
                    Balance : 0
                }

                localStorage.clear();
            }
        }

        $rootScope.$on("savestate", service.SaveState);
        $rootScope.$on("restorestate", service.RestoreState);

        return service;
}]);