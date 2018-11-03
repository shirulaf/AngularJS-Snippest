let app = angular.module("myApp", ["ngRoute"]);

app.config([
  "$locationProvider",
  "$routeProvider",
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");

    $routeProvider
      .when("/", {
        template: "<h1>This is the default route</h1>"
      })
      .when("/about", {
        templateUrl: "Components/Form/Form.html",
        controller: "FormCtrl as FormCtrl"
      })
      .when("/repeat", {
        templateUrl: "Components/NG-Repeat/NG-Repeat.html",
        controller: "repeatCtrl as repCtrl"
      })
      .when("/update1", {
        templateUrl: "Components/updateFromService/update1.html"
      })

      .otherwise({ redirectTo: "/" });
  }
]);
