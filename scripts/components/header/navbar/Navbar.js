import HeaderController from "../../../main/HeaderController.js";

export default class Navbar{
   constructor(){

   }

   render(){
      this.container = document.createElement('nav');

      this.logo = document.createElement('svg');
      this.logo.innerHTML = "../../../../assets/header/logo_shade.svg";

      this.container.append(this.logo);

      return this.container;
   }
}