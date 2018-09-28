movieApp.controller('MoviesController', ['$http', function ($http) {
    let vm = this;
    vm.movieList = [];

    vm.addMovie = function () {
        console.log('in addMovie!');
        $http({
            method: 'POST',
            url: '/movies',
            data: vm.newMovie
        }).then(function () {
            console.log('a movie has been added!');
        }).catch(function (error) {
            console.log('There was an error with POST to server:', error);
        })
    } // end addMovie

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

    vm.deleteMovie = function (movie) {
        console.log('in deleteMovie!');
        $http({
            method: 'DELETE',
            url: '/movies',
            params: { id: movie.id}
        }).then(function(){
            console.log('deleted movie!');
            vm.getMovieList();
        }).catch(function (error){
            console.log('error getting delete back from sql:', error);
        })
    } // end deleteMovie

}]);