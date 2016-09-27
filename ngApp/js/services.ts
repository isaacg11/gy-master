namespace app.Services {
  export class YardenService {
    public CustomerResource;
    public ApplicationResource;

    public saveCustomer(email) {
      return this.CustomerResource.save({email: email}).$promise;
    }

    public saveApplication(application) {
      return this.ApplicationResource.save(application).$promise;
    }

    constructor(
      private $resource
    ) {
      this.CustomerResource = $resource('/api/customer');
      this.ApplicationResource = $resource('/api/application');
    }
  }

  angular.module('app').service('yardenService', YardenService);
}
