var app;
(function (app) {
    var Services;
    (function (Services) {
        var YardenService = (function () {
            function YardenService($resource) {
                this.$resource = $resource;
                this.CustomerResource = $resource('/api/customer');
                this.ApplicationResource = $resource('/api/application');
                this.YardenResource = $resource('/api/ping');
            }
            YardenService.prototype.saveCustomer = function (info) {
                return this.CustomerResource.save(info).$promise;
            };
            YardenService.prototype.saveApplication = function (application) {
                return this.ApplicationResource.save(application).$promise;
            };
            YardenService.prototype.ping = function (info) {
                return this.YardenResource.save(info).$promise;
            };
            return YardenService;
        }());
        Services.YardenService = YardenService;
        angular.module('app').service('yardenService', YardenService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0E0Qlo7QUE1QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBNEJyQjtJQTVCYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3RCO1lBaUJFLHVCQUNVLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFFL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxDQUFDO1lBbEJNLG9DQUFZLEdBQW5CLFVBQW9CLElBQUk7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNuRCxDQUFDO1lBRU0sdUNBQWUsR0FBdEIsVUFBdUIsV0FBVztnQkFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzdELENBQUM7WUFFTSw0QkFBSSxHQUFYLFVBQVksSUFBSTtnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2pELENBQUM7WUFTSCxvQkFBQztRQUFELENBQUMsQUF4QkQsSUF3QkM7UUF4Qlksc0JBQWEsZ0JBd0J6QixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsRUE1QmEsUUFBUSxHQUFSLFlBQVEsS0FBUixZQUFRLFFBNEJyQjtBQUFELENBQUMsRUE1QlMsR0FBRyxLQUFILEdBQUcsUUE0QloifQ==