
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
      let counter = 0;
      let slides = [
        "<p className='animated slideInLeft'>There's 40 million acres of lawns in the lower 48 states.</p>",
        "<p>America lawns take up 3X as much space as irrigated corn.</p>"
      ];
      let fact = <HTMLElement>document.getElementById('output');

      for(let i = 0; i < slides.length; i++) {
        if(i === 0) {
          $timeout(enter, 1000);
        } else {
          counter = i + 1;
          $timeout(enter, 1000);
        }
      }

      function enter() {
        fact.innerHTML = slides[counter];
        $timeout(leave, 5000);
      }

      function leave() {
        fact.className = 'animated slideOutRight';
        $timeout(enter, 2000);
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
