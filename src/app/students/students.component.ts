import { Component, OnInit } from '@angular/core';
import {Person} from '../Person';
import {Students} from '../mock-students';
import {StudentsService} from '../students.service';
import {MessagesService} from '../Service/messages.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  selectedStudent ?: Person;
  student: Person[] = [];
  // tslint:disable-next-line:variable-name
  constructor(private stu_service: StudentsService, private messageService: MessagesService) { }
    getStudent(): void {
    this.stu_service.getStudents().subscribe(
        stud => this.student = stud
      );
    }

  ngOnInit(): void {
    this.getStudent();
  }
  onSelect(p: Person): void{
    this.selectedStudent = p;
    this.messageService.add('Select student to be added: {$p}');
  }
}

