function errorhandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

var quizApp = angular.module('quizApp', ['ui.router']);

quizApp.config(function ($stateProvider){
    $stateProvider.state('Home', {
        url: '',
        templateUrl: 'templates/home.html',
        controller: 'MainCtrl'
    });

    $stateProvider.state('Choose A Quiz', {
        url: '/chooseQuiz',
        templateUrl: 'templates/chooseQuiz.html',
        controller: 'QuizListCtrl'
    });

    $stateProvider.state('Upload new Quiz', {
        url: '/uploadQuiz',
        templateUrl: 'templates/uploadQuiz.html',
        controller: 'UploadCtrl'
    });

    $stateProvider.state('Start Quiz', {
        url: '/chooseQuiz/startQuiz',
        templateUrl: 'templates/quiz.html',
        controller: 'QuizCtrl'
    });
});

quizApp.controller('MainCtrl', function($scope) {
    $scope.mainMessage = "Welcome to the Quiz App!";
    $scope.headerMessage = "Test your knowledge of trivia here! You could also add your own quizzes " +
        "and challenge your friends. Let's give it a go!";
});

quizApp.controller('QuizCtrl', function($scope, $http) {
    $scope.message = "I'm the quiz, bitch. Fear me.";
    $scope.question = "I asked a question";

    $scope.options = [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ];

    $http.get("quiz_files/").success(function (response) {
        //
    }).error(errorhandler);
    // $http.get(url).success(function (data) {
    //     //assign data to some scope variable
    // }).error(errorhandler);

});

quizApp.controller('QuizListCtrl', function($scope, $http) {
    $scope.quizzes = [];
    $scope.message = "Select one of the quizzes.";

    $scope.selectQuiz = function ($scope) {
        //get the json data from the selected quiz url
        $http.get($scope.selectedQuiz.dataUrl).success(function (response) {
            $scope.quiz = response;
            console.log(response);
        }).error(errorhandler);
    };

    $http.get("quiz_choices.json").success(function (response) {
        $scope.quizzes = response;
        $scope.selectedQuiz = $scope.quizzes[0];
        console.log(response);
    }).error(errorhandler);
});

quizApp.controller('UploadCtrl', function($scope) {
    $scope.message = "I am the Upload Page. Work on me!";
});