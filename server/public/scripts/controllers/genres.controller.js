movieApp.controller('GenresController', ['$http', function ($http) {
    let vm = this;
    vm.genreList = [];

    vm.addGenre = function () {
        console.log('in addGenre!');
        $http({
            method: 'POST',
            url: '/genres',
            data: vm.newGenre
        }).then(function () {
            console.log('a genre has been added!');
        }).catch(function (error) {
            console.log('There was an error with POST to server:', error);
        })
    } // end addGenre

    vm.getGenreList = function () {
        console.log('in client GET genres');
        $http({
            method: 'GET',
            url: '/genres'
        }).then(function (response) {
            vm.genreList = response.data;
            console.log(vm.genreList);

        }).catch(function (error) {
            console.log('error getting genres from server:', error);

        })

    } // end getGenreList
    vm.getGenreList();

    vm.deleteGenre = function (genre) {
        console.log('in deleteGenre!');
        $http({
            method: 'DELETE',
            url: '/genres',
            params: { id: genre.id}
        }).then(function(){
            console.log('deleted genre!');
            vm.getGenreList();
        }).catch(function (error){
            console.log('error getting delete back from sql:', error);
        })
    } // end deleteGenre

}]);