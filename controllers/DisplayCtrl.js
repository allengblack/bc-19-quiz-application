/**
 * Created by g-man on 8/28/16.
 */

// function errorhandler (err, obj) {
//     //a global error handler
//     console.error(err, obj);
// }

quizApp.controller('DisplayCtrl', function($scope, QuizServiceData) {
    $scope.score = QuizServiceData.getFinalScore();
    $scope.message = "Good work!";
});