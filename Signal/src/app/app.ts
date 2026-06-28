import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComputedSignals } from './computed-signals/computed-signals';
import { Effect } from './effect/effect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ComputedSignals,Effect],
  templateUrl: './app.html',
  styleUrl: './app.css'
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
