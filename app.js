/**
 * Created by g-man on 8/24/16.
 */


function errorhandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

var app = angular.module("quiz-app", []);

app.controller("QuizCtrl", function ($scope, $sce, $http) {
    $scope.quizzes = [];

    $scope.selectQuiz = function () {
        //get the json data from the selected quiz url
        $http.get($scope.selectedQuiz.dataUrl).success(function (response) {
            $scope.quiz = response;
            console.log(response);
        }).error(errorhandler);
    };

    $http.get("quiz_library/quiz_choices.json").success(function (response) {
        $scope.quizzes = response;
        $scope.selectedQuiz = $scope.quizzes[0];
        console.log(response);
    }).error(errorhandler);

});