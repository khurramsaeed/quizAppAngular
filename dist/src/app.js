var quizApp = angular.module('quizApp', []);

quizApp.constant('appInformation', {
  appName: 'Quiz Home',
  version: '1.0.0'
});

quizApp.constant('appMode', {
  STARTAPP: '0',
  CREATEQUIZ: '1',
  ADDQUESTION: '2',
  SUCCESSQUIZ: '3',
  RESULTQUIZ: '4',
  TAKEQUIZ: '5'
});

quizApp.constant('takeQuizMode', {
  SELECTQUIZ: '6',
  TAKEQUESTION: '7',
  SHOWRESULT: '8'
});

angular.module('quizApp').directive('takeQuizContainer', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/templates/Modal/takeQuizContainer.html'
  }
});

angular.module('quizApp').directive('quizSuccessContainer', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/templates/Modal/quizSuccessContainer.html'
  }
});

angular.module('quizApp').directive('quizContainer', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/templates/Modal/quizContainer.html'
  }
});

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

angular.module('quizApp').factory('Question', function () {

  var Question = function () {
    var self = this;
    this.question = '';
    this.choices = {
      choice1: '',
      choice2: '',
      choice3: '',
      choice4: ''
    };

    this.answer = '';
  }
  return Question;
  
});

angular.module('quizApp').controller('quizController', ['$scope', 'Quiz', 'Question', 'appMode', 'appInformation', 'takeQuizMode', '$window',function (
  $scope,
  Quiz,
  Question,
  appMode,
  appInformation,
  takeQuizMode,
  $window) {

    window.quizAppScope = $scope;

    //These are the application modes
    $scope.appMode = appMode;
    $scope.takeQuizMode = takeQuizMode;

    $scope.appInformation = appInformation;

    $scope.quizMode = appMode.STARTAPP;
    $scope.loaded = false;
    $scope.startQuiz = false;

    //Using factories
    $scope.quiz = new Quiz();
    $scope.question = new Question();

    //Helper variables
    $scope.potentialQuestion = null;
    $scope.count = 0;
    $scope.countQuestion = 1;
    $scope.questionLimitExceeded = false;
    
    //Validation variables
    $scope.validQuestion = true;

    //Checking question variables
    $scope.questionAnswered = false;
    $scope.correctAnswer = [];
    $scope.currentQuestion = null;


    $scope.changeAppMode = function (mode) {
      $scope.question = new Question();
      $scope.quizMode = mode;
      $scope.quizLoaded = false;
    };


    //This function will clear the fields
    $scope.clearFields = function () {
      $scope.quiz = new Quiz();
      $scope.question = new Question();
    };
}]);
