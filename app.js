let input = document.querySelector("input");
let btn = document.querySelector("#add");
let delBtn = document.querySelectorAll(".del-btn");
let lis = document.querySelector("ol");
let ctr=1;
function Adder(){
    const newTask = document.createElement("li");
    
    newTask.innerHTML = "<div> <h3>" + input.value + "</h3>" + 
    "<button onclick = 'deleteTodo(" + ctr + ")'>Delete TO-DO</button> </div>";
    newTask.setAttribute("id", "task-" + ctr);
    // newTask.setAttribute("class", "task");
    ctr = ctr+1;
    lis.appendChild(newTask);
    input.value = "";
}
btn.addEventListener("click",Adder);
input.addEventListener("keydown", function(event){
    if (event.key === 'Enter'){
        Adder();
    }
});

function deleteTodo(index){
    const task = document.getElementById("task-"+index);
    task.parentNode.removeChild(task);
}
