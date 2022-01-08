import { parseISO } from 'date-fns/esm';
import isSameDay from 'date-fns/isSameDay';
function createFramework(title, dueDate){
    let box = document.createElement('div');
    box.classList.add("todayBox");
    box.style.cssText = "display: inline-block; border: 3px solid #FF2400; height: auto; width: 1200px";
    //todayPage.appendChild(box);

    //content of the task
    let info = document.createElement('div');
    // these class will be referenced when the button edit is clicked to change content
    info.classList.add("todayInfo");
    info.innerHTML = title + " by " + dueDate;
    info.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
    box.appendChild(info);
    return box;
}

export function getTodayDate(){
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    let today = yyyy + "-" + mm + '-' + dd;
    return today;
}

export function createTodayTasks(database){
    let todayBox = document.querySelectorAll(".todayBox");
    todayBox.forEach((p) => {
        p.parentElement.removeChild(p);
    })
    let allTasks = database.getAllTasks;
    let today = getTodayDate();
    let todayPage = document.querySelector(".todayPage");
    if (todayPage.hasChildNodes())
        todayPage.removeChild(todayPage.lastChild);
    for (let i = 0; i < allTasks.length; i++){
        let truth = isSameDay(parseISO(allTasks[i].getDueDate), parseISO(today));
        if (truth){
            todayPage.appendChild(createFramework(allTasks[i].getTitle, allTasks[i].getDueDate));
        }
    }

    // announce that there is no task if today page is empty
    if (!todayPage.hasChildNodes()){
        let none = document.createElement("div");
        none.textContent = "Nothing for today!";
        none.style.cssText = "color: #C06C84; font-size: 45px; text-align: center; margin-top: 50px";
        todayPage.appendChild(none);
    }
}