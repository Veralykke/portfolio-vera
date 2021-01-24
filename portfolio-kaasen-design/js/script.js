//import { validation } from './kontakt-meg';

const menuIcon = document.querySelector(".hamburger-menu");
const menubar = document.querySelector(".menubar");

menuIcon.addEventListener("click", () => {
    menubar.classList.toggle("change");
});