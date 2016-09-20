
namespace app.Controllers {
  export class HomeController {
    public options;
    public output;

    constructor(
      public $sce: ng.ISCEService,
      public $document: ng.IDocumentService,
      public $timeout: ng.ITimeoutService
    ) {
      this.options = $sce.trustAsHtml("<a href='#'>Services</a> <br> <a href='#'>Careers</a>");

      // this.$timeout(garden, 1500);
      //
      // function garden() {
      //   let output = <HTMLElement>document.getElementById('output');
      //   output.innerHTML = 'micro-farm';
      // }
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
