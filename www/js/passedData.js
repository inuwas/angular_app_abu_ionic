angular.module('passedData', [])
.factory('Authorization', function() {
  authorization = {};
  authorization.firstName = '';
  authorization.lastName = '';  
  return authorization;
})