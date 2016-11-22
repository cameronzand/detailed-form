import { SERVER } from '../server';

function FormService ($http) {


  this.addInfo = function (info) {
    return $http.post(SERVER, info);
  };

    this.allInfos = function () {
    return $http.get(SERVER);
  };

};

FormService.$inject = ['$http'];
export { FormService };