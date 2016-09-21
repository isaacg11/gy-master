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
                    output.innerHTML = "<typed style='color:#000000'>micro-farm</typed>";
                }
            }
            HomeController.prototype.dropdown = function () {
                document.getElementById("myDropdown").classList.toggle("show");
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0F5Qlo7QUF6QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBeUJ4QjtJQXpCYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBT0Usd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEIsRUFDOUIsUUFBNEI7Z0JBRjVCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7Z0JBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO2dCQUV6RixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFNUI7b0JBQ0UsSUFBSSxNQUFNLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsaURBQWlELENBQUM7Z0JBQ3ZFLENBQUM7WUFDSCxDQUFDO1lBaEJNLGlDQUFRLEdBQWY7Z0JBQ0UsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLENBQUM7WUFlSCxxQkFBQztRQUFELENBQUMsQUFyQkQsSUFxQkM7UUFyQlksMEJBQWMsaUJBcUIxQixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxFQXpCYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUF5QnhCO0FBQUQsQ0FBQyxFQXpCUyxHQUFHLEtBQUgsR0FBRyxRQXlCWiJ9