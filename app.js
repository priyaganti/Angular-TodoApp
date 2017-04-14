//Begin with a module
var app = angular.module('todoApp', []);

// Add a controller
app.controller('todoCtrl', function($scope){
   $scope.todoList = [
       {content: 'Run', done:false},
       {content: 'Bike', done:false},
       {content: 'Swim', done:false}
   ];

    //add new to-do item to the list
    $scope.addTask = function(e) {
        if(e.which === 13 && $scope.newTask){ // add non empty new tasks on key enter
        $scope.todoList.push({content:$scope.newTask, done:false});
        $scope.newTask = "";
        }

    };

    $scope.removeTask = function($index){
        //remove one element from the specified position
        $scope.todoList.splice($index,1);
    };
});

