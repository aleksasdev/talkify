import HeaderController from "../../../main/HeaderController.js";

export default class Navbar{
   constructor(){

   }

   render(){
      this.container = document.createElement('nav');

      this.logoWrapper = document.createElement('a');
      this.logoWrapper.classList.add('logo-wrapper');
      this.logoWrapper.href = "/";

      this.logo = document.createElement("img");
      this.logo.src = "../../../../assets/header/logo.png";
      this.logoWrapper.append(this.logo);

      this.menu = document.createElement('div');
      this.menu.classList.add('menu');
      new HeaderController().append(this.menu);

      this.createButton("Pagrindinis", "index.html");
      this.createButton("Privalumai", "features.html");
      this.createButton("Išbandyti", "subscribe.html");

      this.cta = document.createElement('a');
      this.cta.href = "subscribe.html";
      this.cta.classList.add('cta-button', 'button-style');
      this.cta.textContent = "Prisijungti";

      this.container.append(this.logoWrapper, this.cta);
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