movieApp.controller('HomeController', ['$http',  function ($http) {
    let vm = this;
    vm.movieList = [];

vm.getMovieList = function () {
    console.log('in client GET movies');
    $http({
        method: 'GET',
        url: '/movies'
    }).then(function (response) {
        vm.movieList = response.data;
        console.log(vm.movieList);

    }).catch(function (error) {
        console.log('error getting movies from server:', error);

    })

} // end getMovieList
vm.getMovieList();

}]);