import { Component, signal } from '@angular/core';

@Component({
  selector: 'switch-case',
  imports: [],
  templateUrl: './switch-case.html',
  styleUrls: ['./switch-case.css',]
})
export class SwitchCase {
  status = signal("loading")
  handleSwitch(event:Event){
    const target= event.target as HTMLSelectElement
    this.status.set(target.value);
  }
}
