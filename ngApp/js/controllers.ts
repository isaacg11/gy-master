
namespace app.Controllers {

  // home
  export class HomeController {
    public options;

    constructor(
      public $sce: ng.ISCEService,
      public $document: ng.IDocumentService,
      public $timeout: ng.ITimeoutService,
      public $window: ng.IWindowService
    ) {
      this.options = $sce.trustAsHtml("<a href='/app'>App</a> <br> <a href='/careers'>Careers</a>");

      $window.scrollTo(0, 0);

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

    constructor(
      public $sce: ng.ISCEService,
      public $window: ng.IWindowService
    ) {
      this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/careers'>Careers</a>");

      $window.scrollTo(0, 0);
    }
  }

  // careers
  export class CareerController {
    public options;
    public counter;
    public step1Img;
    public step1Txt;
    public step2Img;
    public step2Txt;
    public step3Img;
    public step3Txt;

    public slideRight() {
      this.counter = this.counter + 1;

      if(this.counter === 1) {
        this.step1Img.className = 'animated flipOutY';
        this.step1Txt.className = 'animated fadeOut';
        this.$timeout(this.slideNext, 1000);
      }
      else if(this.counter === 2) {
        this.step2Img.className = 'animated flipOutY';
        this.step2Txt.className = 'animated fadeOut';
        this.$timeout(this.slideNext, 1000);
      }
    }

    public slideNext() {
      if(this.counter === 1) {
        this.step1Img.className = 'hide';
        this.step1Txt.className = 'hide';
        this.step2Img.className = 'animated flipInY';
        this.step2Txt.className = 'animated fadeIn';
      }
      else if(this.counter === 2) {
        this.step2Img.className = 'hide';
        this.step2Txt.className = 'hide';
        this.step3Img.className = 'animated flipInY';
        this.step3Txt.className = 'animated fadeIn';
      }

    }

    constructor(
      public $sce: ng.ISCEService,
      public $window: ng.IWindowService,
      public $timeout: ng.ITimeoutService
    ) {
      this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/app'>App</a>");

      $window.scrollTo(0, 0);

      this.counter = 0;

      this.step1Img = <HTMLElement>document.getElementById('step1Img');
      this.step1Txt = <HTMLElement>document.getElementById('step1Txt');
      this.step2Img = <HTMLElement>document.getElementById('step1Img');
      this.step2Txt = <HTMLElement>document.getElementById('step2Txt');
      this.step3Img = <HTMLElement>document.getElementById('step3Img');

    }
  }


  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('AppController', AppController);
  angular.module('app').controller('CareerController', CareerController);
}
