var counter = 0;
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($sce, $document, $timeout, $window, $stateParams, yardenService, toastr) {
                this.$sce = $sce;
                this.$document = $document;
                this.$timeout = $timeout;
                this.$window = $window;
                this.$stateParams = $stateParams;
                this.yardenService = yardenService;
                this.toastr = toastr;
                this.options = $sce.trustAsHtml("<a href='/app/v1'>App</a> <br> <a href='/careers/info'>Careers</a>");
                this.isActive = false;
                if ($stateParams["tag"] === 'signup') {
                    var el = angular.element(document.getElementById('signup'));
                    $document.scrollToElement(el);
                }
                else {
                    $window.scrollTo(0, 0);
                }
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
            HomeController.prototype.openNav = function () {
                var nav = document.getElementById("myNav");
                nav.style.width = "100%";
            };
            HomeController.prototype.closeNav = function () {
                var nav = document.getElementById("myNav");
                nav.style.width = "0%";
            };
            HomeController.prototype.drop = function () {
                this.isActive = !this.isActive;
                if (this.isActive === true) {
                    var menu = document.getElementById('menu');
                    menu.style.display = 'block';
                }
                else {
                    var menu = document.getElementById('menu');
                    menu.style.display = 'none';
                }
            };
            HomeController.prototype.submit = function () {
                var _this = this;
                var info = {
                    email: this.email,
                    subject: 'PING! Customer Signup!',
                    message: 'Congrats, ' + this.email + ' has been successfully added to the waiting list for Yarden (BETA). Hooray!'
                };
                this.yardenService.saveCustomer(info).then(function () {
                    _this.toastr.success('Success! You have been added to the list');
                    _this.yardenService.ping(info).then(function () {
                        _this.email = "";
                    });
                });
            };
            ;
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AppController = (function () {
            function AppController($sce, $window, $document, $stateParams) {
                this.$sce = $sce;
                this.$window = $window;
                this.$document = $document;
                this.$stateParams = $stateParams;
                this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/careers/info'>Careers</a>");
                this.isActive = false;
                if ($stateParams["tag"] === 'plans') {
                    var el = angular.element(document.getElementById('plans'));
                    $document.scrollToElement(el);
                }
                else {
                    $window.scrollTo(0, 0);
                }
            }
            AppController.prototype.drop = function () {
                this.isActive = !this.isActive;
                if (this.isActive === true) {
                    var menu = document.getElementById('menu');
                    menu.style.display = 'block';
                }
                else {
                    var menu = document.getElementById('menu');
                    menu.style.display = 'none';
                }
            };
            return AppController;
        }());
        Controllers.AppController = AppController;
        var CareerController = (function () {
            function CareerController($sce, $window, $timeout, yardenService, toastr) {
                this.$sce = $sce;
                this.$window = $window;
                this.$timeout = $timeout;
                this.yardenService = yardenService;
                this.toastr = toastr;
                this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/app/v1'>App</a>");
                this.isActive = false;
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
            CareerController.prototype.drop = function () {
                this.isActive = !this.isActive;
                if (this.isActive === true) {
                    var menu = document.getElementById('menu');
                    menu.style.display = 'block';
                }
                else {
                    var menu = document.getElementById('menu');
                    menu.style.display = 'none';
                }
            };
            CareerController.prototype.submit = function () {
                var _this = this;
                this.application.subject = 'PING! Employee Signup!';
                this.application.message = 'A new Yardener application has been successfully submitted by ' + this.application.email + ', oh yeah!';
                this.yardenService.saveApplication(this.application).then(function () {
                    _this.toastr.success('Success! Your application has been submitted');
                    _this.yardenService.ping(_this.application).then(function () {
                        _this.application.name = "";
                        _this.application.email = "";
                        _this.application.phone = "";
                        _this.application.address = "";
                        _this.application.cityStateZip = "";
                    });
                });
            };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFaEIsSUFBVSxHQUFHLENBNFdaO0FBNVdELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQTRXeEI7SUE1V2EsV0FBQSxXQUFXLEVBQUMsQ0FBQztRQUd6QjtZQXlDRSx3QkFDUyxJQUFvQixFQUNwQixTQUFTLEVBQ1QsUUFBNEIsRUFDNUIsT0FBMEIsRUFDMUIsWUFBdUMsRUFDdEMsYUFBeUMsRUFDMUMsTUFBTTtnQkFOTixTQUFJLEdBQUosSUFBSSxDQUFnQjtnQkFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBQTtnQkFDVCxhQUFRLEdBQVIsUUFBUSxDQUFvQjtnQkFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7Z0JBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFDdEMsa0JBQWEsR0FBYixhQUFhLENBQTRCO2dCQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFBO2dCQUViLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO2dCQUV0RyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFFdEIsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUM1RCxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUVE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