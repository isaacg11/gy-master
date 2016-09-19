
namespace app.Controllers {
  export class HomeController {

    constructor() {
      console.log('hello world');
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
