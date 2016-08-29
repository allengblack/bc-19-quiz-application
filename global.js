function errorhandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

var quizApp = angular.module('quizApp', ['ui.router']);


quizApp.config(function ($locationProvider, $stateProvider){
    $locationProvider.html5Mode(true);

    $stateProvider.state('Home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'MainCtrl'
    });

    $stateProvider.state('Choose A Quiz', {
        url: '/chooseQuiz',
        templateUrl: 'templates/chooseQuiz.html',
        controller: 'QuizListCtrl'
    });

    $stateProvider.state('Download', {
        url: '/download',
        templateUrl: 'templates/downloadQuiz.html',
        controller: 'UploadCtrl'
    });

    $stateProvider.state('Start Quiz', {
        url: '/chooseQuiz/startQuiz',
        templateUrl: 'templates/quiz.html',
        controller: 'QuizCtrl'
    });

    $stateProvider.state('Display Score', {
        url: 'display-score',
        templateUrl: 'templates/displayScore.html',
        controller: 'DisplayCtrl'
    });

});

quizApp.service('QuizServiceData', function () {
    var quizUrl = "";
    var finalScore = 0;

    var setUrl = function (newUrl) {
        quizUrl = newUrl;
    };

    var getUrl = function () {
        return quizUrl;
    };

    var setFinalScore = function (score) {
        finalScore = score;
    };

    var getFinalScore = function () {
        return finalScore;
    };

    return {
        setUrl: setUrl,
        getUrl: getUrl,
        setFinalScore: setFinalScore,
        getFinalScore: getFinalScore
    }
});