var Tasks = [];
function addTask(task) {
    //let length:number = Tasks.push(task);
    Tasks.push(task);
    console.log(task + " was added to the array\n");
    return Tasks.length;
}
function listAllTasks() {
    for (var i = 0; i < Tasks.length; i++) {
        console.log(Tasks[i]);
    }
}
function deleteTask(task) {
    var index = Tasks.indexOf(task);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log(task + " was removed to the array\n");
    }
    else {
        console.log(task + " was not in the Task list");
    }
    return Tasks.length;
}
console.log(addTask("str1"));
console.log(addTask("str2"));
listAllTasks();
deleteTask("str1");
