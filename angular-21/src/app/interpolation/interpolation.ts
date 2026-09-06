import { Component } from '@angular/core';

@Component({
  selector: 'interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  name="Kumar Kartikey";
  age=21;
  email="rajputkartikey10@gmail.com"

  getName(a:number,b:number){
    return a+b;
  }
}
