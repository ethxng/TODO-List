export class Task {
    constructor(title, dueDate, priority, belongTo){
        this.title = title;
        //this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        // default of belongTo is null; when add to a project, then set it to something else
        this.belongTo = belongTo;
    }

    get getTitle(){
        return this.title;
    }

    get getDescription() {
        return this.description;
    }

    get getDueDate(){
        return this.dueDate;
    }

    get getPriority(){
        return this.priority;
    }

    get getProjectName(){
        return this.belongTo;
    }

    set changeTitle(value){
        this.title = value;
    }

    set changeDueDate(date){
        // make sure that due date is a valid due date first
        this.dueDate = date;
    }
    
    set changePriority(value){
        this.priority = value;
    }

    set changeProject(value){
        this.belongTo = value;
    }
}