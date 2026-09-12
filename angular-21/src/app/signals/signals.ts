import { Component, signal } from '@angular/core';

@Component({
  selector: 'signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  data = 10;
  count = signal(100);
}
