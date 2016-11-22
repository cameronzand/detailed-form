function HomeController (FormService) {

  let vm = this;

  vm.infos = [];

  function init () {
    console.log("home controller");
    FormService.allInfos().then((resp) => {
      vm.infos = resp.data;
    });
  }

  init();
};

HomeController.$inject = ['FormService'];
export { HomeController };