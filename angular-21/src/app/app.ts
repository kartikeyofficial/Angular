import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Interpolation } from './interpolation/interpolation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Interpolation,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
