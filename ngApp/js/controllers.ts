
namespace app.Controllers {

  // home
  export class HomeController {
    public options;
    public output;
    public slides;
    public myInterval;
    public active;
    public noWrapSlides;
    public transition;

    constructor(
      public $sce: ng.ISCEService,
      public $document: ng.IDocumentService,
      public $timeout: ng.ITimeoutService,
      public $window: ng.IWindowService
    ) {
      this.options = $sce.trustAsHtml("<a href='/app'>App</a> <br> <a href='/careers'>Careers</a>");

      $window.scrollTo(0, 0);

      this.myInterval = 5000;
      this.noWrapSlides = false;
      this.transition = false;
      this.active = 0;
      let slides = this.slides = [];
      let currIndex = 0;

      for(let i = 0; i < 4; i++) {
        addSlide();
      };

      function addSlide() {
        let newWidth = 600 + slides.length + 1;
        slides.push({
          image: '//unsplash.it/' + newWidth + '/300',
          text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
          id: currIndex++
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
