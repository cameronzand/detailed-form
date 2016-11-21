function AddController ($state, FormService) {

  let vm = this;

  this.addInfo = addInfo;

  function addInfo (info) {
    FormService.addInfo(info).then((resp) => {
      $state.go('root.home');
    });
  };


};

AddController.$inject = ['$state', 'FormService'];
export { AddController };