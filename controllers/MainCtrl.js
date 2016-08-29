/**
 * Created by g-man on 8/28/16.
 */

function errorhandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

quizApp.controller('MainCtrl', function($scope) {
    $scope.mainMessage = "Welcome to the Quiz App!";
    $scope.headerMessage = "Test your knowledge of trivia here! You could also add your own quizzes " +
        "and challenge your friends. Let's give it a go!";
});