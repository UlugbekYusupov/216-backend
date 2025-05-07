const form = document.createElement("form");
form.classList.add("form");
form.addEventListener("submit", handleSubmit);

const labels = ["Username", "Email", "Password"];
const types = ["text", "email", "password"];
const headings = ["Sign up", "Login"];

const toggleLabels = [
  "Already have an account? Login",
  "Don't have an account? Sign up",
];

const heading = document.createElement("h2");
heading.textContent = headings[0];
heading.classList.add("heading");
form.appendChild(heading);

function createLabel(i) {
  const label = document.createElement("label");
  label.textContent = labels[i];
  label.classList.add("label");
  form.appendChild(label);
}

function createInput(i) {
  const input = document.createElement("input");
  input.type = types[i];
  input.placeholder = `Please enter your ${labels[i].toLowerCase()}`;
  input.name = labels[i].toLowerCase();
  input.classList.add("input");
  form.appendChild(input);
}

for (let i = 0; i < labels.length; i++) {
  createLabel(i);
  createInput(i);
}

const toggleButton = document.createElement("button");
toggleButton.textContent = toggleLabels[0];
toggleButton.type = "button";
toggleButton.classList.add("toggle");
toggleButton.addEventListener("click", handleToggle);
form.appendChild(toggleButton);

const submitButton = document.createElement("button");
submitButton.textContent = document.body.appendChild(form);
submitButton.textContent = headings[0];
submitButton.type = "submit";
submitButton.classList.add("button");

form.appendChild(submitButton);

let isLogin = false;

function handleToggle() {
  isLogin = !isLogin;
  const inputs = document.querySelectorAll("input");
  const labels = document.querySelectorAll("label");

  if (isLogin) {
    heading.textContent = headings[1];
    submitButton.textContent = headings[1];
    toggleButton.textContent = toggleLabels[1];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name === "username") {
        inputs[i].style.display = "none";
      }
    }
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].textContent === "Username") {
        labels[i].style.display = "none";
      }
    }
  } else {
    heading.textContent = headings[0];
    submitButton.textContent = headings[0];
    toggleButton.textContent = toggleLabels[0];

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name === "username") {
        inputs[i].style.display = "flex";
      }
    }
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].textContent === "Username") {
        labels[i].style.display = "flex";
      }
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (isLogin) {
    handleLogin();
  } else {
    handleSignup();
  }
}

function handleLogin() {
  const inputs = document.querySelectorAll("input");
  const user = {
    email: inputs[1].value,
    password: inputs[2].value,
  };

  fetch("http://localhost:3000/auth/login", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function handleSignup() {
  const inputs = document.querySelectorAll("input");
  const user = {
    username: inputs[0].value,
    email: inputs[1].value,
    password: inputs[2].value,
  };
  fetch("http://localhost:3000/auth/register", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => alert(data.message));
  inputs.forEach((input) => {
    input.value = "";
  });
}
