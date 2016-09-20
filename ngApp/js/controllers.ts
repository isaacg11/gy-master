
namespace app.Controllers {
  export class HomeController {
    public options;

    constructor(
      $sce: ng.ISCEService
    ) {
      this.options = $sce.trustAsHtml('Line 1<br>Line2');
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
