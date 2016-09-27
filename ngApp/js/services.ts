namespace app.Services {
  export class YardenService {
    public CustomerResource;
    public ApplicationResource;

    public saveCustomer(email) {
      return this.CustomerResource.save(email).$promise;
    }

    public saveApplication(application) {
      return this.ApplicationResource.save(application).$promise;
    }

    constructor(
      private $resource: ng.resource.IResourceService
    ) {
      this.CustomerResource = $resource('/api/customer');
      this.ApplicationResource = $resource('/api/application');
    }
  }

  angular.module('app').service('yardenService', YardenService);
}
