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
  $scope.done = function(todo){
    var chosenIndex = $scope.todos.indexOf(todo);
    if(chosenIndex !== -1){
      $scope.todos.splice(chosenIndex, 1); //remove the element from todos array at chosen Index.
    }
  };
});
