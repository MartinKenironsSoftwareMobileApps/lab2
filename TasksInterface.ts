export interface TasksInterface {
    Tasks: string[];
    addTask(task: string): number;
    listAllTasks():void;
    deleteTask(task: string): number;
}