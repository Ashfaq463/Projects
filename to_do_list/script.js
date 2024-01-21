// Variables
const Inputbox = document.getElementById("box");
const taskContainer = document.getElementById("task-container");

//Function for Adding new Tasks.
function AddTask() {
    if (Inputbox.value === '')
    {
        alert("You must write something!!");
        alert("No Task Added");
    } else 
    {
        let li = document.createElement("li");
        li.innerHTML = Inputbox.value;
        
        // Create a span for the close button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "close";
        li.appendChild(span);               
        taskContainer.appendChild(li);
        
        
        span.addEventListener("click", function()
        {
            li.remove();            
        });
    }
    Inputbox.value = "";
    saveData();
}

// Checking and Unchecking the Tasks.
taskContainer.addEventListener("click" , function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }   
} , false);

//Function for saving the Tasks.
function saveData()
{
    localStorage.setItem("data" , taskContainer.innerHTML);
}

// Function for displaying saving tasks.
function displaySavedTask()
{
    taskContainer.innerHTML = localStorage.getItem("data");
    attachEventListeners()
}


// Function for Deleting the tasks after refreshing the browser.
function attachEventListeners() 
{    
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function (button)
     {
        button.addEventListener("click", function () 
        {
            button.parentElement.remove();
            saveData();
        });
    });
}

displaySavedTask();
