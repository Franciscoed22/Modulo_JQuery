$(document).ready(function () {
    var taskList = [];
    $("#addTask").click(function () {
        var task = $("#task").val();
        taskList.push(task);
        $("#taskList").empty();
        for (var i = 0; i < taskList.length; i++) {
            $("#taskList").append("<li class='task'>" + taskList[i] + "</li>");
        }
    });
    $(document).on("click", ".task", function () {
        $(this).css("text-decoration", "line-through");
    });
});
