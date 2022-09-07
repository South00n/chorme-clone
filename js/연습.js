const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// "hidden", "username" 중복제거 + 겹치는 부분 제거안한거

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${savedUsername}`;
}
