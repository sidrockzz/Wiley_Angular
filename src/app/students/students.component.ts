import { Component, OnInit } from '@angular/core';
import {Person} from '../Person';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  Sname = 'Sid ';
  Age = 22;
  Faculty1 = 'Engineering';
  person: Person = {
    name: 'Siddharth',
    age: 22,
    location: 'Bangalore'
  };
  constructor() { }

  ngOnInit(): void {
  }

}

