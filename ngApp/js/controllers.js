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
                this.myInterval = 1000;
                this.noWrapSlides = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0EwRVo7QUExRUQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBMEV4QjtJQTFFYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBR3pCO1lBUUUsd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEIsRUFDOUIsUUFBNEIsRUFDNUIsT0FBMEI7Z0JBSDFCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7Z0JBQzVCLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsNERBQTRELENBQUMsQ0FBQztnQkFFOUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBRWxCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzFCLFFBQVEsRUFBRSxDQUFDO2dCQUNiLENBQUM7Z0JBQUEsQ0FBQztnQkFFRjtvQkFDRSxJQUFJLFFBQVEsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ1YsS0FBSyxFQUFFLGdCQUFnQixHQUFHLFFBQVEsR0FBRyxNQUFNO3dCQUMzQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUMsb0JBQW9CLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQzVGLEVBQUUsRUFBRSxTQUFTLEVBQUU7cUJBQ2hCLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0gsQ0FBQztZQUNILHFCQUFDO1FBQUQsQ0FBQyxBQXJDRCxJQXFDQztRQXJDWSwwQkFBYyxpQkFxQzFCLENBQUE7UUFHRDtZQUdFLHVCQUNTLElBQW9CLEVBQ3BCLE9BQTBCO2dCQUQxQixTQUFJLEdBQUosSUFBSSxDQUFnQjtnQkFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7Z0JBRWpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO2dCQUU1RixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBQ0gsb0JBQUM7UUFBRCxDQUFDLEFBWEQsSUFXQztRQVhZLHlCQUFhLGdCQVd6QixDQUFBO1FBR0Q7WUFHRSwwQkFDUyxJQUFvQixFQUNwQixPQUEwQjtnQkFEMUIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7Z0JBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0RBQWtELENBQUMsQ0FBQztnQkFFcEYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUNILHVCQUFDO1FBQUQsQ0FBQyxBQVhELElBV0M7UUFYWSw0QkFBZ0IsbUJBVzVCLENBQUE7UUFHRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDakUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RSxDQUFDLEVBMUVhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQTBFeEI7QUFBRCxDQUFDLEVBMUVTLEdBQUcsS0FBSCxHQUFHLFFBMEVaIn0=