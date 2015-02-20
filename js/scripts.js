$(document).ready(function() {

  $('form#tasks').submit(function(event) {
    event.preventDefault();

    var inputTaskName = $('input#task-name').val();
    var newTask = {taskName: inputTaskName};

    $("#task-list").append("<li><span class='task'>" + newTask.taskName + "</span></li>");
    $("input#task-name").val("");


    $("ul#completed-tasks").append("<li><span class='task'>" + newTask.taskName + "</span></li>");
    $("#completed-tasks").show();
    $("#task-list").remove();
    $("#show-tasks").remove();
    $(".task-name").text(newTask.taskName);
      
  });
});
