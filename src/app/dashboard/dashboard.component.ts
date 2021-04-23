import { Component, OnInit } from '@angular/core';
import {StudentsComponent} from '../students/students.component';
import {StudentsService} from '../students.service';
import {Person} from '../Person';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
students: Person[] = [];
  constructor(private studentService: StudentsService) { }
  ngOnInit(): void {
    this.getStudents();
  }
getStudents(): void{
    this.studentService.getStudents()
      .subscribe(students => this.students = students.slice(1, 4));
}
}
