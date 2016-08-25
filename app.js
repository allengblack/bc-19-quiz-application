function errorhandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

var scotchApp = angular.module('scotchApp', []);

scotchApp.controller('MainCtrl', function($scope) {
    $scope.message = "Welcome to the Quiz App!";
});










// /**
//  * Created by g-man on 8/24/16.
//  */
// function errorhandler (err, obj) {
//     //a global error handler
//     console.error(err, obj);
// }
//
// var app = angular.module("quiz-app", ['ngRoute']);
//
// app.controller('MainCtrl', function($scope) {
//     $scope.message = "Hello, welcome to the Quiz App.";
//
// });
//
// app.controller('UploadCtrl', function($scope) {
//     $scope.message = "Hello, welcome to the Quiz App.";
//
// });
//
// app.controller("QuizCtrl", function($scope, $sce, $http) {
//     $scope.quizzes = [];
//     $scope.message = "Select one of the quizzes.";
//
//     $scope.selectQuiz = function () {
//         //get the json data from the selected quiz url
//         $http.get($scope.selectedQuiz.dataUrl).success(function (response) {
//             $scope.quiz = response;
//             console.log(response);
//         }).error(errorhandler);
//     };
//
//     $http.get("quiz_choices.json").success(function (response) {
//         $scope.quizzes = response;
//         // $scope.selectedQuiz = $scope.quizzes[0];
//         console.log(response);
//     }).error(errorhandler);
//
// });
//
// app.config(function($routeProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl : 'templates/home.html',
//             controller : 'MainCtrl'
//         })
//
//         .when('/takeQuiz', {
//             templateUrl : 'TakeQuiz.html',
//             controller : 'QuizCtrl'
//         })
//
//         .when('/uploadQuiz', {
//             templateUrl : 'uploadQuiz.html',
//             controller : 'UploadCtrl'
//         })
// });