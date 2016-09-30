// globals
let counter = 0;

namespace app.Controllers {

  // home
  export class HomeController {
    public options;
    public email;
    public isActive;

    public openNav() {
      let nav = <HTMLElement>document.getElementById("myNav");
      nav.style.width = "100%";
    }

    public closeNav() {
      let nav = <HTMLElement>document.getElementById("myNav");
      nav.style.width = "0%";
    }

    public drop() {
      this.isActive = !this.isActive;
      if(this.isActive === true) {
        let menu = <HTMLElement>document.getElementById('menu');
        menu.style.display = 'block';
      } else {
        let menu = <HTMLElement>document.getElementById('menu');
        menu.style.display = 'none';
      }
    }

    public submit() {
      let info = {
        email: this.email,
        subject: 'PING! Customer Signup!',
        message: 'Congrats, ' + this.email + ' has been successfully added to the waiting list for Yarden (BETA). Hooray!'
      };

      this.yardenService.saveCustomer(info).then(() => {
        this.toastr.success('Success! You have been added to the list');
        this.yardenService.ping(info).then(() => {
          this.email = "";
        })
      })
    };

    constructor(
      public $sce: ng.ISCEService,
      public $document,
      public $timeout: ng.ITimeoutService,
      public $window: ng.IWindowService,
      public $stateParams: ng.ui.IStateParamsService,
      private yardenService: app.Services.YardenService,
      public toastr
    ) {
      this.options = $sce.trustAsHtml("<a href='/app/v1'>App</a> <br> <a href='/careers/info'>Careers</a>");

      this.isActive = false;

      if($stateParams["tag"] === 'signup') {
        let el = angular.element(document.getElementById('signup'));
        $document.scrollToElement(el);
      } else {
        $window.scrollTo(0, 0);
      }

      $timeout(enter1, 1000);

      let fact1 = <HTMLElement>document.getElementById('index1');
      let fact2 = <HTMLElement>document.getElementById('index2');
      let fact3 = <HTMLElement>document.getElementById('index3');
      let fact4 = <HTMLElement>document.getElementById('index4');
      let fact5 = <HTMLElement>document.getElementById('index5');
      let fact6 = <HTMLElement>document.getElementById('index6');
      let fact7 = <HTMLElement>document.getElementById('index7');

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
  }

  // app
  export class AppController {
    public options;
    public isActive;

    public drop() {
      this.isActive = !this.isActive;
      if(this.isActive === true) {
        let menu = <HTMLElement>document.getElementById('menu');
        menu.style.display = 'block';
      } else {
        let menu = <HTMLElement>document.getElementById('menu');
        menu.style.display = 'none';
      }
    }

    constructor(
      public $sce: ng.ISCEService,
      public $window: ng.IWindowService,
      public $document,
      public $stateParams: ng.ui.IStateParamsService
    ) {
      this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/careers/info'>Careers</a>");

      this.isActive = false;

      if($stateParams["tag"] === 'plans') {
        let el = angular.element(document.getElementById('plans'));
        $document.scrollToElement(el);
      } else {
        $window.scrollTo(0, 0);
      }
    }
  }

  // careers
  export class CareerController {
    public options;
    public application;
    public step1Img;
    public step1Txt;
    public step2Img;
    public step2Txt;
    public step3Img;
    public step3Txt;
    public step4Img;
    public step4Txt;
    public step5Img;
    public step5Txt;
    public isActive;

    public drop() {
      this.isActive = !this.isActive;
      if(this.isActive === true) {
        let menu = <HTMLElement>document.getElementById('menu');
        menu.style.display = 'block';
      } else {
        let menu = <HTMLElement>document.getElementById('menu');
        menu.style.display = 'none';
      }
    }

    public submit() {
      this.application.subject = 'PING! Employee Signup!';
      this.application.message = 'A new Yardener application has been successfully submitted by ' + this.application.email + ', oh yeah!';

      this.yardenService.saveApplication(this.application).then(() => {
        this.toastr.success('Success! Your application has been submitted');
        this.yardenService.ping(this.application).then(() => {
          this.application.name = "";
          this.application.email = "";
          this.application.phone = "";
          this.application.address = "";
          this.application.cityStateZip = "";
        })
      })
    }

    public slideRight() {
      counter = counter + 1;

      if(counter === 1) {
        this.step1Img.className = 'animated flipOutY';
        this.step1Txt.className = 'animated fadeOut';
        this.$timeout(this.slideNext, 1000);
      }
      else if(counter === 2) {
        this.step2Img.className = 'animated flipOutY';
        this.step2Txt.className = 'animated fadeOut';
        this.$timeout(this.slideNext, 1000);
      }
      else if(counter === 3) {
        this.step3Img.className = 'animated flipOutY';
        this.step3Txt.className = 'animated fadeOut';
        this.$timeout(this.slideNext, 1000);
      }
      else if(counter === 4) {
        this.step4Img.className = 'animated flipOutY';
        this.step4Txt.className = 'animated fadeOut';
        this.$timeout(this.slideNext, 1000);
      }
    }

    public slideLeft() {
      counter = counter - 1;
      if(counter === 0) {
        this.step2Img.className = 'animated flipOutY';
        this.step2Txt.className = 'animated fadeOut';
        this.$timeout(this.slideBack, 1000);
      }
      else if(counter === 1) {
        this.step3Img.className = 'animated flipOutY';
        this.step3Txt.className = 'animated fadeOut';
        this.$timeout(this.slideBack, 1000);
      }
      else if(counter === 2) {
        this.step4Img.className = 'animated flipOutY';
        this.step4Txt.className = 'animated fadeOut';
        this.$timeout(this.slideBack, 1000);
      }
      else if(counter === 3) {
        this.step5Img.className = 'animated flipOutY';
        this.step5Txt.className = 'animated fadeOut';
        this.$timeout(this.slideBack, 1000);
      }
    }

    public slideNext() {
      if(counter === 1) {
        this.step1Img.className = 'hide';
        this.step1Txt.className = 'hide';
        this.step2Img.className = 'animated flipInY';
        this.step2Txt.className = 'animated fadeIn';
      }
      else if(counter === 2) {
        this.step2Img.className = 'hide';
        this.step2Txt.className = 'hide';
        this.step3Img.className = 'animated flipInY';
        this.step3Txt.className = 'animated fadeIn';
      }
      else if(counter === 3) {
        this.step3Img.className = 'hide';
        this.step3Txt.className = 'hide';
        this.step4Img.className = 'animated flipInY';
        this.step4Txt.className = 'animated fadeIn';
      }
      else if(counter === 4) {
        this.step4Img.className = 'hide';
        this.step4Txt.className = 'hide';
        this.step5Img.className = 'animated flipInY';
        this.step5Txt.className = 'animated fadeIn';
      }
    }

    public slideBack() {
      if(counter === 0) {
        this.step2Img.className = 'hide';
        this.step2Txt.className = 'hide';
        this.step1Img.className = 'animated flipInY';
        this.step1Txt.className = 'animated fadeIn';
      }
      else if(counter === 1) {
        this.step3Img.className = 'hide';
        this.step3Txt.className = 'hide';
        this.step2Img.className = 'animated flipInY';
        this.step2Txt.className = 'animated fadeIn';
      }
      else if(counter === 2) {
        this.step4Img.className = 'hide';
        this.step4Txt.className = 'hide';
        this.step3Img.className = 'animated flipInY';
        this.step3Txt.className = 'animated fadeIn';
      }
      else if(counter === 3) {
        this.step5Img.className = 'hide';
        this.step5Txt.className = 'hide';
        this.step4Img.className = 'animated flipInY';
        this.step4Txt.className = 'animated fadeIn';
      }
    }

    constructor(
      public $sce: ng.ISCEService,
      public $window: ng.IWindowService,
      public $timeout: ng.ITimeoutService,
      private yardenService: app.Services.YardenService,
      public toastr
    ) {
      this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/app/v1'>App</a>");

      this.isActive = false;

      $window.scrollTo(0, 0);

      this.step1Img = <HTMLElement>document.getElementById('step1Img');
      this.step1Txt = <HTMLElement>document.getElementById('step1Txt');
      this.step2Img = <HTMLElement>document.getElementById('step2Img');
      this.step2Txt = <HTMLElement>document.getElementById('step2Txt');
      this.step3Img = <HTMLElement>document.getElementById('step3Img');
      this.step3Txt = <HTMLElement>document.getElementById('step3Txt');
      this.step4Img = <HTMLElement>document.getElementById('step4Img');
      this.step4Txt = <HTMLElement>document.getElementById('step4Txt');
      this.step5Img = <HTMLElement>document.getElementById('step5Img');
      this.step5Txt = <HTMLElement>document.getElementById('step5Txt');
    }
  }


  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('AppController', AppController);
  angular.module('app').controller('CareerController', CareerController);
}
