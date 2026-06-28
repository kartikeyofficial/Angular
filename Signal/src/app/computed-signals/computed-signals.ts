import { Component, computed, signal } from '@angular/core';



@Component({
  selector: 'computed-signals',
  imports: [],
  templateUrl: './computed-signals.html',
  styleUrl: './computed-signals.css',
})
export class ComputedSignals {
  height = signal(100);
  width = signal(20);
  area = computed(()=>this.height()*this.width()
  )

  handleHeight(){
    this.height.set(this.height()+10);
   
  }
}
