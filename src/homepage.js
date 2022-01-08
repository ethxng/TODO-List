import './homepage.css';
export function createHomepage(){
    const homepage = document.querySelector(".homepage");
    let addingOptions = document.createElement('div');
    addingOptions.style.cssText = "display: flex; align-items: flex-end; flex-direction: column; margin-right: 20px; margin-top: 30px";
    homepage.appendChild(addingOptions);

    let addTask = document.createElement('button');
    addTask.textContent = "+ Add Task";
    addTask.setAttribute('id', 'addTask');
    addTask.style.cssText = "color: lightyellow; padding: 10px; font-size: 25px; border:none; background-color: black";
    
    addTask.addEventListener('mouseover', () => {
        document.getElementById('addTask').style.cssText = "padding: 10px; font-size: 25px; border:none; color: #A0816C; background-color: black";
    });
    addTask.addEventListener('mouseout', () => {
        document.getElementById('addTask').style.cssText = "color: lightyellow; padding: 10px; font-size: 25px; border:none; background-color: black";
    });

    let addProject = document.createElement('button');
    addProject.textContent = "+ Add Project";
    addProject.setAttribute('id', 'addProject');
    addProject.style.cssText = "color: lightyellow; padding: 10px; font-size: 25px; border:none; background-color: black";
    
    addProject.addEventListener('mouseover', () => {
        document.getElementById('addProject').style.cssText = "padding: 10px; font-size: 25px; border:none; color: #A0816C; background-color: black";
    });
    addProject.addEventListener('mouseout', () => {
        document.getElementById('addProject').style.cssText = "color: lightyellow; padding: 10px; font-size: 25px; border:none; background-color: black";
    });

    addingOptions.appendChild(addTask);
    addingOptions.appendChild(addProject);
}

export function fillOutHomePage(database){
    const homepage = document.querySelector(".homepage");
    // delet all boxes and start over before rendering again
    let allBox = document.querySelectorAll(".box");
    allBox.forEach((box) => {
        box.parentElement.removeChild(box);
    })
    let allTask = database.getAllTasks;
    if (allTask.length === 0){
        let announcement = document.createElement('div');
        announcement.textContent = "Nothing yet!";
        announcement.className = "announcement";
        announcement.style.cssText = "color: #AF9274; font-size: 60px; text-align: center";
        homepage.appendChild(announcement);
    }
    else{
        let nothingYet = document.querySelector(".announcement");
        if (nothingYet != null){
            nothingYet.parentElement.removeChild(nothingYet);
        }
        for (let i = 0; i < allTask.length; i++){
            let box = document.createElement('div');
            box.classList.add("box");
            if (allTask[i].getPriority === "High")
                box.style.cssText = "display: inline-block; border: 2px solid red; height: auto; width: 1200px";
            else if (allTask[i].getPriority === "Medium")
                box.style.cssText = "display: inline-block; border: 2px solid yellow; height: auto; width: 1200px";
            else if (allTask[i].getPriority === 'Low')
                box.style.cssText = "display: inline-block; border: 2px solid #03AC13; height: auto; width: 1200px";

            homepage.appendChild(box);

            //content of the task
            let info = document.createElement('div');
            // these class will be referenced when the button edit is clicked to change content
            info.classList.add("info");
            //info.innerHTML = allTask[i].getTitle + " by <strong><u>" + allTask[i].getDueDate + "</u></strong>";
            info.innerHTML = allTask[i].getTitle + " by " + allTask[i].getDueDate;
            info.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
            box.appendChild(info);

            let allButtons = document.createElement('div');
            allButtons.style.cssText = "float: right; padding: 10px; display: flex; gap: 10px";
            box.appendChild(allButtons);

            let edit = document.createElement('button');
            edit.textContent = "Edit";
            edit.className = "edit";
            edit.style.cssText = "font-size: 25px; border: none; background-color: black; color: gray";
            allButtons.appendChild(edit);

            let remove = document.createElement('button');
            remove.textContent = "Delete";
            remove.classList.add("delete");
            remove.style.cssText = "font-size: 25px; border: none; background-color: black; color: gray";
            allButtons.appendChild(remove);
        }
    }
}

export function addTaskForm(projects){
    const homepage = document.querySelector(".homepage");
    let box = document.createElement('div');
    box.className = 'addTaskForm';
    box.style.cssText = "height: 450px; width: 450px; margin: auto; border: 3px solid white; display: none; margin-bottom: 15px";
    homepage.appendChild(box);

    // append all elements into div to create add form box
    box.appendChild(closeAndSubmitAddForm());
    box.appendChild(createIntro());
    box.appendChild(createTitle());
    //box.appendChild(createDescription());
    box.appendChild(createDate());
    box.append(createPriorityList());
    box.appendChild(createProjectList(projects));
}

export function addProjectForm() {
    const homepage = document.querySelector(".homepage");
    let box = document.createElement('div');
    box.className = "addProjectForm";
    box.style.cssText = "height: 450px; width: 450px; margin: auto; border: 3px solid white; display: none";
    homepage.appendChild(box);

    box.appendChild(closeAndSubmitAddProject());
    box.appendChild(createIntro());
    let titleParent = createTitle();
    let title = titleParent.children;
    title[0].classList.add("titleInputProjectForm");
    box.appendChild(titleParent);
    //box.appendChild(createDescription());
}

function closeAndSubmitAddProject(){
    let btn = document.createElement('div');
    let submit = document.createElement('button');
    submit.setAttribute('id', 'addProjectSubmitBtn')
    let close = document.createElement('button');
    close.setAttribute('id', 'addProjectCloseBtn');
    submit.textContent = 'Add';
    close.textContent = 'Close';
    submit.style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    close.style.cssText = "font-size: 25px; border: none; background-color: black; color: white; border-left: none; border-top: none; border-bottom: none";
    btn.style.cssText = "text-align: end";

    //effects for add and close buttons above
    submit.addEventListener('mouseover', () => {
        document.querySelector("#addProjectSubmitBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: #9CC0E7";
    });

    submit.addEventListener('mouseout', () => {
        document.querySelector("#addProjectSubmitBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    });

    close.addEventListener("mouseover", () => {
        document.querySelector("#addProjectCloseBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: #9CC0E7";
    });

    close.addEventListener("mouseout", () => {
        document.querySelector("#addProjectCloseBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    });

    close.addEventListener("click", () => {
        document.querySelector(".addProjectForm").style.cssText = "display: none";
    });

    btn.appendChild(submit);
    btn.appendChild(close);
    return btn;
}

function closeAndSubmitAddForm(){
    let btn = document.createElement('div');
    let submit = document.createElement('button');
    submit.setAttribute('id', 'addFormSubmitBtn')
    let close = document.createElement('button');
    close.setAttribute('id', 'addFormCloseBtn');
    submit.textContent = 'Add';
    close.textContent = 'Close';
    submit.style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    close.style.cssText = "font-size: 25px; border: none; background-color: black; color: white; border-left: none; border-top: none; border-bottom: none";
    btn.style.cssText = "text-align: end";

    //effects for add and close buttons above
    submit.addEventListener('mouseover', () => {
        document.querySelector("#addFormSubmitBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: #9CC0E7";
    });

    submit.addEventListener('mouseout', () => {
        document.querySelector("#addFormSubmitBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    });

    close.addEventListener("mouseover", () => {
        document.querySelector("#addFormCloseBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: #9CC0E7";
    });

    close.addEventListener("mouseout", () => {
        document.querySelector("#addFormCloseBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    });

    close.addEventListener("click", () => {
        document.querySelector(".addTaskForm").style.cssText = "display: none";
        // clear all values before restarting the form
        document.querySelector(".titleInputAddTask").value = "";
        document.querySelector(".dateInputAddTask").value = '';
    });

    btn.appendChild(submit);
    btn.appendChild(close);
    return btn;
}

function createIntro(){
    let intro = document.createElement("div");
    intro.textContent = "TODO list";
    intro.style.cssText = "color: white; font-size: 25px; text-align: center; padding: 10px; font-samily: serif";
    return intro;
}

export function createTitle(){
    let title = document.createElement('div');
    title.textContent = "Title:";
    title.style.cssText = "color: white; padding: 15px; font-size: 25px";
    let titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.placeholder = "Title";
    titleInput.classList.add("titleInputAddTask");
    titleInput.style.cssText = "margin-left: 30px; font-size: 25px";
    title.appendChild(titleInput);
    return title;
}

export function createDate(){
    let date = document.createElement('div');
    date.textContent = "Due Date: ";
    date.style.cssText = "color: white; padding: 15px; font-size: 25px";
    let dateInput = document.createElement('input');
    dateInput.type = "date";
    dateInput.placeholder = "mm/dd/yyyy";
    dateInput.style.cssText = "font-size: 25px; margin-left: 10px";
    dateInput.className = "dateInputAddTask";
    date.appendChild(dateInput);
    return date;
}

export function createPriorityList(){
    let priority = document.createElement('div');
    priority.textContent = "Priority:";
    priority.style.cssText = "color: white; padding: 15px; font-size: 25px";
    let dropDownList = document.createElement('select');
    dropDownList.setAttribute("id","dropDownPriority");
    dropDownList.style.cssText = "margin-left: 30px; padding: 5px; width: 140px; height: 30px; font-size: 15px";
    let priorityList = ["High", "Medium", "Low"];
    priority.appendChild(dropDownList);
    for (let i = 0; i < priorityList.length; i++){
        let a = document.createElement("option");
        a.textContent = priorityList[i];
        a.style.cssText = "color: black";
        dropDownList.appendChild(a);
    }
    return priority;
}

export function createProjectList(projects){
    let addToProj = document.createElement('div');
    addToProj.textContent = "Add to Project: ";
    addToProj.style.cssText = "color: white; padding: 15px; font-size: 25px";
    let dropDownProj = document.createElement('select');
    dropDownProj.setAttribute('id', 'dropDownProject');
    dropDownProj.style.cssText = 'margin-left: 30px; padding: 5px; width: 140px; height: 30px; font-size: 15px';
    addToProj.appendChild(dropDownProj);
    let project = ["None"];
    // get all projects from database
    let projectList = projects.getAllProjects;
    for (let i = 0; i < projectList.length; i++){
        project.push(projectList[i].getProjectName);
    }
    for (let j = 0; j < project.length; j++){
        let b = document.createElement('option');
        b.textContent = project[j];
        dropDownProj.appendChild(b);
    }
    return addToProj;
}

export function homepageButtonSetUp() {
    let addTask = document.querySelector("#addTask");
    addTask.addEventListener("click", () => {
        if (document.querySelector(".addProjectForm").style.display === "none")
            document.querySelector(".addTaskForm").style.cssText = "height: 450px; width: 450px; margin: auto; border: 3px solid white; display: block";
    });
    let addProject = document.querySelector("#addProject");
    addProject.addEventListener("click", () => {
        if (document.querySelector(".addTaskForm").style.display === "none"){
            document.querySelector(".addProjectForm").style.cssText = "height: 450px; width: 450px; margin: auto; border: 3px solid white; display: block";
        }
    });  
}