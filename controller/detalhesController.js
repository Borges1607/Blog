angular.module('blogDetalhes', []).controller('detalhesController', function($scope, $http) {
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
