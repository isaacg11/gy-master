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
                this.myInterval = 5000;
                this.noWrapSlides = false;
                this.transition = false;
                this.active = 0;
                var slides = this.slides = [];
                var currIndex = 0;
                for (var i = 0; i < 4; i++) {
                    addSlide();
                }
                ;
                function addSlide() {
                    var newWidth = 600 + slides.length + 1;
                    slides.push({
                        image: '//unsplash.it/' + newWidth + '/300',
                        text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
                        id: currIndex++
                    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0E0RVo7QUE1RUQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBNEV4QjtJQTVFYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBR3pCO1lBU0Usd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEIsRUFDOUIsUUFBNEIsRUFDNUIsT0FBMEI7Z0JBSDFCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7Z0JBQzVCLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsNERBQTRELENBQUMsQ0FBQztnQkFFOUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUVsQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUMxQixRQUFRLEVBQUUsQ0FBQztnQkFDYixDQUFDO2dCQUFBLENBQUM7Z0JBRUY7b0JBQ0UsSUFBSSxRQUFRLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNWLEtBQUssRUFBRSxnQkFBZ0IsR0FBRyxRQUFRLEdBQUcsTUFBTTt3QkFDM0MsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFDLG9CQUFvQixFQUFDLGlCQUFpQixFQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUM1RixFQUFFLEVBQUUsU0FBUyxFQUFFO3FCQUNoQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUNILENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUF2Q0QsSUF1Q0M7UUF2Q1ksMEJBQWMsaUJBdUMxQixDQUFBO1FBR0Q7WUFHRSx1QkFDUyxJQUFvQixFQUNwQixPQUEwQjtnQkFEMUIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7Z0JBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsMERBQTBELENBQUMsQ0FBQztnQkFFNUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUNILG9CQUFDO1FBQUQsQ0FBQyxBQVhELElBV0M7UUFYWSx5QkFBYSxnQkFXekIsQ0FBQTtRQUdEO1lBR0UsMEJBQ1MsSUFBb0IsRUFDcEIsT0FBMEI7Z0JBRDFCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtnQkFFakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7Z0JBRXBGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7WUFDSCx1QkFBQztRQUFELENBQUMsQUFYRCxJQVdDO1FBWFksNEJBQWdCLG1CQVc1QixDQUFBO1FBR0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekUsQ0FBQyxFQTVFYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUE0RXhCO0FBQUQsQ0FBQyxFQTVFUyxHQUFHLEtBQUgsR0FBRyxRQTRFWiJ9