/*
The code below will define the variables and assign them to the specific HTML elements for specific
functionality such as script allow tasks to be inputted, added, reseted, deleted, cross-off, and all tasks
deleted simulatenously. These lines of code create two empty arrays taskList1Items and taskList2Items.
Arrays will be used to store the tasks and initialized to be added by the user for the two checklists. All elements used 
in the arrays will represent specific task sitems, necessary information.

"Let" will be used to be limited in scope to the elements of the tasks, buttons, etc.
*/

let taskList1 = document.getElementById("taskList1");
let taskInput1 = document.getElementById("taskInput1");
let addTaskButton1 = document.getElementById("addTaskButton1");
let resetButton1 = document.getElementById("resetButton1");
let deleteButton1 = document.getElementById("deleteButton1");

let taskList2 = document.getElementById("taskList2");
let taskInput2 = document.getElementById("taskInput2");
let addTaskButton2 = document.getElementById("addTaskButton2");
let resetButton2 = document.getElementById("resetButton2");
let deleteButton2 = document.getElementById("deleteButton2");

let crossOffButton = document.getElementById("crossOffButton");
let deleteAllButton = document.getElementById("deleteAllButton");

let taskList1Items = [];
let taskList2Items = [];

function refreshTaskList(taskList, taskListItems) {
   //the 'taskList.innerHTML ' will clear the lists content
  taskList.innerHTML = "";
   /*the foor loop here will be used to iterate the items 
    in the checkListsItems array.  */
  for (let i = 0; i < taskListItems.length; i++) {
    //the let here will a new task list item element.  
    let taskItem = document.createElement("li");
      /*Essentially, this line of code will create the line of text that is 
        going to be displayed with a number, dot, and the text itself. This is 
        to make the items easier to identify. Such as "buy milk" will look like "1. buy milk"
        */ 
    let taskText = document.createTextNode((i+1) + ". " + taskListItems[i]);
     //this code will take the text and attach it to the new list item that it was designed for.    
    taskItem.appendChild(taskText);
    //The click event viewer here will trigger the CSS to indicate whether it has been finished.
    taskItem.addEventListener("click", function() {
      taskItem.classList.toggle("done");
    });
                /*Initially was going to make it "double click" but decided to go with single click for the sake of simplicity for the user. 
            Overall, what the code does is change the visual appearance of the item so that the item will be crossed off.*/
    taskItem.addEventListener("click", function() {
      taskItem.classList.toggle("crossedOff");
    });
            /*logic of this code will result in a button that is an X button. This "X" button will remove the item from the array
            Spefically, the 'checkListItems' at the index "i", which will update and display the list using the "refreshTasklist" 
            function. Thus, the code will function with the creation of the list of items and also to be removed. 
            */
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.addEventListener("click", function() {
      taskListItems.splice(i, 1);
      refreshTaskList(taskList, taskListItems);
    });
             /*
            The use of .apprendChild with this code is to create the two HTML elements 'taskItem' and
            'taskList'. Then the 'checkItem' will be added inside the 'checkList' with the apprended 
            child method. 
            */
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }
}


//Use the following testes to see what shows debug erros in the javascript for chrome.

let taskList1 = document.getElementById("taskList1");
console.log("taskList1: ", taskList1);
let taskInput1 = document.getElementById("taskInput1");
console.log("taskInput1: ", taskInput1);
let addTaskButton1 = document.getElementById("addTaskButton1");
console.log("addTaskButton1: ", addTaskButton1);
let resetButton1 = document.getElementById("resetButton1");
console.log("resetButton1: ", resetButton1);
let deleteButton1 = document.getElementById("deleteButton1");
console.log("deleteButton1: ", deleteButton1);

let taskList2 = document.getElementById("taskList2");
console.log("taskList2: ", taskList2);
let taskInput2 = document.getElementById("taskInput2");
console.log("taskInput2: ", taskInput2);
let addTaskButton2 = document.getElementById("addTaskButton2");
console.log("addTaskButton2: ", addTaskButton2);
let resetButton2 = document.getElementById("resetButton2");
console.log("resetButton2: ", resetButton2);
let deleteButton2 = document.getElementById("deleteButton2");
console.log("deleteButton2: ", deleteButton2);

let crossOffButton = document.getElementById("crossOffButton");
console.log("crossOffButton: ", crossOffButton);
let deleteAllButton = document.getElementById("deleteAllButton");
console.log("deleteAllButton: ", deleteAllButton);

let taskList1Items = [];
console.log("taskList1Items: ", taskList1Items);
let taskList2Items = [];
console.log("taskList2Items: ", taskList2Items);

