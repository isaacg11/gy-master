var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($sce, $document) {
                this.$sce = $sce;
                this.$document = $document;
                this.options = $sce.trustAsHtml("<a href='#'>Services</a> <br> <a href='#'>Careers</a>");
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0FhWjtBQWJELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQWF4QjtJQWJhLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDekI7WUFHRSx3QkFDUyxJQUFvQixFQUNwQixTQUE4QjtnQkFEOUIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7Z0JBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQXFCO2dCQUVyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsdURBQXVELENBQUMsQ0FBQztZQUMzRixDQUFDO1lBQ0gscUJBQUM7UUFBRCxDQUFDLEFBVEQsSUFTQztRQVRZLDBCQUFjLGlCQVMxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxFQWJhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQWF4QjtBQUFELENBQUMsRUFiUyxHQUFHLEtBQUgsR0FBRyxRQWFaIn0=