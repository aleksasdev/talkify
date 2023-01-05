import Navbar from "../components/header/navbar/Navbar.js";
import HeaderController from "./HeaderController.js";

const currentPage = window.location.href.split("/")[1];
console.log(currentPage);

if(!currentPage){
   new HeaderController().append(new Navbar().render());
}

var button = document.createElement('a');
button.textContent = "test";
button.href = "lol";
new HeaderController().append(button);

fetch("/lol").then()