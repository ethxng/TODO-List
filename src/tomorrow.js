import isTomorrow from 'date-fns/isTomorrow';
import { parseISO } from 'date-fns/esm';
function createFramework(title, dueDate){
    let box = document.createElement("div");
    box.classList.add("tomorrowBox");
    box.style.cssText = "display: inline-block; border: 2px solid #D1C195; height: auto; width: 1200px";

    //content of the task
    let info = document.createElement('div');
    // these class will be referenced when the button edit is clicked to change content
    info.classList.add("tomorrowInfo");
    info.innerHTML = title + " by " + dueDate;
    info.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
    box.appendChild(info);
    return box;
}

export function createTomorrowTasks(database){
    let allBox = document.querySelectorAll(".tomorrowBox");
    allBox.forEach((b) => {
        b.parentElement.removeChild(b);
    });

    let tomorrowPage = document.querySelector(".tomorrowPage");
    if (tomorrowPage.hasChildNodes())
        tomorrowPage.removeChild(tomorrowPage.lastChild);
    let allTasks = database.getAllTasks;
    for (let i = 0; i < allTasks.length; i++){
        if (isTomorrow(parseISO(allTasks[i].getDueDate))){
            tomorrowPage.appendChild(createFramework(allTasks[i].getTitle, allTasks[i].getDueDate));
        }
    }

    if (!tomorrowPage.hasChildNodes()){
        let empty = document.createElement("div");
        empty.textContent = "Nothing is up tomorrow!";
        empty.style.cssText = "color: #C06C84; font-size: 45px; text-align: center; margin-top: 50px";
        tomorrowPage.appendChild(empty);
    }
}