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
        controller: 'GenresController as vm'
    })
}]); // end movieApp config