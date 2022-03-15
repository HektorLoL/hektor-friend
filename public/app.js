console.log('This is the root app.js "/app.js"');

const logged = document.cookie.includes("logged");

if (!logged) {
  window.location.href = "/login";
} else {
  console.log("logged");

  const friendShipDiv = document.querySelector(".root");
  friendShipDiv.style.display = "flex";
}
