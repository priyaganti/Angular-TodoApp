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
        if(e.which === 13){ // add new task on key enter
            if(!$scope.newTask){ return;} //check not to add empty tasks
        $scope.todoList.push({content:$scope.newTask, done:false});
        $scope.newTask = "";
        }

    };
});

