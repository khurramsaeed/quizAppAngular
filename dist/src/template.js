angular.module('quizApp').run(['$templateCache', function($templateCache) {$templateCache.put('app/templates/menubar.html','<nav class="navbar navbar-default">\n  <div class="nav nav-tabs-justified">\n    <input type="button" class="btn btn-default navbar-btn" value="Quiz Home"/>\n    <input type="button" class="btn btn-default navbar-btn" value="Create Quiz"/>\n    <input type="button" class="btn btn-default navbar-btn" value="Take Quiz"/>\n  </div>\n</nav>\n');}]);