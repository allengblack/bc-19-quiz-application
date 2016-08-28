/**
 * Created by g-man on 8/26/16.
 */

(function () {
    angular
        .module('quizApp')
        .factory('QuizFactory', function () {
            var quizObj = {

                quizUrl: '',
                setUrl: function (newName) {
                    quizObj.quizUrl = newName;

                }
            };

            return quizObj;
        })

})();