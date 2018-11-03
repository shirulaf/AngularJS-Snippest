app.controller("repeatCtrl", [
  function() {
    self = this;
    self.selected = { radio: "", options: "", checkbox: "" };
    self.options = [1, 2, 3, 4, 5];

    self.checkDic = {
      1: { id: 11, name: "one" },
      2: { id: 2, name: "two" },
      3: { id: 3, name: "three" }
    };
  }
]);
