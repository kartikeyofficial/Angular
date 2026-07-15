import { Component } from '@angular/core';

@Component({
  selector: 'search-box',
  imports: [],
  template: ` 
  <hr>
  <p>
      <input class='search-box' type='text' placeholder='start type'>
  </p>
  `,
  styles: `.search-box{
  width:200px,border-radius:8px,font-size:30px,padding:100px}`,
})
export class SearchBox {}
