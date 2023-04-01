/*
The code below will define the variables and assign them to the specific HTML elements for specific
functionality such as script allow tasks to be inputted, added, reseted, deleted, cross-off, and all tasks
deleted simulatenously. These lines of code create two empty arrays taskList1Items and taskList2Items.
Arrays will be used to store the tasks and initialized to be added by the user for the two checklists. All elements used 
in the arrays will represent specific task sitems, necessary information.

"Let" will be used to be limited in scope to the elements of the tasks, buttons, etc.
*/
let Checklist1 = document.getElementById("Checklist1");
let checkListInput1 = document.getElementById("checkListInput1")
let createTaskButton1 = document.getElementById("createTaskButton1");
let deleteButton1 = document.getElementById("deleteButton1");

let Checklist2 = document.getElementById("Checklist2");
let checkListInput2 = document.getElementById("checkListInput2")
let createTaskButton2 = document.getElementById("createTaskButton2");
let deleteButton2 = document.getElementById("deleteButton2");


let uncrossButton = document.getElementById("uncrossButton")
let deleteAllTasks = document.getElementById("deleteAllTasks")

let firstChecklistItems = [];
let secondChecklistItems = [];

function refreshCheckList (checkList, checkListItems) {
    //the 'checklist.innerHTML ' will clear the lists content
    checkList.innerHTML = "";
    /*the foor loop here will be used to iterate the items 
    in the checkListsItems array.  */
    for (let i = 0; i < checkListItems.length; i++) {
        //the let here will a new list item element.    
        let checkItem = document.createElement("li");
        /*Essentially, this line of code will create the line of text that is 
        going to be displayed with a number, dot, and the text itself. This is 
        to make the items easier to identify. Such as "buy milk" will look like "1. buy milk"
        */ 
        let checkText = document.createTextNode((i+1) + ". " + checkListItems[i])
        //this code will take the text and attach it to the new list item that it was designed for.     
        checkItem.appendChild(checkText); 
            //The click event viewer to each to do items for the checklist. It will trigger the CSS to indicate whether it has been finished.9
            checkItem.addEventListener("click", function() {
                checkItem.classList.toggle("done");
            });
            /*Initially was going to make it "double click" but decided to go with single click for the sake of simplicity for the user. 
            Overall, what the code does is change the visual appearance of the item so that the item will be crossed off.*/
            checkItem.addEventListener("click", function() {
                checkItem.classList.toggle("crossedOff");
            });
            /*logic of this code will result in a button that is an X button. This "X" button will remove the item from the array
            Spefically, the 'checkListItems' at the index "i", which will update and display the list using the "RefreshChecklist" 
            function. Thus, the code will function with the creation of the list of items and also to be removed. 
            */
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "X"; 
            deleteButton.addEventListener("click", function() {
                checkListItems.splice(i, 1);
                refreshCheckList(checkList, checkListItems);
            });
            /*
            The use of .apprendChild with this code is to create the two HTML elements 'checkItem' and
            'checkList'. Then the 'checkItem' will be added inside the 'checkList' with the apprended 
            child method. 
            */
            checkItem.appendChild(deleteButton);
            checkList.appendChild(checkItem); 
    }
}


//Use the following testes to see what shows debug erros in the javascript for chrome.

// Test Case 1
let checkList1 = document.createElement("ul");
let checkListItems1 = ["Task 1", "Task 2", "Task 3"];
refreshCheckList(checkList1, checkListItems1);
console.assert(checkList1.children.length === 3, "Test Case 1 Failed: Incorrect number of tasks created");

// Test Case 2
let checkList2 = document.createElement("ul");
let checkListItems2 = ["Task 1", "Task 2", "Task 3"];
refreshCheckList(checkList2, checkListItems2);
let taskItem2 = checkList2.children[1];
taskItem2.click();
console.assert(taskItem2.classList.contains("done"), "Test Case 2 Failed: Task not marked as done");

// Test Case 3
let checkList3 = document.createElement("ul");
let checkListItems3 = ["Task 1", "Task 2", "Task 3"];
refreshCheckList(checkList3, checkListItems3);
let taskItem3 = checkList3.children[1];
taskItem3.dispatchEvent(new MouseEvent("dblclick"));
console.assert(taskItem3.classList.contains("crossedOff"), "Test Case 3 Failed: Task not crossed off");

// Test Case 4
let checkList4 = document.createElement("ul");
let checkListItems4 = ["Task 1", "Task 2", "Task 3"];
refreshCheckList(checkList4, checkListItems4);
let deleteButton4 = checkList4.children[1].querySelector("button");
deleteButton4.click();
console.assert(checkListItems4.length === 2, "Test Case 4 Failed: Task not deleted from the list");

// Test Case 5
let checkList5 = document.createElement("ul");
let checkListItems5 = ["Task 1", "Task 2", "Task 3"];
refreshCheckList(checkList5, checkListItems5);
let deleteAllButton5 = document.getElementById("deleteAllTasks");
deleteAllButton5.click();
console.assert(checkListItems5.length === 0, "Test Case 5 Failed: All tasks not deleted from the list");
