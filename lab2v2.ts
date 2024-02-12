interface myInterface
{
    Tasks: string[];
    addTask(task: string):number;
    listAllTasks();
    deleteTask(task:string):number;
}

class myClass implements myInterface
{
    Tasks:string[]=[];
    addTask(task: string): number {
        this.Tasks.push(task);
        console.log(task + " was added to the array\n");
        return this.Tasks.length;
    }
    listAllTasks() {
        for(let i = 0; i < this.Tasks.length;i++)
        {
            console.log(this.Tasks[i]);
        }
    }

    deleteTask(task: string): number {
        let index:number = this.Tasks.indexOf(task);
        if (index > -1){
            this.Tasks.splice(index, 1);
        console.log(task + " was removed from the array\n");
        }
        else{
            console.log(task + " was not in the Task list");
        }
        return this.Tasks.length;
    }

    
}

let Class  = new myClass();
Class.addTask("str1");
Class.addTask("str2");
Class.listAllTasks();
Class.deleteTask("str1");