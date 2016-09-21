var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($sce, $document, $timeout) {
                this.$sce = $sce;
                this.$document = $document;
                this.$timeout = $timeout;
                this.options = $sce.trustAsHtml("<a href='/app'>App</a> <br> <a href='/careers'>Careers</a>");
                this.$timeout(garden, 1500);
                function garden() {
                    var output = document.getElementById('output');
                    output.innerHTML = "<typed style='color:#000000'>micro-farm</typed>";
                }
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0FzQlo7QUF0QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBc0J4QjtJQXRCYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBSUUsd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEIsRUFDOUIsUUFBNEI7Z0JBRjVCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7Z0JBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO2dCQUU5RixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFNUI7b0JBQ0UsSUFBSSxNQUFNLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsaURBQWlELENBQUM7Z0JBQ3ZFLENBQUM7WUFDSCxDQUFDO1lBQ0gscUJBQUM7UUFBRCxDQUFDLEFBbEJELElBa0JDO1FBbEJZLDBCQUFjLGlCQWtCMUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUF0QmEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBc0J4QjtBQUFELENBQUMsRUF0QlMsR0FBRyxLQUFILEdBQUcsUUFzQloifQ==