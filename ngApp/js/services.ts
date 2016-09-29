namespace app.Services {
  export class YardenService {
    public CustomerResource;
    public ApplicationResource;
    public YardenResource;

    public saveCustomer(email) {
      return this.CustomerResource.save(email).$promise;
    }

    public saveApplication(application) {
      return this.ApplicationResource.save(application).$promise;
    }

    public ping(email) {
      return this.YardenResource.save(email).$promise;
    }

    constructor(
      private $resource: ng.resource.IResourceService
    ) {
      this.CustomerResource = $resource('/api/customer');
      this.ApplicationResource = $resource('/api/application');
      this.YardenResource = $resource('/api/ping');
    }
  }

  angular.module('app').service('yardenService', YardenService);
}
