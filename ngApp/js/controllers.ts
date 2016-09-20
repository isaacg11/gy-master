
namespace app.Controllers {
  export class HomeController {
    public options;
    constructor(
    ) {
      this.options = "<a href='#'>Services</a> <br> <a href='#'>Careers</a>";
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
