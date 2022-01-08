import {Task} from './task.js';
import {Project} from './project.js';

// this class will store EVERYTHING about our application
export class Database{
    constructor(){
        this.allProjects = [];
        this.allTasks = [];
    }

    get getAllProjects(){
        return this.allProjects;
    }

    get getAllTasks(){
        return this.allTasks;
    }

    set addProject(project){
        this.allProjects.push(project);
    }

    set addNewTask(task){
        this.allTasks.push(task);
    }

    set removeTask(arr){
        // arr[0] = title; arr[1] = dueDate
        let deletedTask;
        for (let i = 0; i < this.allTasks.length; i++){
            if (this.allTasks[i].getTitle === arr[0] && this.allTasks[i].getDueDate === arr[1]){
                deletedTask = this.allTasks[i];
                this.allTasks.splice(i, 1);
                i--;
            }
        }
        return deletedTask;
    }
}