// /**
//  * Created by g-man on 8/28/16.
//  */

function errorhandler (err, obj) {
    console.error(err, obj);
}

quizApp.controller('QuizCtrl', function($scope, $http, QuizServiceData) {
    $scope.newQuiz = {};
    $scope.isActive = true;
    $scope.options = {};
    $scope.score = null;
    $scope.urlString = QuizServiceData.getUrl();

    $scope.increaseScore = function (question, option) {
        question.correct = false;
        question.options.forEach(function (option) {
            option.answered = false;
        });
        option.answered = true;
        if (option.isCorrect) {
            question.correct = true;
            //$scope.score++;
            console.log($scope.score);
        }
        console.log(question, option);
    };

    $scope.getScore = function () {
        return $scope.score;
    };

    $scope.changeState = function () {
        $scope.isActive = false;
    };

    $scope.setFinalScore = function () {
        //console.log($scope.newQuiz);
        $scope.score = 0;
        $scope.newQuiz.forEach(function (question) {
            if (question.correct) $scope.score++;
        });
        QuizServiceData.setFinalScore($scope.score);
    };

    $http.get($scope.urlString).success(function (response) {
        $scope.newQuiz = response;
        // console.log(response);
    }).error(errorhandler);

});