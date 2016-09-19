var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($window, JQuery) {
                var j = $window.jQuery;
                j('[data-toggle="popover"]').popover({ html: true });
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQkEsSUFBVSxHQUFHLENBVVo7QUFWRCxXQUFVLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0FVeEI7SUFWYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBRUUsd0JBQVksT0FBTyxFQUFFLE1BQU07Z0JBQ3pCLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUFORCxJQU1DO1FBTlksMEJBQWMsaUJBTTFCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLEVBVmEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBVXhCO0FBQUQsQ0FBQyxFQVZTLEdBQUcsS0FBSCxHQUFHLFFBVVoifQ==