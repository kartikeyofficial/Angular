import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { iterator } from 'rxjs/internal/symbol/iterator';

@Component({
  selector: 'getter-setter',
  imports: [FormsModule],
  templateUrl: './getter-setter.html',
  styleUrl: './getter-setter.css',
})
export class GetterSetter {
  userName= signal("Kartikey");
  userData=signal({
    college: "IEC College Of Engineering & Technology",
    email: "kartikey10@gmail.com",
  });

  get userCollege(){
   return this.userData().college;
  }
  set userCollege(val){
    this.userData.update((item)=>({...item,college:val}))
  }
  get userEmail(){
    return this.userData().email;
  }
  set userEmail(val){
    this.userData.update((item)=>({...item,email:val}))
  }


  get uName(){
    return this.userName();
  }
  set uName(val:string){
this.userName.set(val);
  }



}
