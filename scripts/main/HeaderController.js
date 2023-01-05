import Controller from "./Controller.js";

export default class HeaderController extends Controller{
   constructor(){
      super();
      this.section = document.querySelector('header');
   }
}