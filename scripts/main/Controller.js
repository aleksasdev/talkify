class Controller{
   section;

   constructor(){
      
   }

   append(container){
      this.section.append(container);
   }

   clear(){
      while(this.section.firstChild){ this.section.removeChild(this.section.firstChild) };
   }
}