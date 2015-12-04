angular.module("localSaver").factory("dataSphereService", function($http) {

  var getBusinesses = function(lat, long) {
    var url = 'http://codingchallenge.datasphere.com:8084/getbusinesses/?location=' + lat + ',' + long + '&pg=1&pz=12&callback=JSON_CALLBACK';
    return $http.jsonp(url)
      .then(function(response) {
        return response.data;
      });
  };


  return {
    getBusinesses : getBusinesses
  };
});
