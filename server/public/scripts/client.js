console.log('client connected!');

const movieApp = angular.module('MovieApp', ['ngRoute']);

movieApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../views/home.html',
        // controller: 'HomeController as vm'
    }).when('/movies', {
        templateUrl: '../views/movies.html',
        controller: 'MoviesController as vm'
    }).when('/genres', {
        templateUrl: '../views/genres.html',
        // controller: 'GenresController as vm'
    })
}]); // end movieApp config

movieApp.controller('MoviesController', ['$http', function ($http) {
    let vm = this;

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
    }
}]);