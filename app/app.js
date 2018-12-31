(function () {

    var app = angular.module('app', [
        'ngRoute', 'ui.router', 'ngResource', 'ngSanitize', 'angularMoment', 'ngCookies', 'ngTouch'

    ]);

    app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {


            //initialize get if not there
            if (!$httpProvider.defaults.headers.get) {
                $httpProvider.defaults.headers.get = {};
            }
            //disable IE ajax request caching
            $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
            // extra
            $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
            $httpProvider.defaults.headers.get['Cache-Control'] = 'no-store'; //FF?
            $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
            $httpProvider.defaults.headers.get['Expired'] = '0'; //FF?

            $stateProvider

                .state('home', {
                    url: '/home',
                    templateUrl: 'app/components/home/home.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                })
            ;


            $urlRouterProvider.otherwise('home');
        }]);


    app.config(function () {
    });



})();
