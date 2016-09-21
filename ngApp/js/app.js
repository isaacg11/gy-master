'use strict';
var app;
(function (app) {
    angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap', 'duScroll', 'angular-typed'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: '/templates/home.html',
            controller: app.Controllers.HomeController,
            controllerAs: 'vm'
        }).state('App', {
            url: '/app',
            templateUrl: '/templates/app.html',
            controller: app.Controllers.HomeController,
            controllerAs: 'vm'
        }).state('Careers', {
            url: '/careers',
            templateUrl: '/templates/careers.html',
            controller: app.Controllers.HomeController,
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsR0FBRyxDQTJCWjtBQTNCRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDNUYsTUFBTSxDQUFDLFVBQ1IsY0FBb0MsRUFDcEMsaUJBQXVDLEVBQ3ZDLGtCQUE0QztRQUU1QyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUMzQixHQUFHLEVBQUUsR0FBRztZQUNSLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYztZQUMxQyxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNkLEdBQUcsRUFBRSxNQUFNO1lBQ1gsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjO1lBQzFDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2xCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjO1lBQzFDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLEVBM0JTLEdBQUcsS0FBSCxHQUFHLFFBMkJaIn0=