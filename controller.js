angular.module('blogHome', []).controller('homeController', function($scope, $http, $window) {
    $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens/')
        .then(function(response) {
            $scope.posts = response.data;
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
    $scope.goToDetails = function(index) {
        let targetUrl = `/noticia.html?index=${index}`
        $window.location.href = targetUrl;
    };
});

angular.module('blogNoticia', []).controller('noticiaController', function($scope, $http) {
    let params = new URLSearchParams(window.location.search);
    let index = params.get('index');
    if (index !== undefined) {
        $http.get(`https://api-rest-post-diegocandido.herokuapp.com/postagem/${index}`)
            .then(function(response) {
                console.log(response.data);
                $scope.selectedPost = response.data;
            })
            .catch(function(error) {
                console.error('Error fetching data:', error);
            });
    }
});