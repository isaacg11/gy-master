var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope) {
                this.$scope = $scope;
                this.items = [
                    'The first choice!',
                    'And another choice for you.',
                    'but wait! A third!'
                ];
                this.status = {
                    isopen: false
                };
                this.toggled = function (open) {
                    console.log('open');
                };
                this.toggleDropdown = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    this.status.isopen = !this.status.isopen;
                };
                this.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLEdBQUcsQ0FvQ1o7QUFwQ0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBb0N4QjtJQXBDYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBT0Usd0JBQ1MsTUFBaUI7Z0JBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7Z0JBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUc7b0JBQ1gsbUJBQW1CO29CQUNuQiw2QkFBNkI7b0JBQzdCLG9CQUFvQjtpQkFDckIsQ0FBQztnQkFFRixJQUFJLENBQUMsTUFBTSxHQUFHO29CQUNaLE1BQU0sRUFBRSxLQUFLO2lCQUNkLENBQUM7Z0JBRUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFTLElBQUk7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVMsTUFBTTtvQkFDbkMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQzNDLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7WUFDdEYsQ0FBQztZQUNILHFCQUFDO1FBQUQsQ0FBQyxBQWhDRCxJQWdDQztRQWhDWSwwQkFBYyxpQkFnQzFCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLEVBcENhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQW9DeEI7QUFBRCxDQUFDLEVBcENTLEdBQUcsS0FBSCxHQUFHLFFBb0NaIn0=