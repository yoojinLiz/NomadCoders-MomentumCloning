
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY="username";

function onLoginSubmit (event) {
 event.preventDefault();
 const username = loginInput.value;
 localStorage.setItem(USERNAME_KEY, username);
 loginForm.classList.add(HIDDEN_CLASSNAME);
 paintGreetings(username);
 
}

const savedUsername= localStorage.getItem(USERNAME_KEY);
//localStorage가 비어있는 경우 console.log(localStorage.getItem("username"))하면 null을 받는다
if (savedUsername===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}


function paintGreetings(username){
  greeting.innerText =`Good to see you, ${username} !`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);

}

