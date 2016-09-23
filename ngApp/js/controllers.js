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
                $timeout(enter1, 1000);
                var fact1 = document.getElementById('index1');
                var fact2 = document.getElementById('index2');
                function enter1() {
                    fact1.className = 'animated slideInLeft';
                    $timeout(leave1, 4000);
                }
                function leave1() {
                    fact1.className = 'animated slideOutRight';
                    $timeout(enter2, 1200);
                }
                function enter2() {
                    fact2.className = 'animated slideInLeft';
                    $timeout(leave2, 4000);
                }
                function leave2() {
                    fact2.className = 'animated slideOutRight';
                    $timeout(enter1, 1200);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0E2RVo7QUE3RUQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBNkV4QjtJQTdFYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBR3pCO1lBS0Usd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEIsRUFDOUIsUUFBNEIsRUFDNUIsT0FBMEI7Z0JBSDFCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7Z0JBQzVCLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsNERBQTRELENBQUMsQ0FBQztnQkFFOUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRXZCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRXZCLElBQUksS0FBSyxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLEtBQUssR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFM0Q7b0JBQ0UsS0FBSyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztvQkFDekMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRDtvQkFDRSxLQUFLLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO29CQUMzQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUVEO29CQUNFLEtBQUssQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7b0JBQ3pDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQ7b0JBQ0UsS0FBSyxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztvQkFDM0MsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztZQUNILENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUF4Q0QsSUF3Q0M7UUF4Q1ksMEJBQWMsaUJBd0MxQixDQUFBO1FBR0Q7WUFHRSx1QkFDUyxJQUFvQixFQUNwQixPQUEwQjtnQkFEMUIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7Z0JBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsMERBQTBELENBQUMsQ0FBQztnQkFFNUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUNILG9CQUFDO1FBQUQsQ0FBQyxBQVhELElBV0M7UUFYWSx5QkFBYSxnQkFXekIsQ0FBQTtRQUdEO1lBR0UsMEJBQ1MsSUFBb0IsRUFDcEIsT0FBMEI7Z0JBRDFCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtnQkFFakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7Z0JBRXBGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7WUFDSCx1QkFBQztRQUFELENBQUMsQUFYRCxJQVdDO1FBWFksNEJBQWdCLG1CQVc1QixDQUFBO1FBR0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekUsQ0FBQyxFQTdFYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUE2RXhCO0FBQUQsQ0FBQyxFQTdFUyxHQUFHLEtBQUgsR0FBRyxRQTZFWiJ9