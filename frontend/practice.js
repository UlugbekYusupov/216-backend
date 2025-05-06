console.log(window.screen.width);
console.log(window.screen.height);

console.log(window.location.href);

let a = 324;

if (a == 34) {
  window.location.reload();
}
// window.history.back();
// window.history.forward();

// window.location.replace("https://www.google.com");

if (navigator.onLine == false) {
  alert("Please check your internet");
} else {
  alert("You are online");
}
