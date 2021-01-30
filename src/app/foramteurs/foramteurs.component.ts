import { Component, OnInit } from '@angular/core';
import { FakeFormateur } from '../services/FakeFormateurService/FakeFormateur.service';

@Component({
  selector: 'app-foramteurs',
  templateUrl: './foramteurs.component.html',
  styleUrls: ['./foramteurs.component.css']
})
export class ForamteursComponent implements OnInit {
   
  formateurs: Array<any>=[];


  delete(i:number): void {
    this.formateurs.splice(i, 1)
     

  }
  constructor(private data :FakeFormateur) {
  
   }

  ngOnInit(): void {
    this.data.userData.subscribe(d=>this.formateurs=d)
     

  }

  newindex (i:number) {
this.data.changeindex(i)

  }
}
