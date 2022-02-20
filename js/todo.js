const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let todos = [];


function removelist(event){
    const listToRemove = event.target.parentElement;
    todos = todos.filter((todo)=> todo.id != parseInt(listToRemove.id))
    listToRemove.remove();
	saveToDosInLocalStorage();

}

function putTodo(newTodo) {
    const list = document.createElement("li")
    list.id= newTodo.id;
    const listSpan = document.createElement("span")
    const listBtn = document.createElement("button")
    list.appendChild(listSpan);
    list.appendChild(listBtn);
    todoList.appendChild(list);
    listSpan.innerText=newTodo.text; 
    listBtn.innerText="❌"
    listBtn.addEventListener("click",removelist)
};



function saveToDosInLocalStorage () {
localStorage.setItem("todos",JSON.stringify(todos));
}

const savedTodos = localStorage.getItem("todos")
if(savedTodos !==null) {
    const parsedTodos = JSON.parse(savedTodos); 
    todos = parsedTodos;
    parsedTodos.forEach(putTodo);
}

function addTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value =""
    const todosObj = {
        text: newTodo,
        id: Date.now()
    }
    putTodo(todosObj);
    todos.push(todosObj);
    saveToDosInLocalStorage();
}

todoForm.addEventListener("submit",addTodo);
