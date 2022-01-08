import isTomorrow from 'date-fns/isTomorrow';
import isToday from 'date-fns/isToday';
import { parseISO } from 'date-fns/esm';
import closestIndexTo from 'date-fns/closestIndexTo';
import {getTodayDate} from './today.js';
function createFramework(title, dueDate){
    let box = document.createElement("div");
    box.classList.add("upcomingBox");
    box.style.cssText = "display: inline-block; border: 3px solid #03AC13; height: auto; width: 1200px";

    let info = document.createElement('div');
    info.textContent = title + " by " + dueDate;
    info.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
    box.appendChild(info);
    return box;
}

function sortDate(database){
    // sort date from closest to farthest from today
    let allTasks = [];
    for (let j = 0; j < database.getAllTasks.length; j++){
        allTasks.push((database.getAllTasks)[j]);
    }
    let allDate = [], sorted = [];
    for (let i = 0; i < allTasks.length; i++){
        let date = new Date(parseISO(allTasks[i].getDueDate));
        if (!isToday(date) && !isTomorrow(date))
            allDate.push(date);
    }

    while (allDate.length != 0){
        let closestDate = closestIndexTo(parseISO(getTodayDate()), allDate);
        sorted.push(allTasks[closestDate]);
        allDate.splice(closestDate, 1);
        allTasks.splice(closestDate, 1);
    }
    return sorted;
}

export function createUpcomingTasks(database){
    let upcomingBox = document.querySelectorAll(".upcomingBox");
    upcomingBox.forEach((b) => {
        b.parentElement.removeChild(b);
    });

    let allTasks = sortDate(database);
    let upcomingPage = document.querySelector(".upcomingPage");
    if (upcomingPage.hasChildNodes()){
        upcomingPage.removeChild(upcomingPage.lastChild);
    }
    for (let i = 0; i < allTasks.length; i++){
        upcomingPage.appendChild(createFramework(allTasks[i].getTitle, allTasks[i].getDueDate));
    }

    if (!upcomingPage.hasChildNodes()){
        let none = document.createElement('div');
        none.textContent = "You have nothing coming up in the future!";
        none.style.cssText = "color: #C06C84; font-size: 45px; text-align: center; margin-top: 50px";
        upcomingPage.appendChild(none);
    }
}