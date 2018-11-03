app.controller("update1", [
  "$scope",
  "updateService",
  function($scope, updateService) {
    self = this;
    self.value = updateService.getValue();

    self.increase = () => updateService.increase();
    self.decrease = () => updateService.decrease();

    $scope.$watch(
      () => {
        return updateService.getValue();
      },
      function(newValue, oldValue) {
        self.value = newValue;
      }
    );
  }
]);
