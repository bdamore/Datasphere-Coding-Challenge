angular.module('localSaver')
  .controller('MainController',
    ['$scope','dataSphereService',
      function($scope, dataSphereService) {

        var init = function() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
              dataSphereService.getBusinesses(position.coords.latitude, position.coords.longitude).then(function(response) {
                  $scope.businesses = response.businesses;
              });
            });
          }
        };

        init();
      }
    ]
  );
