import { SERVER } from '../server';

function FormService ($http) {


  this.addInfo = function (info) {
    return $http.post(SERVER, info);
  };


};

FormService.$inject = ['$http'];
export { FormService };