angular.module('blogHome', []).controller('homeController', function($scope, $http, $window) {
    $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens/')
        .then(function(response) {
            $scope.posts = response.data;
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
    $scope.goToDetails = function(index) {
        let targetUrl = `/detalhes.html?index=${index}`
        $window.location.href = targetUrl;
    };
});

