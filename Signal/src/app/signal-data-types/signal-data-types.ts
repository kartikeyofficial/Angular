import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'signal-data-types',
  imports: [],
  templateUrl: './signal-data-types.html',
  styleUrls: ['./signal-data-types.css','../effect/effect.css']
})
export class SignalDataTypes {
  data:WritableSignal<string|number|boolean> = signal("Kartikey"); // Signal Data Type
  data1 = signal<string|number|boolean>("Kartikey");    // Signal Value Data Type

  users:WritableSignal<string[]>= signal(['Banana','Papaya','Grapes']);

  speed:Signal<number> = computed<number>(()=>90)
  handleData(){
     this.data.set("Bhumi");
    this.users.update((item)=>[...item,'bruce'])
    console.log(this.users);
    
  }
}
