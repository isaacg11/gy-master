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
                return this.CustomerResource.save({ email: email }).$promise;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FzQlo7QUF0QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBc0JyQjtJQXRCYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3RCO1lBWUUsdUJBQ1UsU0FBUztnQkFBVCxjQUFTLEdBQVQsU0FBUyxDQUFBO2dCQUVqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDM0QsQ0FBQztZQWJNLG9DQUFZLEdBQW5CLFVBQW9CLEtBQUs7Z0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzdELENBQUM7WUFFTSx1Q0FBZSxHQUF0QixVQUF1QixXQUFXO2dCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDN0QsQ0FBQztZQVFILG9CQUFDO1FBQUQsQ0FBQyxBQWxCRCxJQWtCQztRQWxCWSxzQkFBYSxnQkFrQnpCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxFQXRCYSxRQUFRLEdBQVIsWUFBUSxLQUFSLFlBQVEsUUFzQnJCO0FBQUQsQ0FBQyxFQXRCUyxHQUFHLEtBQUgsR0FBRyxRQXNCWiJ9