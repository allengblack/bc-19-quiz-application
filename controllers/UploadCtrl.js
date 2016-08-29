/**
 * Created by g-man on 8/28/16.
 */


quizApp.controller('QuizCtrl', function($scope) {

    $scope.templateUrl = '/quiz_files/template.json';

    $scope.add = function () {
        var f = document.getElementById('file').files[0],
            r = new FileReader();
        r.onloadend = function (e) {
            var data = e.target.result;
        };
        r.readAsBinaryString(f);
    };

});