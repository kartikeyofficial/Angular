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
}
