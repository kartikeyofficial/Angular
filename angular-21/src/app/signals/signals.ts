import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  data = 10;
  count = signal(0);
  height = signal(100);
  width = signal(10);
  area =computed(()=>this.height()*this.width());
  fruit= signal<number|string|boolean>("Apple");

  constructor() {
    effect(()=>{
      // console.log("this is data",this.data)
      console.log('this is Count', this.count());
      if (this.count()==10){
        this.count.set(0);
      }
    })
    effect(()=>{
      console.log(this.fruit());
    })
  }
  updateData(){
    this.data++;
  }
  updateCount(){
    this.count.set(this.count()+1);
  }
  handleHeight(){
    this.height.set(this.height()+10);
  }
  changeFruit(){
    this.fruit.set("Banana");

  }
}
