var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(JQuery) {
                JQuery('[data-toggle="popover"]').popover({ html: true });
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQkEsSUFBVSxHQUFHLENBU1o7QUFURCxXQUFVLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0FTeEI7SUFUYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBRUUsd0JBQVksTUFBTTtnQkFDaEIsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUNILHFCQUFDO1FBQUQsQ0FBQyxBQUxELElBS0M7UUFMWSwwQkFBYyxpQkFLMUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUFUYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFTeEI7QUFBRCxDQUFDLEVBVFMsR0FBRyxLQUFILEdBQUcsUUFTWiJ9