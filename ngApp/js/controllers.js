var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($sce, $document) {
                this.$sce = $sce;
                this.$document = $document;
                this.output = "garden";
                this.options = $sce.trustAsHtml("<a href='#'>Services</a> <br> <a href='#'>Careers</a>");
                setTimeout(garden, 1500);
                function garden() {
                    this.output = "micro-farm";
                }
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0FxQlo7QUFyQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBcUJ4QjtJQXJCYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBSUUsd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEI7Z0JBRDlCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO2dCQUV6RixVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV6QjtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztnQkFDN0IsQ0FBQztZQUNILENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUFqQkQsSUFpQkM7UUFqQlksMEJBQWMsaUJBaUIxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxFQXJCYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFxQnhCO0FBQUQsQ0FBQyxFQXJCUyxHQUFHLEtBQUgsR0FBRyxRQXFCWiJ9