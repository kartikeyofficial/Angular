import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data:number|string|boolean = 20

  updateData(val:string){
    this.data=val;
    console.log(this.sum(10,20))
  }
  editData(){
    this.data=true;
  }
  
  
  sum(num1:number,num2:number){
    return num1+num2;
  }

  handleEvent(event:PointerEvent |Event){
    console.log(event);
    
  }
  console.log("Function & Events");

}
