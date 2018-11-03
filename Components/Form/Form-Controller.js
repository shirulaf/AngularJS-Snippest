app.controller("FormCtrl", [
  function() {
    self = this;

    self.submit = function(validation) {
      validation && console.log(self.Form);
    };
  }
]);
