import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  imports: [],
  templateUrl: './binding.html',
  styleUrl: './binding.css',
})
export class Binding {
  callMe(){
    alert("Hello Angular 21")
  }
  count = 0;
  counter(action:String){
    if (action=='minus'){
      this.count>0 && this.count--;
    }else {
      this.count++;
    }
  }
  handleEvent(eventName:String){
    console.log(eventName);
  }
}
