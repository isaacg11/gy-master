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
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AppController = (function () {
            function AppController($sce) {
                this.$sce = $sce;
                this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/careers'>Careers</a>");
            }
            return AppController;
        }());
        Controllers.AppController = AppController;
        var CareerController = (function () {
            function CareerController($sce) {
                this.$sce = $sce;
                this.options = $sce.trustAsHtml("<a href='/app'>App</a> <br> <a href='/'>Home</a>");
            }
            return CareerController;
        }());
        Controllers.CareerController = CareerController;
        angular.module('app').controller('HomeController', HomeController);
        angular.module('app').controller('AppController', AppController);
        angular.module('app').controller('CareerController', CareerController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0FpRFo7QUFqREQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBaUR4QjtJQWpEYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBR3pCO1lBSUUsd0JBQ1MsSUFBb0IsRUFDcEIsU0FBOEIsRUFDOUIsUUFBNEI7Z0JBRjVCLFNBQUksR0FBSixJQUFJLENBQWdCO2dCQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7Z0JBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1lBUWhHLENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUFsQkQsSUFrQkM7UUFsQlksMEJBQWMsaUJBa0IxQixDQUFBO1FBR0Q7WUFHRSx1QkFDUyxJQUFvQjtnQkFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7Z0JBRTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1lBQzlGLENBQUM7WUFDSCxvQkFBQztRQUFELENBQUMsQUFSRCxJQVFDO1FBUlkseUJBQWEsZ0JBUXpCLENBQUE7UUFHRDtZQUdFLDBCQUNTLElBQW9CO2dCQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtnQkFFM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7WUFDdEYsQ0FBQztZQUNILHVCQUFDO1FBQUQsQ0FBQyxBQVJELElBUUM7UUFSWSw0QkFBZ0IsbUJBUTVCLENBQUE7UUFHRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDakUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RSxDQUFDLEVBakRhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQWlEeEI7QUFBRCxDQUFDLEVBakRTLEdBQUcsS0FBSCxHQUFHLFFBaURaIn0=