
namespace app.Controllers {
  export class HomeController {
    public items;
    public status;
    public toggled;
    public toggleDropdown;
    public appendToEl;

    constructor(
      public $scope: ng.IScope,
      public $event
    ) {
      this.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
      ];

      this.status = {
        isopen: false
      };

      this.toggled = function(open) {
        console.log('open');
      };

      this.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
      };

      this.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
