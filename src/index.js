import './style.css';
import './homepage.css';
import {Task} from './task.js';
import {Project} from './project.js';
import { Database } from './database';
import {createHomepage, addTaskForm, addProjectForm, homepageButtonSetUp, fillOutHomePage} from './homepage.js';
import {createTitle, createDate, createPriorityList, createProjectList} from './homepage.js';
import {createTodayTasks, getTodayDate} from './today.js';
import { parseISO } from 'date-fns/esm';
import isBefore from 'date-fns/isBefore';
import {createUpcomingTasks} from './upcoming.js';
import {createTomorrowTasks} from './tomorrow.js';
import {createProjectPage} from './projectPage.js';
import * as Storage from './storage.js';
function createButtons(){
    let container = document.querySelector("#content");
    let button = document.createElement('div');
    button.className = "btn";
    container.appendChild(button);
    for (let i = 0; i < 5; i++){
        let btn = document.createElement('button');
        btn.classList.add("menu");
        button.appendChild(btn);
    }
    let allButtons = document.querySelectorAll(".menu");

    allButtons[0].textContent = "All";
    allButtons[0].setAttribute('id', 'all');

    allButtons[1].textContent = "Today";
    allButtons[1].setAttribute('id', 'today');

    allButtons[2].textContent = "Tomorrow";
    allButtons[2].setAttribute('id', 'tomorrow');

    allButtons[3].textContent = "Upcoming";
    allButtons[3].setAttribute('id', 'upcoming');

    allButtons[4].textContent = "Projects";
    allButtons[4].setAttribute('id', "projects");
}


// create all 5 pages: Homepage, today, tmr, upcoming, and projects
function createPages() {
    let container = document.querySelector("#content");
    let pages = document.createElement("div");
    pages.classList.add("info");
    container.appendChild(pages);
    for (let i = 0; i < 5; i++){
        let page = document.createElement('div');
        page.classList.add("pages");
        pages.appendChild(page);
    }

    let allPages = document.querySelectorAll(".pages");

    allPages[0].classList.add("homepage");

    allPages[1].classList.add("todayPage");

    allPages[2].classList.add("tomorrowPage");

    allPages[3].classList.add("upcomingPage");

    allPages[4].classList.add("projectPage");
}

function showContent(pageIndex){
    let allPages = document.querySelectorAll(".pages");
    allPages.forEach((p) => {
        p.style.cssText = "display: none";
    });
    allPages[pageIndex].style.cssText = "display: block";
}

function deleteButton(database){
    let deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((ea) => {
        ea.addEventListener("click", () => {
            // refer to box class
            let grandparent = ea.parentElement.parentElement;
            let oldData = (((grandparent.childNodes)[0]).childNodes)[0].textContent.split("by");
            //delete any whitespace in the string
            let oldTitle = oldData[0].split(" ").join("");
            let oldDueDate = oldData[1].split(" ").join("");
            let oldTask = [oldTitle, oldDueDate];
            // delete the task from all the tasks in database
            let allTasks = database.getAllTasks, deletedTask;
            for (let j = 0; j < allTasks.length; j++){
                if (allTasks[j].getTitle === oldTitle && allTasks[j].getDueDate === oldDueDate){
                    deletedTask = allTasks[j];
                    allTasks.splice(j, 1);
                    break;
                }
            }
            // delete the task from the one project in the database 
            let project = deletedTask.getProjectName;
            let allProj = database.getAllProjects;
            if (project != null){
                for (let j = 0; j < allProj.length; j++){
                    if (allProj[j].getProjectName === project){
                        allProj[j].removeTask = oldTask;
                        break;
                    }
                }
            }
            // remove box from display
            grandparent.parentElement.removeChild(grandparent);
            console.log(database);

            Storage.clearDatabase();
            Storage.setObject('database', database);
        });
    });
    return database;
}

function editButton(database){
    let editButton = document.querySelectorAll(".edit");
    console.log(editButton);
    editButton.forEach((btn) => {
        btn.addEventListener("click", () => {
            let e = document.querySelectorAll(".editForm");
            if (e.length === 0){
                let box = btn.parentElement.parentElement;
                let editForm = document.createElement('div');
                editForm.innerHTML = "<br><br><br>";
                editForm.classList.add("editForm");
                

                let title = createTitle();
                title.classList.add('editBox');
                editForm.appendChild(title);

                let dueDate = createDate();
                dueDate.classList.add("dueDateEdit");
                editForm.appendChild(dueDate);

                let priority = createPriorityList();
                priority.classList.add("priorityListEdit");
                editForm.appendChild(priority);

                let projList = createProjectList(database);
                projList.classList.add("projectListEdit");
                editForm.appendChild(projList);

                let closeBtn = document.createElement("button");
                closeBtn.classList.add("closeButtonEdit");
                closeBtn.textContent = "Close";
                closeBtn.style.cssText = "border: none; font-size: 25px; background-color: black; color: #F8B195; padding: 10px";
                editForm.appendChild(closeBtn);

                let submitBtn = document.createElement("button");
                submitBtn.classList.add("submitButtonEdit");
                submitBtn.textContent = "Submit";
                submitBtn.style.cssText = "border: none; font-size: 25px; background-color: black; color: #F67280; padding: 10px";
                editForm.appendChild(submitBtn);

                closeBtn.addEventListener("click", () => {
                    let all = document.querySelectorAll(".editForm");
                    //console.log(document.querySelectorAll(".editForm").length);
                    all[0].parentElement.removeChild(all[0]);
                    //editForm.style.cssText = 'display: none';
                });
                
                
                submitBtn.addEventListener("click", () => {
                    let s = document.querySelectorAll(".editForm");
                    if (s.length === 1){
                        let allInfo = s[0].childNodes;
                        console.log(allInfo);
                        let newTitle = (allInfo[3].childNodes)[1].value;
                        let newDueDate = (allInfo[4].childNodes)[1].value;
                        let newPriority = (allInfo[5].childNodes)[1].value;
                        let newProject = (allInfo[6].childNodes)[1].value;
                        if (newProject === "None")
                            newProject = null;
                        
                        if (newTitle.length != 0 && newDueDate.length != 0 && !isBefore(parseISO(newDueDate), parseISO(getTodayDate()))){
                            let oldData = (((box.childNodes)[0]).childNodes)[0].textContent.split("by");
                            //delete any whitespace in the string
                            let oldTitle = oldData[0].split(" ").join("");
                            let oldDueDate = oldData[1].split(" ").join("");
                            // go through database to find the task that matches this title AND due date
                            let allTask = database.getAllTasks;
                            for (let i = 0; i < allTask.length; i++){
                                if (allTask[i].getTitle === oldTitle && allTask[i].getDueDate === oldDueDate){
                                    allTask[i].changeTitle = newTitle;
                                    allTask[i].changeDueDate = newDueDate;
                                    allTask[i].changePriority = newPriority;
                                    if (newPriority === "High"){
                                        box.style.cssText = "display: inline-block; border: 2px solid red; height: auto; width: 1200px";
                                    }
                                    else if (newPriority === "Medium"){
                                        box.style.cssText = "display: inline-block; border: 2px solid yellow; height: auto; width: 1200px";
                                    }
                                    else if (newPriority === 'Low'){
                                        box.style.cssText = "display: inline-block; border: 2px solid #03AC13; height: auto; width: 1200px"
                                    }
                                    let oldProject = allTask[i].getProjectName;
                                    if (newProject != allTask[i].getProjectName){
                                        // need to remove task from project here
                                        let allProjects = database.getAllProjects;
                                        for (let j = 0; j < allProjects.length; j++){
                                            //old
                                            if (oldProject === allProjects[j].getProjectName){
                                                if (newProject === "None"){
                                                    //clean project to null
                                                    allTask[i].changeProject = null;
                                                    allProjects[j].cleanProject = null;
                                                }
                                                else{
                                                    allTask[i].changeProject = newProject;
                                                    // delete task from that old project
                                                    allProjects[j].cleanProject = newProject;
                                                }
                                            }
                                            if (newProject === allProjects[j].getProjectName){
                                                allTask[i].changeProject = newProject;
                                                // add task to new project
                                                allProjects[j].addTask = new Task(newTitle, newDueDate, newPriority, newProject);
                                            }
                                        }
                                    }
                                }
                            }
                            //let the user hit edit again after it's closed
                            let all = document.querySelectorAll(".editForm");
                            all[0].parentElement.removeChild(all[0]);
                            //update what is displayed after editing 
                            (((box.childNodes)[0]).childNodes)[0].textContent = newTitle + " by " + newDueDate;
                            console.log(database);
                            console.log(database.getAllProjects);
                            
                            Storage.clearDatabase();
                            Storage.setObject('database', database);
                        }
                        else{
                            alert("You either have not fill out all boxes or the date you entered is before TODAY!");
                        }
                    }
                });
                
                box.appendChild(editForm);
            }
        });
    });
    return database;
}

function generateTodayPage(database){
    document.querySelector("#today").addEventListener("click", () => {
        showContent(1);
        createTodayTasks(database);
    });
}

function generateTomorrowPage(database){
    document.querySelector("#tomorrow").addEventListener("click", () => {
        showContent(2);
        createTomorrowTasks(database);
    });
}

function generateUpcomingPage(database){
    document.querySelector("#upcoming").addEventListener("click", () => {
        showContent(3);
        createUpcomingTasks(database);
    });
}

function generateProjectPage(database){
    document.querySelector("#projects").addEventListener("click", () => {
        showContent(4);
        createProjectPage(database);
    });
}

function generateHomepage(){
    document.querySelector("#all").addEventListener('click', () => {
        showContent(0);
    });
}
function main(){    
    let res = Storage.getObject('database');
    let database;
    // if data has existed before, then retrieve and transform it. else start from scratch
    if (res != null){
        database = Storage.transformData(res);
    }
    else{
        database = new Database();
    }
    //let database = new Database();
    createButtons();
    createPages();
    createHomepage();
    //right now its an empty array but make sure to modify it later in main function
    addTaskForm(database);
    addProjectForm();
    homepageButtonSetUp();
    fillOutHomePage(database);
    showContent(0);

    // adding a new task to the database
    document.querySelector("#addFormSubmitBtn").addEventListener("click", () => {
        let title = document.querySelector(".titleInputAddTask").value;
        let dueDate = document.querySelector(".dateInputAddTask").value;
        let priorityList = document.querySelector("#dropDownPriority");
        let priority = priorityList.options[priorityList.selectedIndex].textContent;
        let projectList = document.querySelector("#dropDownProject");
        let project = projectList.options[projectList.selectedIndex].textContent;
        let task;

        //TODO: start here: must check that dates are NOT before today
        if (title.length != 0 && dueDate.length != 0 && !isBefore(parseISO(dueDate), parseISO(getTodayDate()))){
            if (project === "None")
                task = new Task(title, dueDate, priority, null);
            else{
                task = new Task(title, dueDate, priority, project);
                let allProj = database.getAllProjects;
                // adding that particular task to the specified project
                for (let i = 0; i < allProj.length; i++){
                    if (allProj[i].getProjectName === project){
                        allProj[i].addTask = task;
                    }
                }
            }
            database.addNewTask = task;
            
            Storage.clearDatabase();
            Storage.setObject('database', database);

            console.log(database);
            document.querySelector(".addTaskForm").style.cssText = "display: none";
            fillOutHomePage(database);

            //for today page
            generateTodayPage(database);
            // for tomorrow page
            generateTomorrowPage(database);

            // go back to homepage from another page
            generateHomepage();

            // for upcoming page
            generateUpcomingPage(database);

            //for project page
            generateProjectPage(database);

            database = editButton(database);
            
            // add delete function here
            database = deleteButton(database);
        }  
        else{
            alert("You either have not fill out all boxes or the date you entered is before TODAY!");
        }
    });

    // adding a new project to the new database
    document.querySelector("#addProjectSubmitBtn").addEventListener("click", () => {
        let title = document.querySelector(".titleInputProjectForm").value;
        if (title.length != 0){
            let newProject = new Project(title);
            database.addProject = newProject;
            document.querySelector(".addProjectForm").style.cssText = "display: none";
            console.log(database);

            // update drop down project list and add that new project above to addTask
            let newOption = document.createElement("option");
            newOption.textContent = title;
            document.querySelector("#dropDownProject").appendChild(newOption);
        }
    });
    database = deleteButton(database);
    database = editButton(database);
    generateHomepage();
    generateTodayPage(database);
    generateTomorrowPage(database);
    generateUpcomingPage(database);
    generateProjectPage(database);
}
main();