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


    //This func will create a quiz for us
    $scope.addQuiz = function () {
      $scope.validQuestion = ''
    }




}]);
