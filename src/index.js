import pageLoadHome from "./home";
import pageLoadMenu from "./menu";
import pageLoadContact from "./contact";
const homeTabLink = document.getElementById("home");
const contactTabLink = document.getElementById("contact");
const menuTabLink = document.getElementById("menu");

pageLoadHome();

menuTabLink.addEventListener("click", (event) => {
  event.preventDefault();
  clearContent();
  pageLoadMenu();
});
contactTabLink.addEventListener("click", (event) => {
  event.preventDefault();
  clearContent();
  pageLoadContact();
});
homeTabLink.addEventListener("click", (event) => {
  event.preventDefault();
  clearContent();
  pageLoadHome();
});

function clearContent() {
  document.getElementById("content").innerHTML = "";
}
