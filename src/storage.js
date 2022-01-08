import {Database} from './database.js';
import {Task} from './task.js';
import {Project} from './project.js';

export function setObject(key, value){
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function getObject(key){
    let val = window.localStorage.getItem(key);
    return val && JSON.parse(val);
}

export function clearDatabase(){
    window.localStorage.clear();
}

// value is the string obtained from localStorage
// this function will transform it into a valid database, then return it
export function transformData(value){
   let database = new Database();
   let length = value.allProjects.length; 
   for (let i = 0; i < length; i++){
       let name = value.allProjects[i].name;
       let proj = new Project(name);
       let allTasks = value.allProjects[i].tasks; // this is in the form of array
       for (let j = 0; j < allTasks.length; j++){
           let newTask = new Task(allTasks[i].title, allTasks[i].dueDate, allTasks[i].priority, allTasks[i].belongTo);
           proj.addTask = newTask;
           database.addNewTask = newTask;
       }
       database.addProject = proj;
   }
   // add all tasks that have belongTo = null (those are not in allProjects because they don't belong to a project)
   for (let i = 0; i < value.allTasks.length; i++){
        if (value.allTasks[i].belongTo === null){
            let newTask = new Task(value.allTasks[i].title, value.allTasks[i].dueDate, value.allTasks[i].priority, null);
            database.addNewTask = newTask;
        }
   }
   return database;
}