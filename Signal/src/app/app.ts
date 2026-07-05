import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComputedSignals } from './computed-signals/computed-signals';
import { Effect } from './effect/effect';
import { SignalDataTypes } from './signal-data-types/signal-data-types';
import { CounterApp } from './counter-app/counter-app';
import { ControlFlowStatemets } from './control-flow-statemets/control-flow-statemets';
import { SwitchCase } from './switch-case/switch-case';
import { TwoWayDatabinding } from './two-way-databinding/two-way-databinding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ComputedSignals,Effect,SignalDataTypes,CounterApp,ControlFlowStatemets,SwitchCase,TwoWayDatabinding],
  templateUrl: './app.html',
  styleUrl:"./app.css"
})
export class App {
 data = 10;
 count = signal(0);
 updateData(){
  this.data++;
 }

constructor(){
  effect(()=>{
    console.log("this is count: ",this.count());
    if(this.count()==10){
      this.count.set(0);
    }
    
  })
}

 updateCount(){
  this.count.set(this.count()+1)
 }
}
