var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($sce, $document) {
                this.$sce = $sce;
                this.$document = $document;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0FvQlo7QUFwQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBb0J4QjtJQXBCYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBSUUsd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEI7Z0JBRDlCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFFckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7Z0JBRXpGLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRXpCO29CQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO2dCQUM3QixDQUFDO1lBQ0gsQ0FBQztZQUNILHFCQUFDO1FBQUQsQ0FBQyxBQWhCRCxJQWdCQztRQWhCWSwwQkFBYyxpQkFnQjFCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLEVBcEJhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQW9CeEI7QUFBRCxDQUFDLEVBcEJTLEdBQUcsS0FBSCxHQUFHLFFBb0JaIn0=