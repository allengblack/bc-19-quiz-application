/**
 * Created by g-man on 8/28/16.
 */

function errorhandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

quizApp.controller('QuizCtrl', function($scope, $http, QuizServiceData) {
    $scope.newQuiz = {};
    $scope.isActive = true;
    $scope.options = {};
    $scope.score = null;
    $scope.urlString = QuizServiceData.getUrl();

    $scope.increaseScore = function (question) {
        if (question.isCorrect){
            $scope.score++;
            console.log($scope.score);
        }
    };

    $scope.getScore = function () {
        return $scope.score;
    };

    $scope.changeState = function () {
        $scope.isActive = false;
    };

    $scope.setFinalScore = function () {
        QuizServiceData.setFinalScore($scope.score);
    };

    $http.get($scope.urlString).success(function (response) {
        $scope.newQuiz = response;
        // console.log(response);
    }).error(errorhandler);

});