import { Component, signal } from '@angular/core';

@Component({
  selector: 'todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  tasks = signal([
    {id:0,title:"Team Lunch",completed:false},
  ])
  title= signal('');



  addTask(){
    if(this.title()){
          this.tasks.update((item)=>(
      [...item,{id:this.tasks().length,title:this.title(),completed:false}]

    ))
     this.title.set('');
    }
   
  }
  deleteTask(id:number){
    this.tasks.update((tasks)=>tasks.filter((task)=>task.id!=id))
  }
}
