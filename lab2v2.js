var myClass = /** @class */ (function () {
    function myClass() {
        this.Tasks = [];
    }
    myClass.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log(task + " was added to the array\n");
        return this.Tasks.length;
    };
    myClass.prototype.listAllTasks = function () {
        for (var i = 0; i < this.Tasks.length; i++) {
            console.log(this.Tasks[i]);
        }
    };
    myClass.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " was removed from the array\n");
        }
        else {
            console.log(task + " was not in the Task list");
        }
        return this.Tasks.length;
    };
    return myClass;
}());
var Class = new myClass();
Class.addTask("str1");
Class.addTask("str2");
Class.listAllTasks();
Class.deleteTask("str1");
