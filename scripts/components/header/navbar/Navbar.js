import HeaderController from "../../../main/HeaderController.js";

export default class Navbar{
   constructor(){

   }

   render(){
      this.container = document.createElement('nav');

      this.logo = document.createElement('img');
      this.logo.src = "https://pbs.twimg.com/profile_images/1066342574393368576/epGHohR0_400x400.jpg";

      this.container.append(this.logo);

      return this.container;
   }
}