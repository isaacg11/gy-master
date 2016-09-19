var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($) {
                $('[data-toggle="popover"]').popover({ html: true });
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQkEsSUFBVSxHQUFHLENBU1o7QUFURCxXQUFVLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0FTeEI7SUFUYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBRUUsd0JBQVksQ0FBQztnQkFDWCxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBQ0gscUJBQUM7UUFBRCxDQUFDLEFBTEQsSUFLQztRQUxZLDBCQUFjLGlCQUsxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxFQVRhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQVN4QjtBQUFELENBQUMsRUFUUyxHQUFHLEtBQUgsR0FBRyxRQVNaIn0=