var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($sce, $document, $timeout) {
                this.$sce = $sce;
                this.$document = $document;
                this.$timeout = $timeout;
                this.options = $sce.trustAsHtml("<a href='#'>Services</a> <br> <a href='#'>Careers</a>");
                this.$timeout(garden, 1500);
                function garden() {
                    var output = document.getElementById('output');
                    output.innerHTML = 'micro-farm';
                }
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0FzQlo7QUF0QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBc0J4QjtJQXRCYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBSUUsd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEIsRUFDOUIsUUFBNEI7Z0JBRjVCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7Z0JBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO2dCQUV6RixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFNUI7b0JBQ0UsSUFBSSxNQUFNLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO2dCQUNsQyxDQUFDO1lBQ0gsQ0FBQztZQUNILHFCQUFDO1FBQUQsQ0FBQyxBQWxCRCxJQWtCQztRQWxCWSwwQkFBYyxpQkFrQjFCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLEVBdEJhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQXNCeEI7QUFBRCxDQUFDLEVBdEJTLEdBQUcsS0FBSCxHQUFHLFFBc0JaIn0=