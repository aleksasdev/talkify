import HeaderController from "../../../main/HeaderController.js";

export default class Navbar{
   constructor(){

   }

   render(){
      this.container = document.createElement('nav');

      this.logo = document.createElement("img");
      this.logo.src = "../../../../assets/header/logo.png";

      this.menu = document.createElement('div');
      this.menu.classList.add('menu');
      new HeaderController().append(this.menu);

      this.createButton("Pagrindinis", "index.html");
      this.createButton("Privalumai", "features.html");
      this.createButton("Išbandyti", "subscribe.html");

      this.cta = document.createElement('div');
      this.cta.classList.add('cta-button', 'button-style');
      this.cta.textContent = "Prisijungti";

      this.container.append(this.logo, this.cta);
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