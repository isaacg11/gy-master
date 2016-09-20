
namespace app.Controllers {
  export class HomeController {
    public options;
    public output;

    constructor(
      public $sce: ng.ISCEService,
      public $document: ng.IDocumentService
    ) {
      this.output = "garden";
      this.options = $sce.trustAsHtml("<a href='#'>Services</a> <br> <a href='#'>Careers</a>");

      setTimeout(garden, 1500);

      function garden() {
        this.output = "micro-farm";
      }
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
