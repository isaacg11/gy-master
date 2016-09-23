
namespace app.Controllers {

  // home
  export class HomeController {
    public options;
    public output;
    public slides;

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

    constructor(
      public $sce: ng.ISCEService,
      public $window: ng.IWindowService
    ) {
      this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/app'>App</a>");

      $window.scrollTo(0, 0);
    }
  }


  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('AppController', AppController);
  angular.module('app').controller('CareerController', CareerController);
}
