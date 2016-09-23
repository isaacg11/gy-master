var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($sce, $document, $timeout, $window) {
                this.$sce = $sce;
                this.$document = $document;
                this.$timeout = $timeout;
                this.$window = $window;
                this.options = $sce.trustAsHtml("<a href='/app'>App</a> <br> <a href='/careers'>Careers</a>");
                $window.scrollTo(0, 0);
                $timeout(enter, 1000);
                var fact = document.getElementById('indexOne');
                function enter() {
                    fact.className = 'animated slideInLeft';
                    fact.innerHTML = '<p>America lawns take up 3X as much space as irrigated corn.</p>';
                    $timeout(leave, 4000);
                }
                function leave() {
                    fact.className = 'animated slideOutRight';
                    $timeout(enter, 1200);
                }
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AppController = (function () {
            function AppController($sce, $window) {
                this.$sce = $sce;
                this.$window = $window;
                this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/careers'>Careers</a>");
                $window.scrollTo(0, 0);
            }
            return AppController;
        }());
        Controllers.AppController = AppController;
        var CareerController = (function () {
            function CareerController($sce, $window) {
                this.$sce = $sce;
                this.$window = $window;
                this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/app'>App</a>");
                $window.scrollTo(0, 0);
            }
            return CareerController;
        }());
        Controllers.CareerController = CareerController;
        angular.module('app').controller('HomeController', HomeController);
        angular.module('app').controller('AppController', AppController);
        angular.module('app').controller('CareerController', CareerController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0FtRVo7QUFuRUQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBbUV4QjtJQW5FYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBR3pCO1lBS0Usd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEIsRUFDOUIsUUFBNEIsRUFDNUIsT0FBMEI7Z0JBSDFCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7Z0JBQzVCLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsNERBQTRELENBQUMsQ0FBQztnQkFFOUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRXZCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRXRCLElBQUksSUFBSSxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUU1RDtvQkFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO29CQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLGtFQUFrRSxDQUFDO29CQUNwRixRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUVEO29CQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLENBQUM7b0JBQzFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7WUFDSCxDQUFDO1lBQ0gscUJBQUM7UUFBRCxDQUFDLEFBOUJELElBOEJDO1FBOUJZLDBCQUFjLGlCQThCMUIsQ0FBQTtRQUdEO1lBR0UsdUJBQ1MsSUFBb0IsRUFDcEIsT0FBMEI7Z0JBRDFCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtnQkFFakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7Z0JBRTVGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7WUFDSCxvQkFBQztRQUFELENBQUMsQUFYRCxJQVdDO1FBWFkseUJBQWEsZ0JBV3pCLENBQUE7UUFHRDtZQUdFLDBCQUNTLElBQW9CLEVBQ3BCLE9BQTBCO2dCQUQxQixTQUFJLEdBQUosSUFBSSxDQUFnQjtnQkFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7Z0JBRWpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO2dCQUVwRixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBQ0gsdUJBQUM7UUFBRCxDQUFDLEFBWEQsSUFXQztRQVhZLDRCQUFnQixtQkFXNUIsQ0FBQTtRQUdELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNqRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pFLENBQUMsRUFuRWEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBbUV4QjtBQUFELENBQUMsRUFuRVMsR0FBRyxLQUFILEdBQUcsUUFtRVoifQ==