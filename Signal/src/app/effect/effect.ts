import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {
  speed = signal(0);
  color = 'black';

constructor(){
  effect(()=>{
    if(this.speed()>0 && this.speed()<80){
      this.color='Green'
    }
    if(this.speed()>=80 && this.speed()<120){
      this.color='orange';
    }
    if(this.speed()>=120 && this.speed()<160){
      this.color='red';
    }
    console.log("Speed: ",this.speed());
    
  })
}

  increaseSpeed(){
    this.speed.set(this.speed()+10)
  }
}
