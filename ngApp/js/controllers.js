var counter = 0;
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
                this.options = $sce.trustAsHtml("<a href='/app/false'>App</a> <br> <a href='/careers'>Careers</a>");
                $window.scrollTo(0, 0);
                $timeout(enter1, 1000);
                var fact1 = document.getElementById('index1');
                var fact2 = document.getElementById('index2');
                var fact3 = document.getElementById('index3');
                var fact4 = document.getElementById('index4');
                var fact5 = document.getElementById('index5');
                var fact6 = document.getElementById('index6');
                var fact7 = document.getElementById('index7');
                function enter1() {
                    fact7.className = 'hide';
                    fact1.className = 'animated fadeInLeft';
                    $timeout(leave1, 4000);
                }
                function leave1() {
                    fact1.className = 'animated fadeOutRight';
                    $timeout(enter2, 1200);
                }
                function enter2() {
                    fact1.className = 'hide';
                    fact2.className = 'animated fadeInLeft';
                    $timeout(leave2, 4000);
                }
                function leave2() {
                    fact2.className = 'animated fadeOutRight';
                    $timeout(enter3, 1200);
                }
                function enter3() {
                    fact2.className = 'hide';
                    fact3.className = 'animated fadeInLeft';
                    $timeout(leave3, 4000);
                }
                function leave3() {
                    fact3.className = 'animated fadeOutRight';
                    $timeout(enter4, 1200);
                }
                function enter4() {
                    fact3.className = 'hide';
                    fact4.className = 'animated fadeInLeft';
                    $timeout(leave4, 4000);
                }
                function leave4() {
                    fact4.className = 'animated fadeOutRight';
                    $timeout(enter5, 1200);
                }
                function enter5() {
                    fact4.className = 'hide';
                    fact5.className = 'animated fadeInLeft';
                    $timeout(leave5, 4000);
                }
                function leave5() {
                    fact5.className = 'animated fadeOutRight';
                    $timeout(enter6, 1200);
                }
                function enter6() {
                    fact5.className = 'hide';
                    fact6.className = 'animated fadeInLeft';
                    $timeout(leave6, 4000);
                }
                function leave6() {
                    fact6.className = 'animated fadeOutRight';
                    $timeout(enter7, 1200);
                }
                function enter7() {
                    fact6.className = 'hide';
                    fact7.className = 'animated fadeInLeft';
                    $timeout(leave7, 4000);
                }
                function leave7() {
                    fact7.className = 'animated fadeOutRight';
                    $timeout(enter1, 1200);
                }
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AppController = (function () {
            function AppController($sce, $window, $document, $stateParams) {
                this.$sce = $sce;
                this.$window = $window;
                this.$document = $document;
                this.$stateParams = $stateParams;
                this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/careers'>Careers</a>");
                console.log($stateParams);
                if ($stateParams["id"] === 'true') {
                    var el = angular.element(document.getElementById('plans'));
                    $document.scrollToElement(el);
                }
                else {
                    $window.scrollTo(0, 0);
                }
            }
            return AppController;
        }());
        Controllers.AppController = AppController;
        var CareerController = (function () {
            function CareerController($sce, $window, $timeout) {
                this.$sce = $sce;
                this.$window = $window;
                this.$timeout = $timeout;
                this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/app'>App</a>");
                $window.scrollTo(0, 0);
                this.step1Img = document.getElementById('step1Img');
                this.step1Txt = document.getElementById('step1Txt');
                this.step2Img = document.getElementById('step2Img');
                this.step2Txt = document.getElementById('step2Txt');
                this.step3Img = document.getElementById('step3Img');
                this.step3Txt = document.getElementById('step3Txt');
                this.step4Img = document.getElementById('step4Img');
                this.step4Txt = document.getElementById('step4Txt');
                this.step5Img = document.getElementById('step5Img');
                this.step5Txt = document.getElementById('step5Txt');
            }
            CareerController.prototype.slideRight = function () {
                counter = counter + 1;
                if (counter === 1) {
                    this.step1Img.className = 'animated flipOutY';
                    this.step1Txt.className = 'animated fadeOut';
                    this.$timeout(this.slideNext, 1000);
                }
                else if (counter === 2) {
                    this.step2Img.className = 'animated flipOutY';
                    this.step2Txt.className = 'animated fadeOut';
                    this.$timeout(this.slideNext, 1000);
                }
                else if (counter === 3) {
                    this.step3Img.className = 'animated flipOutY';
                    this.step3Txt.className = 'animated fadeOut';
                    this.$timeout(this.slideNext, 1000);
                }
                else if (counter === 4) {
                    this.step4Img.className = 'animated flipOutY';
                    this.step4Txt.className = 'animated fadeOut';
                    this.$timeout(this.slideNext, 1000);
                }
            };
            CareerController.prototype.slideLeft = function () {
                counter = counter - 1;
                if (counter === 0) {
                    this.step2Img.className = 'animated flipOutY';
                    this.step2Txt.className = 'animated fadeOut';
                    this.$timeout(this.slideBack, 1000);
                }
                else if (counter === 1) {
                    this.step3Img.className = 'animated flipOutY';
                    this.step3Txt.className = 'animated fadeOut';
                    this.$timeout(this.slideBack, 1000);
                }
                else if (counter === 2) {
                    this.step4Img.className = 'animated flipOutY';
                    this.step4Txt.className = 'animated fadeOut';
                    this.$timeout(this.slideBack, 1000);
                }
                else if (counter === 3) {
                    this.step5Img.className = 'animated flipOutY';
                    this.step5Txt.className = 'animated fadeOut';
                    this.$timeout(this.slideBack, 1000);
                }
            };
            CareerController.prototype.slideNext = function () {
                if (counter === 1) {
                    this.step1Img.className = 'hide';
                    this.step1Txt.className = 'hide';
                    this.step2Img.className = 'animated flipInY';
                    this.step2Txt.className = 'animated fadeIn';
                }
                else if (counter === 2) {
                    this.step2Img.className = 'hide';
                    this.step2Txt.className = 'hide';
                    this.step3Img.className = 'animated flipInY';
                    this.step3Txt.className = 'animated fadeIn';
                }
                else if (counter === 3) {
                    this.step3Img.className = 'hide';
                    this.step3Txt.className = 'hide';
                    this.step4Img.className = 'animated flipInY';
                    this.step4Txt.className = 'animated fadeIn';
                }
                else if (counter === 4) {
                    this.step4Img.className = 'hide';
                    this.step4Txt.className = 'hide';
                    this.step5Img.className = 'animated flipInY';
                    this.step5Txt.className = 'animated fadeIn';
                }
            };
            CareerController.prototype.slideBack = function () {
                if (counter === 0) {
                    this.step2Img.className = 'hide';
                    this.step2Txt.className = 'hide';
                    this.step1Img.className = 'animated flipInY';
                    this.step1Txt.className = 'animated fadeIn';
                }
                else if (counter === 1) {
                    this.step3Img.className = 'hide';
                    this.step3Txt.className = 'hide';
                    this.step2Img.className = 'animated flipInY';
                    this.step2Txt.className = 'animated fadeIn';
                }
                else if (counter === 2) {
                    this.step4Img.className = 'hide';
                    this.step4Txt.className = 'hide';
                    this.step3Img.className = 'animated flipInY';
                    this.step3Txt.className = 'animated fadeIn';
                }
                else if (counter === 3) {
                    this.step5Img.className = 'hide';
                    this.step5Txt.className = 'hide';
                    this.step4Img.className = 'animated flipInY';
                    this.step4Txt.className = 'animated fadeIn';
                }
            };
            return CareerController;
        }());
        Controllers.CareerController = CareerController;
        angular.module('app').controller('HomeController', HomeController);
        angular.module('app').controller('AppController', AppController);
        angular.module('app').controller('CareerController', CareerController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFaEIsSUFBVSxHQUFHLENBK1FaO0FBL1FELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQStReEI7SUEvUWEsV0FBQSxXQUFXLEVBQUMsQ0FBQztRQUd6QjtZQUdFLHdCQUNTLElBQW9CLEVBQ3BCLFNBQThCLEVBQzlCLFFBQTRCLEVBQzVCLE9BQTBCO2dCQUgxQixTQUFJLEdBQUosSUFBSSxDQUFnQjtnQkFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBcUI7Z0JBQzlCLGFBQVEsR0FBUixRQUFRLENBQW9CO2dCQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtnQkFFakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7Z0JBRXBHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUV2QixRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV2QixJQUFJLEtBQUssR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxLQUFLLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNELElBQUksS0FBSyxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLEtBQUssR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxLQUFLLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNELElBQUksS0FBSyxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dC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