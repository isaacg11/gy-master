var app;
(function (app) {
    var Services;
    (function (Services) {
        var YardenService = (function () {
            function YardenService($resource) {
                this.$resource = $resource;
                this.CustomerResource = $resource('/api/customer/:email');
                this.ApplicationResource = $resource('/api/application');
            }
            YardenService.prototype.saveCustomer = function (address) {
                console.log(address);
                return this.CustomerResource.save({ email: address }).$promise;
            };
            YardenService.prototype.saveApplication = function (application) {
                return this.ApplicationResource.save(application).$promise;
            };
            return YardenService;
        }());
        Services.YardenService = YardenService;
        angular.module('app').service('yardenService', YardenService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0F1Qlo7QUF2QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBdUJyQjtJQXZCYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3RCO1lBYUUsdUJBQ1UsU0FBUztnQkFBVCxjQUFTLEdBQVQsU0FBUyxDQUFBO2dCQUVqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMzRCxDQUFDO1lBZE0sb0NBQVksR0FBbkIsVUFBb0IsT0FBTztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDL0QsQ0FBQztZQUVNLHVDQUFlLEdBQXRCLFVBQXVCLFdBQVc7Z0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUM3RCxDQUFDO1lBUUgsb0JBQUM7UUFBRCxDQUFDLEFBbkJELElBbUJDO1FBbkJZLHNCQUFhLGdCQW1CekIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNoRSxDQUFDLEVBdkJhLFFBQVEsR0FBUixZQUFRLEtBQVIsWUFBUSxRQXVCckI7QUFBRCxDQUFDLEVBdkJTLEdBQUcsS0FBSCxHQUFHLFFBdUJaIn0=