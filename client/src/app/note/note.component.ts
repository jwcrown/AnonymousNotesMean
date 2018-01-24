import { Component, OnInit } from '@angular/core';
import { MainService }from './../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  Post:object;
  notes:object[]= []
  constructor(private _mainService:MainService ,private _router:Router) {
    this.Post={note:''}
    this._mainService.notes.subscribe((notes) => { this.notes = notes; })
   }

   onSubmit(){
    this._mainService.onSubmit(this.Post,(data)=>{
      console.log(data)
    });
   }


  ngOnInit() {
    this._mainService.show();
  }

}
