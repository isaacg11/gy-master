
namespace app.Controllers {

  // home
  export class HomeController {
    public options;
    public output;

    constructor(
      public $sce: ng.ISCEService,
      public $document: ng.IDocumentService,
      public $timeout: ng.ITimeoutService
    ) {
      this.options = $sce.trustAsHtml("<a href='/app'>App</a> <br> <a href='/careers'>Careers</a>");

      // this.$timeout(garden, 1500);
      //
      // function garden() {
      //   let output = <HTMLElement>document.getElementById('output');
      //   output.innerHTML = "<typed style='color:#000000'>micro-farm</typed>";
      // }
    }
  }

  // app
  export class AppController {
    public options;

    constructor(
      public $sce: ng.ISCEService
    ) {
      this.options = $sce.trustAsHtml("<a href='/'>Home</a> <br> <a href='/careers'>Careers</a>");
    }
  }

  // app
  export class CareerController {
    public options;

    constructor(
      public $sce: ng.ISCEService
    ) {
      this.options = $sce.trustAsHtml("<a href='/app'>App</a> <br> <a href='/'>Home</a>");
    }
  }


  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('AppController', AppController);
  angular.module('app').controller('CareerController', CareerController);
}
