'use strict';
var app;
(function (app) {
    angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap', 'duScroll', 'angular-typed', 'toaster', 'ngAnimate'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider.state('Home', {
            url: '/:tag',
            templateUrl: '/templates/home.html',
            controller: app.Controllers.HomeController,
            controllerAs: 'vm'
        }).state('App', {
            url: '/app/:tag',
            templateUrl: '/templates/app.html',
            controller: app.Controllers.AppController,
            controllerAs: 'vm'
        }).state('Careers', {
            url: '/careers/:tag',
            templateUrl: '/templates/careers.html',
            controller: app.Controllers.CareerController,
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsR0FBRyxDQTJCWjtBQTNCRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNwSCxNQUFNLENBQUMsVUFDUixjQUFvQyxFQUNwQyxpQkFBdUMsRUFDdkMsa0JBQTRDO1FBRTVDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzNCLEdBQUcsRUFBRSxPQUFPO1lBQ1osV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjO1lBQzFDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2QsR0FBRyxFQUFFLFdBQVc7WUFDaEIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxhQUFhO1lBQ3pDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2xCLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO1lBQzVDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLEVBM0JTLEdBQUcsS0FBSCxHQUFHLFFBMkJaIn0=