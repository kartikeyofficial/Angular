import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'two-way-databinding',
  imports: [FormsModule],
  templateUrl: './two-way-databinding.html',
  styleUrl: './two-way-databinding.css',
})
export class TwoWayDatabinding {
  name = signal('Kar');
  age = 10;
}
