app.controller("RegisterController", [
  "localStorageService",
  "$http",
  "$location",
  function(localStorageService, $http, $location) {
    self = this;

    self.Form = {};
    self.submit = function(isValid) {
      if (!isValid) {
        self.showError = true;
        $http.get("http://www.mocky.io/v2/5be971292e00008700f145b1").then(
          function(res) {
            // .get("http://www.mocky.io/v2/5be970692e00005f00f145ae")
            console.log(res);
          },
          function(res) {
            // .get("http://www.mocky.io/v2/5be970692e00005f00f145ae")
            console.log(res);
          }
        );
      } else {
        if (self.Form.Remember)
          localStorageService.set("user-name", self.Form.uname);

        localStorageService.cookie.set("cook", "ey");

        $location.path("/");
      }
    };
  }
]);
