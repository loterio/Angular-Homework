import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  firstName = 'Fabio Vitor';
  lastName = 'Loterio';
  about = {
    age: 18,
    sex: 'male',
    height: 1.77,
    weight: 68.6
  }
  constructor() { }

  ngOnInit(): void {
  }

}
