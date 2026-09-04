import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  buttonDisable=false;

  toggle(){
    this.buttonDisable=!this.buttonDisable;
  }
  url="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2021/08/27/6aab1fe1-a152-4216-a41e-c3ca9e41fe54_15d28a3f.jpg?itok=0CLKzyFR&v=1630056283"
}
