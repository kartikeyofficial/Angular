import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  counter:WritableSignal<number> = signal<number>(0);


  increament(){
    this.counter.update((val)=>val+1)
  }
  
  decreament(){
    if(this.counter()>0){
    this.counter.update((val)=>val-1)
  }
  }
  reset(){
   this.counter.set(0);
  }
}



