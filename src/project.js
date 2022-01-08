export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    get getProjectName(){
        return this.name;
    }

    set setProjectName(val){
        this.name = val;
    }

    get getProject(){
        return this.tasks;
    }

    set addTask(task){
        this.tasks.push(task);
    }

    set cleanProject(value){
        // value is the new project that this "task" belongs to 
        // traverse through project array, if each task's belongTo != value, delete that task
        for (let i = 0; i < this.tasks.length; i++){
            if (this.tasks[i].getProjectName === value){
                this.tasks.splice(i, 1);
                i--;
            }
        }
    }

    set removeTask(array){
        // array[0] = title, array[1] = dueDate;
        for (let i = 0; i < this.tasks.length; i++){
            if (this.tasks[i].getTitle === array[0] && this.tasks[i].getDueDate === array[1]){
                this.tasks.splice(i, 1);
                i--;
            }
        }
    }
}