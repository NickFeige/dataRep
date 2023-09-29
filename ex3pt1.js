//create array 
let myTask =[];

let addTask= (task)=>{
    let lenght= myTask.push(task);
    console.log("item  "+task+" shas been added");
    return lenght;
}
let listAllTasks=()=>{
    myTask.forEach((item)=>{
    console.log(item);
});//will list the items
}
let deletTask=(task)=>{
    let index =myTask.indexOf(task);
    if(index>-1){
    myTask.splice(index,1);
    console.log("item"+task+"has been removed");
    }
    else{
        console.log("item "+ task+" was not found")
    }
    return myTask.length;

}

addTask("learn js");
listAllTasks();
deletTask("learn js");