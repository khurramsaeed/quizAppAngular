angular.module('quizApp').factory('Quiz', function () {

  var Quiz = function () {
    var self = this;
    this.deep_copy_white = [
      'quizName', 'author', 'questionLength', 'questions'
    ];

    this.author = '';
    this.quizName = '';
    this.questionLength = '';
    this.question = [];
    this.choiceslength = 4;
  }
  return Quiz;

});
