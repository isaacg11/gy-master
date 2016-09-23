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
                var counter = 0;
                var slides = [
                    "<p className='animated slideInLeft'>There's 40 million acres of lawns in the lower 48 states.</p>",
                    "<p>America lawns take up 3X as much space as irrigated corn.</p>"
                ];
                var fact = document.getElementById('output');
                for (var i = 0; i < slides.length; i++) {
                    if (i === 0) {
                        $timeout(enter, 1000);
                    }
                    else {
                        counter = i + 1;
                        $timeout(enter, 1000);
                    }
                }
                function enter() {
                    fact.innerHTML = slides[counter];
                    $timeout(leave, 5000);
                }
                function leave() {
                    fact.className = 'animated slideOutRight';
                    $timeout(enter, 2000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0E2RVo7QUE3RUQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBNkV4QjtJQTdFYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBR3pCO1lBS0Usd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEIsRUFDOUIsUUFBNEIsRUFDNUIsT0FBMEI7Z0JBSDFCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7Z0JBQzVCLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsNERBQTRELENBQUMsQ0FBQztnQkFFOUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxNQUFNLEdBQUc7b0JBQ1gsbUdBQW1HO29CQUNuRyxrRUFBa0U7aUJBQ25FLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTFELEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUN0QyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQixRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDO2dCQUNILENBQUM7Z0JBRUQ7b0JBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQ7b0JBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztvQkFDMUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztZQUNILENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUF4Q0QsSUF3Q0M7UUF4Q1ksMEJBQWMsaUJBd0MxQixDQUFBO1FBR0Q7WUFHRSx1QkFDUyxJQUFvQixFQUNwQixPQUEwQjtnQkFEMUIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7Z0JBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsMERBQTBELENBQUMsQ0FBQztnQkFFNUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUNILG9CQUFDO1FBQUQsQ0FBQyxBQVhELElBV0M7UUFYWSx5QkFBYSxnQkFXekIsQ0FBQTtRQUdEO1lBR0UsMEJBQ1MsSUFBb0IsRUFDcEIsT0FBMEI7Z0JBRDFCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtnQkFFakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7Z0JBRXBGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7WUFDSCx1QkFBQztRQUFELENBQUMsQUFYRCxJQVdDO1FBWFksNEJBQWdCLG1CQVc1QixDQUFBO1FBR0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekUsQ0FBQyxFQTdFYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUE2RXhCO0FBQUQsQ0FBQyxFQTdFUyxHQUFHLEtBQUgsR0FBRyxRQTZFWiJ9