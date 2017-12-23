var quizApp = angular.module('quizApp', []);

angular.module('quizApp').controller('quizController', ['$scope', function ($scope) {

  $scope.message = "Hello, world!";
  $scope.hello = "Do something!";
}]);
