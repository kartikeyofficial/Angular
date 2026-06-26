import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_first_project');
  name= "Kartikey";
  sum= 6+7;
  email='rajputkartikey10@gmail.com'
  getNumber(a:number,b:number){
      return a+b;
  }
  callMe(){
    prompt('Enter Your Name:');
  }
  count = 0;
  counter(action:string){
    if(action=='minus'){
    this.count>0 && this.count--
    }
    else{
      this.count++;
    }
  }
  handleEvent(eventName:string){
     console.log(eventName);
     
  }
}
