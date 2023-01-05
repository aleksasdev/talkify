import HeaderController from "../../../main/HeaderController.js";

export default class Navbar{
   constructor(){

   }

   render(){
      this.container = document.createElement('nav');
      this.container.classList.add('section-style');

      this.logo = document.createElement("img");
      this.logo.src = "../../../../assets/header/logo_shade.svg";

      this.menu = document.createElement('div');
      this.menu.classList.add('menu');


      this.createButton("Home", "index.html");
      this.createButton("Features", "features.html");
      this.createButton("Subscribe", "subscribe.html");

      this.cta = document.createElement('div');
      this.cta.classList.add('button-style');
      this.cta.textContent = "Subscribe";

      this.container.append(this.logo, this.menu, this.cta);
      return this.container;
   }

   createButton(text, href){
      this.button = document.createElement("a");
      this.button.classList.add('menu-button');
      this.button.href = href;
      this.button.textContent = text;

      this.menu.append(this.button);
   }
}