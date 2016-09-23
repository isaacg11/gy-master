
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

      let fact = <HTMLElement>document.getElementById('output');
      let slides = [
        '<p>Turf grass occupies 2% of the surface of the continental U.S, making it the single largest irrigated crop in the country</p>',
        '<p>America lawns take up 3X as much space as irrigated corn.</p>'
      ];

      for(let i = 0; i < slides.length; i ++) {
        enter(i);
      }

      function enter(pos) {
        fact.className = 'animated slideInLeft';
        fact.innerHTML = slides[pos];
        $timeout(leave, 4000);
      }

      function leave() {
        fact.className = 'animated slideOutRight';
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
