const { createElement } = require("react");

let todos = [];
let input = document.querySelector("input");
function addTodo(){
    todos.push({
        title: input.value
    })
    let lit = createElement("li");
    lit.inner
    document.querySelector("ol").appendChild(lit);
}
document.querySelector("button").addEventListener("click",addTodo)