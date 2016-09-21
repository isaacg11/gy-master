
namespace app.Controllers {
  export class HomeController {
    public options;
    public output;

    constructor(
      public $sce: ng.ISCEService,
      public $document: ng.IDocumentService,
      public $timeout: ng.ITimeoutService
    ) {
      this.options = $sce.trustAsHtml("<a href='/app'>App</a> <br> <a href='/careers'>Careers</a>");

      this.$timeout(garden, 1500);

      function garden() {
        let output = <HTMLElement>document.getElementById('output');
        output.innerHTML = "<typed style='color:#000000'>micro-farm</typed>";
      }
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
