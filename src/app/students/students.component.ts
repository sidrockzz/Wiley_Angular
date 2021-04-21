import { Component, OnInit } from '@angular/core';
import {Person} from '../Person';
import {Students} from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  student = Students;

  constructor() { }

  ngOnInit(): void {
  }
}

