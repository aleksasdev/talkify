import Navbar from "../components/header/navbar/Navbar.js";
import HeaderController from "./HeaderController.js";

// Constants
const PAGE_CURRENT = window.location.href.split("/")[3];
const PAGE_INDEX = "";
const PAGE_FEATURES = "features.html";
const PAGE_SUBSCRIBE = "subscribe.html";

function renderPage(){
   console.log(PAGE_CURRENT);
   if(PAGE_CURRENT !== PAGE_SUBSCRIBE){
      new HeaderController().append(new Navbar().render());
   }

   // Index page
   if(PAGE_CURRENT === PAGE_INDEX){
      
   }

   if(PAGE_CURRENT === PAGE_FEATURES){
      
   }

   if(PAGE_CURRENT === PAGE_SUBSCRIBE){
      
   }
}
renderPage();