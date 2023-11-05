// document.getElementById("me").style.color = "pink";

let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [
{
     text: "Learn HTML"
},
{
    text: "siri"
},
{
    text: "anku"
},
 {
    text: "Laddu"
}
];

function createAppendTodo(todo){
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex","fleax-row");
    todoItemsContainer.appendChild(todoElement);
    
    
    let inputElement = document.createElement('input');
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);
    
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);
    
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for","checkbox-input");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);
    
    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteContainer);
    
    let iconElement = document.createElement("i");
    iconElement.classList.add("far","fa-trash-alt", "delete-icon");
    deleteContainer.appendChild(iconElement);
}

// to minimize the below code further, we will do something
// createAppendTodo(todoList[0]);
// createAppendTodo(todoList[1]);
// createAppendTodo(todoList[2]);
// createAppendTodo(todoList[3]);

for(let each_item of todoList){
    createAppendTodo(each_item);
}
//we used for of loop like in python