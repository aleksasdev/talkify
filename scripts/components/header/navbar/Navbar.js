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

      this.container.append(this.logo);

      this.menu.append(this.createButton("Home"));
      this.menu.append(this.createButton("Features"));
      this.menu.append(this.createButton("Subscribe"));

      this.cta = document.createElement('')

      return this.container;
   }

   createButton(text){
      this.button = document.createElement("a");
      this.button.classList.add('menu-button');
      this.button.textContent = text;

      this.container.append(this.button);
   }
}