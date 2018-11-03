app.service("updateService", [
  function() {
    self = this;

    value = 0;

    self.getValue = () => {
      return value;
    };

    self.increase = () => {
      value++;
    };

    self.decrease = () => {
      value--;
    };
  }
]);
