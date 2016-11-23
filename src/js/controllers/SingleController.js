function SingleController (FormService, $stateParams) {

  let vm = this;

  vm.info = {};

  function init () {
    FormService.getInfo($stateParams.id).then((resp) => {
      vm.info = resp.data;
    });
  };

  init();



}

SingleController.$inject = ['FormService', '$stateParams'];
export { SingleController };