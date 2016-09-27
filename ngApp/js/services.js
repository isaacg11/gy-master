var app;
(function (app) {
    var Services;
    (function (Services) {
        var YardenService = (function () {
            function YardenService($resource) {
                this.$resource = $resource;
                this.CustomerResource = $resource('/api/customer');
                this.ApplicationResource = $resource('/api/application');
            }
            YardenService.prototype.saveCustomer = function (email) {
                return this.CustomerResource.save(email).$promise;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FzQlo7QUF0QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBc0JyQjtJQXRCYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3RCO1lBWUUsdUJBQ1UsU0FBdUM7Z0JBQXZDLGNBQVMsR0FBVCxTQUFTLENBQThCO2dCQUUvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDM0QsQ0FBQztZQWJNLG9DQUFZLEdBQW5CLFVBQW9CLEtBQUs7Z0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNwRCxDQUFDO1lBRU0sdUNBQWUsR0FBdEIsVUFBdUIsV0FBVztnQkFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzdELENBQUM7WUFRSCxvQkFBQztRQUFELENBQUMsQUFsQkQsSUFrQkM7UUFsQlksc0JBQWEsZ0JBa0J6QixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsRUF0QmEsUUFBUSxHQUFSLFlBQVEsS0FBUixZQUFRLFFBc0JyQjtBQUFELENBQUMsRUF0QlMsR0FBRyxLQUFILEdBQUcsUUFzQloifQ==