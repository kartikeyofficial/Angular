import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Interpolation } from './interpolation/interpolation';
import { Binding } from './binding/binding';
import { PropertyBinding } from './property-binding/property-binding';
import { Signals } from './signals/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Interpolation,Login,Binding,PropertyBinding,Signals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
