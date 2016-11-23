import { SERVER } from '../server';

function FormService ($http) {


    this.addInfo = function (info) {
    return $http.post(SERVER, info);
  };

    this.allInfos = function () {
    return $http.get(SERVER);
  };

    this.getInfo = function (id) {
    let url = SERVER + id;
    return $http.get(url);
  };

 

};

FormService.$inject = ['$http'];
export { FormService };