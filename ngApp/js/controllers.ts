
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

      let fact = <HTMLElement>document.getElementById('output');

      function enter1() {
        fact.className = 'animated slideInLeft';
        fact.innerHTML = '<p>America lawns take up 3X as much space as irrigated corn.</p>';
        $timeout(leave1, 4000);
      }

      function leave1() {
        fact.className = 'animated slideOutRight';
        $timeout(enter2, 1200);
      }

      function enter2() {
        fact.className = 'animated slideInLeft';
        fact.innerHTML = '<p>Turf grass occupies 2% of the surface of the continental U.S, making it the single largest irrigated crop in the country</p>';
        $timeout(leave2, 4000);
      }

      function leave2() {
        fact.className = 'animated slideOutRight';
        $timeout(enter2, 1200);
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
