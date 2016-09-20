var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($sce) {
                this.options = $sce.trustAsHtml("<a href='#'>Services</a> <br> <a href='#'>Careers</a>");
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0FZWjtBQVpELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQVl4QjtJQVphLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDekI7WUFHRSx3QkFDRSxJQUFvQjtnQkFFcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7WUFDM0YsQ0FBQztZQUNILHFCQUFDO1FBQUQsQ0FBQyxBQVJELElBUUM7UUFSWSwwQkFBYyxpQkFRMUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUFaYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFZeEI7QUFBRCxDQUFDLEVBWlMsR0FBRyxLQUFILEdBQUcsUUFZWiJ9