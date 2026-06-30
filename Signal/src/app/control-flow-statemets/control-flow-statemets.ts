import { Component, signal } from '@angular/core';
import { Effect } from '../effect/effect';

@Component({
  selector: 'control-flow-statemets',
  imports: [],
  templateUrl: './control-flow-statemets.html',
  styleUrl: './control-flow-statemets.css',
})
export class ControlFlowStatemets {
  isLogin = signal(true);


  handleLogin(status:boolean){
    this.isLogin.set(status)
    
  }
}
