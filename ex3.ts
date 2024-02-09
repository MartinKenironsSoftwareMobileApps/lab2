import { TasksInterface } from "./TasksInterface";

class Todo implements TasksInterface {

    Tasks: string[] = [];

    addTask(task: string): number {
        let length: number = this.Tasks.push(task);
        console.log(task + " has been added to my Tasks!");
        return length;
    }

    listAllTasks(): void {
        this.Tasks.forEach((item) => {
            console.log(item + " is in our Tasks list!");
        })
    }
    deleteTask(task: string): number {
        let index = this.Tasks.indexOf(task);
    
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been removed from my Tasks list!");
        } else {
            console.log(task + " is not in my Tasks list!")
        }
        return this.Tasks.length;
    }
}

let myTodo = new Todo();
myTodo.addTask("Sleep");
myTodo.listAllTasks();
myTodo.deleteTask("Sleep");