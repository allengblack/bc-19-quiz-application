/**
 * Created by g-man on 8/28/16.
 */

function errorhandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

quizApp.controller('QuizListCtrl', function($scope, $http, QuizServiceData) {
    $scope.quizzes = [];
    $scope.search = "";
    $scope.message = "Select one of the quizzes.";

    $scope.setUrlString = function (newUrl) {
        QuizServiceData.setUrl(newUrl);
    };

    $scope.increaseScore = function() {
        $scope.QuizServiceData.increaseScore();
    };

    $http.get("quiz_choices.json").success(function (response) {
        $scope.quizzes = response;
        console.log(response);
    }).error(errorhandler);
});