//Begin with a module
var app = angular.module('Todo', []);

// Add a controller
app.controller('TodoCtrl', function($scope){
  $scope.message = 'Angular is cool';
  $scope.todos = [
    'Learn to Paint',
    'Practice for Half Marathon',
    'Cook a meal'
  ];
});
