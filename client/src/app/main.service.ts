import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'Rxjs';
@Injectable()
export class MainService {
  notesArray : object[]=[];
  notes: BehaviorSubject<any[]> = new BehaviorSubject(this.notesArray);
  constructor(private _http: Http ,private _router:Router) {

  }

  onSubmit(Post, cb) {
    this._http.post('/process', Post).subscribe((res) => {
      this.notesArray = res.json();
      this.notes.next(this.notesArray);
      
    })
  }
  
  show(){
    this._http.get('/show').subscribe((res)=>{
      console.log(res.json())
      this.notesArray = res.json();
      this.notes.next(this.notesArray);
    });
  }

}
