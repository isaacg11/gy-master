
namespace app.Controllers {
  export class HomeController {
    public options;

    constructor(
      $sce: ng.ISCEService
    ) {
      this.options = $sce.trustAsHtml("<a href='#'>Services</a> <br> <a href='#'>Careers</a>");
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
