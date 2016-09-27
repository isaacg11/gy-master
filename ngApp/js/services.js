var app;
(function (app) {
    var Services;
    (function (Services) {
        var YardenService = (function () {
            function YardenService($resource) {
                this.$resource = $resource;
                this.CustomerResource = $resource('/api/customer');
            }
            YardenService.prototype.save = function (email) {
                return this.CustomerResource.save({ email: email }).$promise;
            };
            return YardenService;
        }());
        Services.YardenService = YardenService;
        angular.module('app').service('yardenService', YardenService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FpQlo7QUFqQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBaUJyQjtJQWpCYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3RCO1lBUUUsdUJBQ1UsU0FBUztnQkFBVCxjQUFTLEdBQVQsU0FBUyxDQUFBO2dCQUVqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3JELENBQUM7WUFSTSw0QkFBSSxHQUFYLFVBQVksS0FBSztnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUM3RCxDQUFDO1lBT0gsb0JBQUM7UUFBRCxDQUFDLEFBYkQsSUFhQztRQWJZLHNCQUFhLGdCQWF6QixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsRUFqQmEsUUFBUSxHQUFSLFlBQVEsS0FBUixZQUFRLFFBaUJyQjtBQUFELENBQUMsRUFqQlMsR0FBRyxLQUFILEdBQUcsUUFpQloifQ==