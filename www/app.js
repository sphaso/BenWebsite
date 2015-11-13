angular.module('benmantle', ['ui.router', 'home', 'writing', 'gallery', 'seneca', 'unlimited', 'links'])
    .config(['$provide', '$stateProvider', '$httpProvider', '$urlRouterProvider', function ($provide, $stateProvider, $httpProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', 'home');

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'HomeController'
          })
          .state('unlimited', {
            url: '/unlimited',
            templateUrl: 'unlimited/unlimited.html'
          })
          .state('seneca', {
            url: '/seneca',
            templateUrl: 'seneca/seneca.html',
            controller: 'SenecaController'
          })
          .state('links', {
            url: '/links',
            templateUrl: 'links/links.html',
            controller: 'LinksController'
        })
        .state('writing', {
            url: '/writing',
            templateUrl: 'writing/writing.html',
            controller: 'WritingController'
        })
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'gallery/gallery.html',
            controller: 'GalleryController'
        });

    }])
    .run(['$state', '$rootScope', function($state, $rootScope) {

    }]);
