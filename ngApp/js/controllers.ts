
namespace app.Controllers {

  // home
  export class HomeController {
    public options;
    public output;
    public slides;
    public myInterval;
    public active;

    constructor(
      public $sce: ng.ISCEService,
      public $document: ng.IDocumentService,
      public $timeout: ng.ITimeoutService,
      public $window: ng.IWindowService
    ) {
      this.options = $sce.trustAsHtml("<a href='/app'>App</a> <br> <a href='/careers'>Careers</a>");

      $window.scrollTo(0, 0);

      for (var i = 0; i < 4; i++) {
        addSlide();
      };

      function addSlide() {
        this.myInterval = 1000;
        this.active = 0;
        this.slides = [];
        let newWidth = 600 + this.slides.length + 1;
        this.slides.push({
          image: '//unsplash.it/' + newWidth + '/300',
          text: ['Nice image','Awesome photograph','That is so cool','I love that'][this.slides.length % 4]
        });
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
