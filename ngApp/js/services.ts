namespace app.Services {
  export class YardenService {
    public CustomerResource;
    public ApplicationResource;

    public saveCustomer(address) {
      console.log(address);
      return this.CustomerResource.save({email: address}).$promise;
    }

    public saveApplication(application) {
      return this.ApplicationResource.save(application).$promise;
    }

    constructor(
      private $resource
    ) {
      this.CustomerResource = $resource('/api/customer/:email');
      this.ApplicationResource = $resource('/api/application');
    }
  }

  angular.module('app').service('yardenService', YardenService);
}
