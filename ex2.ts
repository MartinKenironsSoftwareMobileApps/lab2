let Tasks: string[] = [];

function addTask(task: string): number {
    let length: number = Tasks.push(task);
    console.log(task + " has been added to my Tasks!");
    return length;
}

function listAllTasks(): void {
    Tasks.forEach((item) => {
        console.log(item + " is in our Tasks list!");
    })
}

function deleteTask(task: string): number {
    let index = Tasks.indexOf(task);

    if (index > -1) {
        Tasks.splice(index, 1);
        console.log(task + " has been removed from my Tasks list!");
    } else {
        console.log(task + " is not in my Tasks list!")
    }
    return Tasks.length;
}

addTask("Eat!");
listAllTasks();
deleteTask("Work!");

