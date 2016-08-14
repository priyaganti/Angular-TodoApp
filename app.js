//Begin with a module
var app = angular.module('Todo', []);

// Add a controller
app.controller('TodoCtrl', function($scope){
  $scope.newTodo = '';
  $scope.todos = [
    'Learn to Paint',
    'Practice for Half Marathon',
    'Cook a meal'
  ];

  // Remove to-do item from the list
  $scope.done = function(todo){
    var chosenIndex = $scope.todos.indexOf(todo);
    if(chosenIndex !== -1){
      $scope.todos.splice(chosenIndex, 1); //remove the element from todos array at chosen Index.
    }
  };

  //add new to-do item to the list
   $scope.add = function(e){ //e is the event
     if(e.which === 13){
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }
  };
});
