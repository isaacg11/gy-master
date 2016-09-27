'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap', 'duScroll', 'angular-typed'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    }).state('App', {
      url: '/app/:tag',
      templateUrl: '/templates/app.html',
      controller: app.Controllers.AppController,
      controllerAs: 'vm'
    }).state('Careers', {
      url: '/careers',
      templateUrl: '/templates/careers.html',
      controller: app.Controllers.CareerController,
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
