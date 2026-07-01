import { Component, signal } from '@angular/core';
import { Effect } from '../effect/effect';
import { every } from 'rxjs';

@Component({
  selector: 'control-flow-statemets',
  imports: [],
  templateUrl: './control-flow-statemets.html',
  styleUrl: './control-flow-statemets.css',
})
export class ControlFlowStatemets {
  isLogin = signal(true);
  show = signal(true);
  status = signal('progress')

  handleLogin(status:boolean){
    this.isLogin.set(status)
    
  }
  handleStatus(event:Event){
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value)
  }

  users=signal(["Bhumi","Kartikey","Aman","Anamika","Harshit"])

  usersDetail = signal([
    {id:1,name:"Kartikey", surname:"Rajput",email:"rajputlartikey10@gmail.com"},
    {id:2,name:"Bhumi", surname:"Tripathi",email:"bhumikhushi16@gmail.com"},
    {id:3,name:"Aman", surname:"Kumar",email:"amankumar11@gmail.com"},
    {id:4,name:"Anamika", surname:"Kumari",email:"anamikakumari13@gmail.com"},
  ])
}
