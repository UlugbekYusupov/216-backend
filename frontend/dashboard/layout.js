const token = localStorage.getItem("token");
const userId = localStorage.getItem("id");

if (!token || token === "undefined") {
  window.location.replace("/frontend/index.html");
}

const avatar = document.querySelector(".avatar");
const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");

getUser();

function getUser() {
  fetch(`http://localhost:3000/auth/users/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      avatar.textContent = data.username[0].toUpperCase();
      userName.textContent = data.username;
      userEmail.textContent = data.email;
    });
}
