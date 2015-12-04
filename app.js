var routerApp = angular.module('localSaver', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('main', {
      url: '/home',
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    });
});
