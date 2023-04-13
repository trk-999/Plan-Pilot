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

            /*
            The whole purpose of this code is to add an event listener 
            with as soon as the button is clicked. This function will be
            executed. As the function executes, 'task' the new variable
            will be used to set its value to the value of the 'taskInput1'
            The 'if' statement that will be used here is to check the value
            of 'task' to see if there empty space so that if it does. That 
            will indicate that a task will be added. The code will add this specific
            task to the array 'taskListItems1'. Then the checklist will be refreshed
            with the new task. However, this will function depending on if the 
            task is not empty. 
            */

addTaskButton1.addEventListener("click", function() {
  let task = taskInput1.value;
  if (task.trim()) {
    taskList1Items.push(task);
    refreshTaskList(taskList1, taskList1Items);
    taskInput1.value = "";
  }
});
            /*
            The code will add an event listener to the button with the ID 'resetButton1'. Like with 
            the funciton above. This code sets the items of the variable "taskList1Items" to an 
            empty array. Effectively, removing all the tasks from the first checklist. Resetting
            it back the list to an empty state. 
            */
resetButton1.addEventListener("click", function() {
  taskList1Items = [];
  refreshTaskList(taskList1, taskList1Items);
});
            /*
           The code adds an event listener to the delete button. Immediately 
           when the button is clicked, the function will execute as below. 
           The recently added item from will the array will be remove by
          'pop' method to be used. The refreshCheckList function 
           functions similary to the refreshCheckList used in the "addTaskButton1" 
           but in the reverse with removing the recently added task. 
           */
deleteButton1.addEventListener("click", function() {
  taskList1Items.pop();
  refreshTaskList(taskList1, taskList1Items);
});

/*
The addTaskButton2, resetButton2, and deleteButton2 function 
the exact same as AddTaskButton1, resetButton1, and deleteButton1
except that it's for the second check list. 
*/

addTaskButton2.addEventListener("click", function() {
  let task = taskInput2.value;
  if (task.trim()) {
    taskList2Items.push(task);
    refreshTaskList(taskList2, taskList2Items);
    taskInput2.value = "";
  }
});

resetButton2.addEventListener("click", function() {
  taskList2Items = [];
  refreshTaskList(taskList2, taskList2Items);
});

deleteButton2.addEventListener("click", function() {
  taskList2Items.pop();
  refreshTaskList(taskList2, taskList2Items);
});

/* The delete all button will be incorporated into Version 0.0.2 along
with other features that will be planned at another time. */
deleteAllButton.addEventListener("click", function() {
  taskList1Items = [];
  taskList2Items = [];
  refreshTaskList(taskList1, taskList1Items);
  refreshTaskList(taskList2, taskList2Items);
});

/* 
This code may never be used depending on if and when in Version 0.0.2 
will incorporate back end services to keep the data in-tact without having
to use a separate tab on the chrome browser to keep the data in tact. 
*/
document.getElementById('open-popup').addEventListener('click', function() {
  chrome.windows.create({
    url: 'index.html',
    type: 'popup',
    width: 400,
    height: 600
  });
});
