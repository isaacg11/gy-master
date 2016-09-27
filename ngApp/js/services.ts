namespace app.Services {
  export class YardenService {
    public CustomerResource;
    public YardenerResource;

    public save(email) {
      return this.CustomerResource.save({email: email}).$promise;
    }

    constructor(
      private $resource
    ) {
      this.CustomerResource = $resource('/api/customer');
    }
  }

  angular.module('app').service('yardenService', YardenService);
}
