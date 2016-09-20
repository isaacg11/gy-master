
namespace app.Controllers {
  export class HomeController {
    public options;

    constructor(
      public $sce: ng.ISCEService,
      public $document: ng.IDocumentService
    ) {
      this.options = $sce.trustAsHtml("<a href='#'>Services</a> <br> <a href='#'>Careers</a>");
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
