let app = angular.module("myApp", ["ngRoute", "LocalStorageModule"]);

app.config([
  "$locationProvider",
  "$routeProvider",
  function($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix("");

    $routeProvider
      .when("/", { template: "<h1>This is the default route</h1>" })
      .when("/test", { template: "<h1>test</h1>" })
      .when("/Register", {
        templateUrl: "components/Register/Register-view.html",
        controller: "RegisterController as regCtrl"
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
