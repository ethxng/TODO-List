function createFramework(project){
    let box = document.createElement("div");
    box.classList.add("projectBox");
    box.style.cssText = "display: inline-block; border: 3px solid #45ADA8; height: auto; width: 1200px";

    let projectName = document.createElement('div');
    projectName.innerHTML = project.getProjectName + "<br>";
    projectName.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
    box.appendChild(projectName);

    let allTasks = project.getProject;
    for (let i = 0; i < allTasks.length; i++){
        let eachTask = document.createElement("li");
        eachTask.innerHTML = allTasks[i].getTitle + " by " + allTasks[i].getDueDate + "<br><br>";
        eachTask.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
        projectName.appendChild(eachTask);
    }
    return box;
}

export function createProjectPage(database){
    let projectBox = document.querySelectorAll(".projectBox");
    projectBox.forEach((b) => {
        b.parentElement.removeChild(b);
    });

    let allProjects = database.getAllProjects;
    let projectPage = document.querySelector(".projectPage");
    let a = projectPage.hasChildNodes();
    if (a === true)
        projectPage.removeChild(projectPage.lastChild);
    for (let i = 0; i < allProjects.length; i++){
        // only render if there are tasks within a project
        if (allProjects[i].getProject.length != 0)
            projectPage.appendChild(createFramework(allProjects[i]));
    }
    let b = projectPage.hasChildNodes();
    if (b === false){
        let none = document.createElement("div");
        none.textContent = "Nothing here yet!";
        none.style.cssText = "color: #C06C84; font-size: 45px; text-align: center; margin-top: 50px";
        projectPage.appendChild(none);
    }
}