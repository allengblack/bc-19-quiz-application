function errorhandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

var quizApp = angular.module('quizApp', ['ui.router']);

quizApp.factory('QuizFactory', function () {
    var obj = {
        quizUrl: ""
    };

    return obj;
});

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

quizApp.controller('QuizListCtrl', function($scope, $http) {

    $scope.quizzes = [];
    $scope.search = "";
    $scope.message = "Select one of the quizzes.";

    $scope.setUrl = function(newName) {
        quizObj.setUrl(newName)
    };

    $http.get("quiz_choices.json").success(function (response) {
        $scope.quizzes = response;
        console.log(response);
    }).error(errorhandler);
});

quizApp.controller('QuizCtrl', function($scope, $http) {
    $scope.newQuiz = {};
    $scope.questions = [];
    $scope.options = [];
    $scope.correctCount = 0;

    $scope.correctCounter = function (index) {
        for(var i=0; $scope.newQuiz.options.length(); i++) {
            if ($scope.newQuiz.options[index].isCorrect === true)
            $scope.correctCount++;
        index++;
        }
    };

    $http.get("/quiz_files/got-quiz.json").success(function (response) {
        $scope.newQuiz = response;
        $scope.question = $scope.newQuiz[0].text;
        $scope.options = $scope.newQuiz[0].options;
        console.log(response);
    }).error(errorhandler);

});

quizApp.controller('UploadCtrl', function($scope) {
    $scope.message = "I am the Upload Page. Work on me!";
});